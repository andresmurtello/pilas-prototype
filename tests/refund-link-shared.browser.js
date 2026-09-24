// Browser QA for the shared refund/reimbursement association UI on the public
// prototype (synthetic fixtures, no backend endpoint -> local-only decisions).
// usage: node tests/refund-link-shared.browser.js [site-url]
// env: PUPPETEER_PATH (module dir), CHROME_PATH (browser executable)
const path = require('path');
const p = require(process.env.PUPPETEER_PATH || 'puppeteer');
const base = process.argv[2] || ('file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/'));
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok: !!ok }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' :: ' + detail : '')); };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function openDrawer(page, id) {
  await page.evaluate((txid) => {
    const b = document.createElement('button');
    b.dataset.action = 'mv-open-drawer'; b.dataset.id = txid; b.style.display = 'none';
    document.body.appendChild(b); b.click(); b.remove();
  }, id);
  await wait(250);
  return page.evaluate(() => (document.querySelector('.rl-refund-link') || {}).innerText || '');
}
const click = async (page, sel) => { await page.evaluate((s) => document.querySelector(s).click(), sel); await wait(200); };

(async () => {
  const browser = await p.launch({ headless: 'new', executablePath: process.env.CHROME_PATH, args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.setViewport({ width: 1440, height: 1024 });
  await page.goto(base + '#/movimientos', { waitUntil: 'load' });
  await wait(400);

  const refund = await openDrawer(page, 't19');
  check('section present on a refund', refund.includes('¿Qué movimiento está compensando?'));
  check('automatic association shown with correction', refund.includes('Detectado automáticamente') && refund.includes('Corregir asociación'), refund.slice(0, 160));
  check('origin movement shown', /Plaza Vea/i.test(refund));
  const purchase = await openDrawer(page, 't03');
  check('no section on a purchase', purchase === '');

  await openDrawer(page, 't19');
  await click(page, '[data-action="rl-open"]');
  let editor = await page.evaluate(() => document.querySelector('.rl-editor')?.innerText || '');
  check('both compensation types offered', editor.includes('Devolución de comercio/banco') && editor.includes('Reembolso de gasto compartido'));
  check('leave unresolved offered', editor.includes('Dejar sin resolver'));
  check('existing origin preselected', await page.evaluate(() => !!document.querySelector('input[data-rl-target="t02"]:checked') || !document.querySelector('input[data-rl-target="t02"]')));
  const all = await page.evaluate(() => document.querySelectorAll('#rl-candidates .rl-option').length);
  await click(page, 'input[data-rl-field="crossProduct"]');
  const same = await page.evaluate(() => document.querySelectorAll('#rl-candidates .rl-option').length);
  check('cross-product search widens candidates', all > same, `all=${all} same-product=${same}`);
  await click(page, 'input[data-rl-field="crossProduct"]');
  await page.focus('#rl-query'); await page.keyboard.type('tottus'); await wait(200);
  const found = await page.evaluate(() => [...document.querySelectorAll('#rl-candidates .rl-option')].map((x) => x.innerText));
  check('search filters earlier movements', found.length > 0 && found.every((x) => /tottus/i.test(x)), JSON.stringify(found).slice(0, 160));

  await click(page, 'input[data-rl-type="REIMBURSEMENT_OF"]');
  editor = await page.evaluate(() => document.querySelector('.rl-editor')?.innerText || '');
  check('reimbursement offers shared context + settlement difference', editor.includes('Cena compartida') && editor.includes('Diferencia de redondeo'));
  const target = await page.evaluate(() => document.querySelector('#rl-candidates input[data-rl-target]')?.dataset.rlTarget);
  await click(page, `input[data-rl-target="${target}"]`);
  await click(page, '[data-action="rl-save"]');
  const saved = await openDrawer(page, 't19');
  check('decision saved locally as USER_CONFIRMED reimbursement', saved.includes('Confirmado por ti') && saved.includes('Reembolso de gasto compartido'), saved.slice(0, 200));
  check('previous automatic association kept for audit', saved.includes('se conserva para auditoría'));

  await click(page, '[data-action="rl-open"]');
  await click(page, '[data-action="rl-unresolved"]');
  const unresolved = await openDrawer(page, 't19');
  check('user can leave it UNRESOLVED', unresolved.includes('Sin asociar') && unresolved.includes('Asociar movimiento'), unresolved.slice(0, 160));

  await page.setViewport({ width: 390, height: 844 });
  await page.goto(base + '#/movimientos/detalle/t19', { waitUntil: 'load' });
  await wait(400);
  const mobile = await page.evaluate(() => (document.querySelector('.rl-refund-link') || {}).innerText || '');
  check('mobile detail page shows association', mobile.includes('¿Qué movimiento está compensando?'));
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  check('no horizontal overflow on mobile', !overflow);
  check('no page errors', errors.length === 0, errors.join(' | ').slice(0, 300));
  await browser.close();
  const failed = results.filter((r) => !r.ok).length;
  console.log(JSON.stringify({ passed: results.length - failed, failed }));
  process.exit(failed ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
