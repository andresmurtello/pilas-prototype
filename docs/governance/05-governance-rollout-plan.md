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

### finanzas-personales-core ? CANDIDATO
- [x] Rama exclusiva de governance desde `main` actualizado.
- [x] Incorporar `docs/governance/`.
- [x] Actualizar `AGENTS.md` y `docs/README.md` para apuntar al marco transversal.
- [x] Reconciliar `working-agreement.md` sin duplicar reglas.
- [x] Corregir nomenclatura de ramas para que no dependa de un agente concreto.
- [x] Agregar issue/PR templates.
- [ ] Review/CI/merge autorizado. La adopci?n no se considera integrada hasta merge a `main`.

### pilas-prototype — CANDIDATO
- [x] Rama exclusiva `governance/v1-repo-adoption` desde `main@80b3f5f7382230c037feb859e86bc31ff6a3fc8b`.
- [x] Añadir `AGENTS.md` específico del prototipo estático.
- [x] Añadir `docs/governance/` canónico.
- [x] Añadir issue/PR templates.
- [x] Añadir CI/smoke mínimo aplicable al prototipo.
- [ ] Review/CI/merge autorizado. La adopción no se considera integrada hasta merge a `main`.

## Fase 3 — Enforcement GitHub — PENDIENTE

Después de mergear Governance v1:
- requerir PR para `main`;
- bloquear force-push/deletion de `main`;
- configurar required checks existentes/aplicables;
- resolver conversaciones/revisión antes de merge cuando sea técnicamente viable;
- separar merge de deploy;
- mantener bypass excepcional y auditable.

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
