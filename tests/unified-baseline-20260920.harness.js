const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
let pass=0,fail=0;
function check(name,ok){if(ok){console.log('PASS '+name);pass++;}else{console.error('FAIL '+name);fail++;}}
check('single UI projection tabs',src.includes("[['spend','Gastos'],['cash','Flujo de caja'],['commitments','Compromisos']]"));
check('projection horizons 6 12 18 24',src.includes("rangeSwitcher('projection',[6,12,18,24]"));
check('default projection horizon 6',src.includes('U.projectionRange=6'));
check('analysis horizons 6 12 18 24',src.includes("analysis-range")&&[6,12,18,24].every(n=>src.includes("'"+n+"'")||src.includes(String(n))));
check('recurrent variable tabs promoted',src.includes("analysis-behavior-tab")&&src.includes("Recurrentes")&&src.includes("Variables"));
check('home compact projection promoted',src.includes('function homeProjectionChart'));
check('chart total line is dotted',src.includes('stroke-dasharray'));
check('chart total labels have explicit vertical gap',src.includes('analysis-total-label')&&src.includes('projection-svg-total'));
// Superseded 2026-09-24: projected income no longer infers salary from
// descriptor regexes; only movements explicitly confirmed as income
// (financial treatment) participate, split into fixed/variable patterns.
check('income from confirmed treatment only',src.includes('function ft48ConfirmedIncomeRows')&&src.includes('ft46IsConfirmedIncome')&&!src.includes('HABERES|PLANILLA|N[ÓO]MINA|SALARIO'));
check('variable income includes PEN and USD accounts',src.includes("variableCurrencies:['PEN','USD']")&&src.includes('Soles (S/) + Dólares ($)'));
check('debts page promoted',src.includes("r==='/productos/deudas'")&&src.includes('function debtsPage'));
check('loan and mortgage demo fixtures promoted',src.includes("id:'loan-demo'")&&src.includes("id:'mortgage-demo'"));
check('sources trust center promoted',src.includes('Centro de confianza.'));
check('privacy masks full values',src.includes("privacy")&&src.includes('******'));
check('Firefox mobile footer underlay promoted',src.includes('bottom:-140px!important'));
check('no private account identifiers',['bcp-','Pichincha','Interbank','Falabella','CMR Visa','193-','194-','Andrés','Mur Tello','BCP Visa','Cuenta Premio'].every(x=>!src.includes(x)));
console.log('\n'+pass+'/'+(pass+fail)+' checks passed.');
if(fail)process.exitCode=1;
