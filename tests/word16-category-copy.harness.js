const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const checks = [
  ['Inicio keeps top-5 summary', src.includes('currentCategories.slice(0,5)')],
  ['Inicio keeps analysis link', src.includes("a('Ver análisis','/analisis')")],
  ['Inicio explains same taxonomy', src.includes('Resumen de las 5 principales categorías; Análisis muestra las mismas categorías con filtros y detalle')],
  ['Analysis explains same taxonomy', src.includes('Son las mismas categorías del resumen de Inicio, con filtros y detalle')],
  ['Original Inicio phrase preserved', src.includes('Participación del consumo neto · periodo seleccionado')],
  ['Original Analysis phrase preserved', src.includes('Participación del total filtrado · incluye devoluciones')],
];

const failed = checks.filter(([, ok]) => !ok);
for (const [name, ok] of checks) console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`);
if (failed.length) process.exit(1);
console.log(`${checks.length}/${checks.length} PASS`);