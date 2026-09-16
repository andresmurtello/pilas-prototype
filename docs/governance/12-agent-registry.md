# Pilas — Agent Registry

**Versión:** 1.4
**Fecha:** 2026-09-14

| Rol | Ejecutor actual/preferente | Estado |
|---|---|---|
| Orchestrator | ChatGPT / GPT-5.6 Sol | Activo; Product & Technical Lead |
| Research & Reuse | Orchestrator + Work/Web según caso | Disponible bajo Reuse Gate |
| Engineering — build extensivo | Kimi (preferente) / Codex según alcance | Disponible; asignación solo por handoff |
| Engineering — repo integrado | Codex (preferente) / Kimi según alcance | Operativo para implementación, inspección y tests |
| Verification / Reproduction | Codex | Preferente para reproducir hallazgos y generar evidencia |
| Independent Reviewer / Red Team | Claude Pro, sesión fresh/read-only | Preferente; especialmente R2/R3 |
| Product Design & UX | Product Design Work | Baseline y Registro vivo gobiernan validación UX |
| Governance & Documentation | Orchestrator + Biblioteca Governance | Activo; owner de metodología, Registry y Control Center |
| CI / automated gates | GitHub Actions | Gates según Issue/PR vigente |

## Portfolio de IA vigente

- ChatGPT Plus, con acceso a Codex.
- Claude Pro.
- Kimi en plan de pago.
- Presupuesto aproximado actual: **US$60/mes**.

Este portfolio es estado operativo, no compromiso permanente. Se mantiene mientras la diversidad aporte productividad marginal suficiente.

## Capacity / quota status

El Registry debe conservar, cuando exista evidencia observable, el estado más reciente de capacidad de cada plataforma. Formato recomendado:

| Plataforma | Capacidad | Última evidencia | Reset / observación |
|---|---|---|---|
| ChatGPT / Codex | UNKNOWN | Sin telemetría de cuota conectada en esta sesión | Actualizar cuando exista fuente observable |
| Claude Pro | UNKNOWN | Sin telemetría de cuota conectada en esta sesión | Actualizar cuando exista fuente observable |
| Kimi | UNKNOWN | Sin telemetría de cuota conectada en esta sesión | Actualizar cuando exista fuente observable |

Estados permitidos: `GREEN`, `AMBER`, `RED`, `EXHAUSTED`, `UNKNOWN`.

El dato de capacidad es dinámico y puede quedar obsoleto rápidamente; **no es fuente histórica de verdad**. Debe refrescarse antes de routing material siempre que exista una fuente accesible.

## Reglas de asignación

- Rol ≠ herramienta.
- Builder y reviewer deben ser sesiones separadas.
- Para R3 financiero, seguridad, privacidad o integridad de datos, reviewer cross-family es obligatorio mientras exista disponibilidad de varias familias.
- Claude es preferente para review/red team independiente.
- Codex es preferente para reproducción, tests e investigación real del repositorio.
- Kimi es preferente para builds/refactors extensos bien especificados.
- ChatGPT mantiene contrato, gates, prioridades y resolución por evidencia.
- Una herramienta puede cambiar de rol si desempeño, capacidades, precio, integración o cuota disponible lo justifican.
- Si el ejecutor preferente está RED/EXHAUSTED, aplicar failover a otro modelo elegible aunque no sea su rol principal.
- No usar una segunda/tercera IA sin una incertidumbre concreta que reducir.
- Governance mantiene este Registry sincronizado con evidencia canónica.

## Cost governance

Antes de recomendar un upgrade:
- demostrar agotamiento/límite recurrente;
- identificar trabajo bloqueado;
- medir frecuencia;
- evaluar créditos o aumento solo en la plataforma causante;
- revisar si alguna suscripción dejó de aportar valor.

No concentrar gasto por preferencia de marca. Revisar calidad, defectos detectados, falsos positivos, autonomía, límites y costo después de fases relevantes o cambios materiales del mercado.

## Estado de integración

- Identidad vigente: **Pilas**; `config/product-identity.json` en GitHub es la fuente canónica.
- F3.1-C v2: integrada en `main` mediante PR #28; el PR histórico #17 queda solo como evidencia superseded.
- Siguiente trabajo autorizado: VS1 — `subo → procesa → reviso → confirmo → veo movimientos`; no implica iniciar F3.1-D.
- Kimi y Codex están disponibles; ninguna tarea se hereda automáticamente por continuidad de sesión.
- Product Design Work usa handoff por archivos persistentes en Library cuando no existe invocación directa.
- Control Center + Blueprint: activos como vista derivada privada.
- Plataforma multiagente propia: **NO construir todavía**; reevaluar solo con evidencia de fricción manual suficiente.
