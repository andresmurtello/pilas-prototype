# Pilas — Delivery Framework

**Versión:** 1.0
**Fecha:** 2026-09-11

## 1. Objetivo

Definir una única forma de construir cualquier parte de Pilas, independientemente del lenguaje, repositorio o agente que ejecute el trabajo.

No es Scrum clásico. Combina Product Discovery, Lean, Reuse/Build-vs-Buy, desarrollo incremental, GitHub Flow, TDD/BDD cuando aplique, pruebas adversariales, QA basado en riesgo, revisión independiente, CI/CD y DevSecOps.

## 2. Flujo obligatorio

### G0 — Problema y valor
Antes de hablar de implementación debe existir una necesidad clara, usuario afectado, resultado esperado y métrica/criterio observable.

### G1 — Reuse Gate
Evaluar primero REUSE → ADAPT → BUY/SERVICE → BUILD. BUILD requiere motivo y evidencia.

### G2 — Ready Gate
El trabajo solo empieza si cumple Definition of Ready: alcance, exclusiones, riesgo, criterios de aceptación, estrategia de prueba, dependencias y límites.

### G3 — Build aislado
Trabajar en rama separada. `main` no es zona de desarrollo. Cambios pequeños, trazables y reversibles. Nada de ampliar scope por conveniencia.

### G4 — Verification Gate
Ejecutar las pruebas proporcionales al riesgo: unitarias, integración, adversariales, E2E, UX, seguridad, datos, performance o migraciones según corresponda.

### G5 — Independent Review Gate
Quien construyó no puede ser la única fuente de aprobación. Debe existir revisión independiente humana, de otro agente o de un gate especializado según el dominio.

### G6 — Merge Gate
Solo integrar cuando criterios, tests, CI, revisión, documentación y riesgos residuales estén explícitos. El merge a `main` requiere autorización cuando así esté definido.

### G7 — Release Gate
Deploy/publicación separado de merge. Validar staging o equivalente cuando aplique, plan de rollback, observabilidad y aprobaciones de producción.

### G8 — Post-release Verification
Verificar la versión realmente desplegada, smoke/E2E mínimo, logs/telemetría cuando existan y ausencia de regresiones críticas.

### G9 — Learn
Registrar regresiones, incidentes, deuda, métricas y cambios de criterio. El aprendizaje alimenta tests, protocolos y backlog.

## 3. Tipos de trabajo

- **Feature:** nueva capacidad; requiere Reuse Gate y criterios de aceptación.
- **Bug/regresión:** reproducir primero; añadir prueba que falle cuando sea razonable; fix mínimo; regression test obligatorio.
- **Hotfix:** mismo rigor esencial con alcance reducido; nunca omitir verificación post-release.
- **Spike/investigación:** produce evidencia/decisión, no código productivo por defecto.
- **Arquitectura:** requiere ADR cuando cambia contratos, dependencias estratégicas, persistencia, seguridad o límites de dominio.
- **Infra/seguridad/datos:** riesgo alto por defecto; requiere controles adicionales.

## 4. Niveles de riesgo

### R1 — Bajo
Docs, copy, assets o cambios visuales aislados sin lógica compartida ni datos sensibles.

Mínimo: revisión, smoke focal, evidencia del cambio.

### R2 — Medio
UI funcional, lógica de negocio no crítica, APIs internas, componentes compartidos, integraciones no sensibles.

Mínimo: tests relevantes + regresión + CI + revisión independiente + E2E/UX si afecta journeys.

### R3 — Alto
Exactitud financiera, autenticación, datos personales, persistencia, migraciones, conectores bancarios/correo, pagos, producción, seguridad, IA que influya en decisiones financieras.

Mínimo: R2 + adversariales + seguridad/privacidad + rollback/migración + staging cuando aplique + aprobación humana explícita + verificación post-release.

El riesgo puede elevarse, nunca reducirse sin una justificación registrada.

## 5. Reglas universales

1. Nada significativo empieza sin criterio verificable.
2. Toda nueva capacidad pasa por Reuse Gate.
3. `main` no se modifica como espacio de desarrollo.
4. Commit/PR/CI verde no equivalen por sí solos a “Done”.
5. Todo bug/regresión relevante deja un test o evidencia que evite repetirlo.
6. Cambios arquitectónicos importantes dejan ADR.
7. Datos reales, secretos, costos, permisos elevados, seguridad, deploy y merge sensible requieren los permisos definidos.
8. No se afirma compatibilidad, cobertura o éxito sin evidencia reproducible.
9. No se inicia automáticamente el siguiente hito.
10. La versión desplegada se verifica, no se asume.

## 6. Human Interaction Gate

Todo cambio que afecte interacción visible del usuario debe incluir al menos una validación equivalente a uso real del journey modificado. Automatización que solo muta estado interno no sustituye interacción física cuando foco, picker nativo, navegación, teclado, touch, scroll o comportamiento del sistema operativo sean relevantes.

## 7. IA dentro de Pilas

La IA puede proponer, clasificar o enriquecer, pero cualquier uso que afecte cifras o decisiones financieras debe tener dataset/golden set, métricas explícitas, falsos positivos/negativos conocidos, fallback y trazabilidad. La IA no puede convertir evidencia incierta en dato financiero confirmado sin reglas determinísticas aprobadas.

## 8. Cierre

El objetivo del framework no es maximizar burocracia. Es reducir retrabajo, errores silenciosos y dependencia de la memoria de una persona o agente, manteniendo ciclos pequeños y rápidos.
