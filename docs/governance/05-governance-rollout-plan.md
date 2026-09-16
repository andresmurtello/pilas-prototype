# Pilas — Governance v1 Rollout Plan

**Versión:** 1.0
**Fecha:** 2026-09-11
**Estado:** Fase 1 completada; adopción en repos pendiente de liberar ramas activas.

## Fase 1 — Canonicalizar reglas fuera de ramas activas — COMPLETADA

- Governance Index.
- Delivery Framework.
- Definition of Ready / Done.
- Testing & Release Strategy.
- Repository Enforcement Blueprint.
- Reuse Gate existente se mantiene como módulo obligatorio.
- UX testing protocol permanece como protocolo específico.

## Fase 2 — Adoptar en repos existentes — PENDIENTE

**Condición de inicio:** F3.1-C de core y V8.2.1 de prototipo deben terminar/congelarse para no contaminar evidencia.

### finanzas-personales-core — INTEGRADO
- [x] Governance v1 mergeado a `main` mediante PR #55 (`90a2666507db7f62fc57f4ed11439df358ee7452`).
- [x] `docs/governance/`, `AGENTS.md`, `docs/README.md` y `working-agreement.md` reconciliados.
- [x] Issue/PR templates gobernados incorporados.
- [x] CI final sobre la baseline integrada: `318 passed, 7 skipped` y GitHub Actions verde.
- [x] Gate B/Gate D, Pilas Private y la evidencia BCP ya estaban integrados antes del merge de Governance.

### pilas-prototype — INTEGRADO
- [x] Governance v1 mergeado a `main` mediante PR #9 (`60c84666e00b2114f4c6d74b58fd2a459da15746`).
- [x] `AGENTS.md`, `docs/governance/`, issue/PR templates y `prototype-ci` incorporados.
- [x] `static-smoke` validado en CI.
- [x] No se modificó la UX/UI funcional durante la adopción.

## Fase 3 — Enforcement GitHub — PARCIAL

- [x] `pilas-prototype/main`: requerir PR, `static-smoke` requerido, branch actualizado, force-push y borrado bloqueados, resolución de conversaciones y enforcement para administradores.
- [ ] `finanzas-personales-core/main`: GitHub rechazó branch protection porque el repositorio es privado bajo un plan que no habilita esta función (`Upgrade to GitHub Pro or make this repository public`). Mantener el repo privado; al habilitar GitHub Pro, aplicar PR obligatorio, `test-windows` requerido, branch actualizado, resolución de conversaciones y bloqueo de force-push/borrado.
- [x] Merge y deploy permanecen separados.
- [x] Bypass debe ser excepcional y auditable.

## Fase 4 — Template para repos futuros — PENDIENTE

Crear un bootstrap/template Pilas para backend, web productivo, mobile e infraestructura con:
- AGENTS.md;
- governance;
- issue/PR templates;
- estructura ADR;
- CI base;
- branch protection checklist;
- security/privacy defaults.

## Fase 5 — Auditoría de efectividad

Después de 2–3 ciclos reales bajo Governance v1:
- revisar fricción inútil;
- revisar gates que no detectaron defectos;
- convertir incidentes en tests/protocolo;
- simplificar burocracia que no aporte control;
- publicar v1.1 si corresponde.

## Regla inmediata

Hasta completar la Fase 2, ChatGPT debe aplicar el framework manualmente como gate de orquestación para cualquier trabajo nuevo de Pilas. F3.1-D continúa bloqueado además por el Reuse Gate.
