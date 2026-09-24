// H1 freshness contract: the latest evidence date (DATA_AS_OF) is never
// presented as "today", and states known from evidence carry their as-of.
const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
let pass=0,fail=0;
function check(name,ok){if(ok){console.log('PASS '+name);pass++;}else{console.error('FAIL '+name);fail++;}}
check('DATA_AS_OF replaces DEMO_DATE',src.includes("const DATA_AS_OF='")&&!src.includes('DEMO_DATE'));
check('known-state qualifier exists',src.includes("function knownState(state){return state==='Saldado'?state:state+' al '+asOfShort()+' · sin información posterior';}"));
check('no "current" pending obligations claim',!src.includes('Obligaciones pendientes actuales')&&!src.includes('posiciones actuales')&&!src.includes('Deuda observada actual'));
check('no "observed until today" claim',!src.includes('observadas hasta hoy'));
check('no "Foto actual" header',!src.includes('Foto actual'));
check('obligation row, calendar and detail use knownState',src.includes("knownState(state)+' · '")&&src.includes("status:r.pen+r.usd===0?'Saldado':knownState('Pendiente')")&&src.includes("badge(knownState(state)"));
check('card billed amounts carry as-of',src.includes("'Pendiente del ciclo al '+asOfShort()")&&src.includes("miniKpi('Facturado pendiente al '+asOfShort()"));
check('calendar jumps to data date, not today',src.includes("action('Fecha de datos','calendar-today'")&&!src.includes("action('Hoy'"));
check('close insight relative to data date',src.includes('(fecha de datos) faltaban aproximadamente')&&!src.includes('hoy coincide con su día de cierre'));
check('past due dates are never auto-converted to VENCIDO',!/VENCID[OA]/.test(src));
console.log('\n'+pass+'/'+(pass+fail)+' checks passed.');
if(fail)process.exitCode=1;
