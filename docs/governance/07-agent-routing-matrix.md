# Pilas — Matriz de ruteo de agentes v1.2

**Fecha:** 2026-09-14

| Tipo de trabajo | Rol primario | Ejecutor preferente actual | Revisor / gate |
|---|---|---|---|
| Nueva capacidad / definición | Orchestrator + Research & Reuse | ChatGPT + herramientas de investigación | Reuse Gate + criterios verificables |
| Feature extensa bien especificada | Engineering | Kimi | Claude review + Codex reproducción/CI según riesgo |
| Código core/backend focal | Engineering | Codex o Kimi | Independent Reviewer + CI |
| Bug/regresión/reproducción | Verification / Engineering | Codex | test rojo→verde + regresión |
| Refactor/arquitectura | Engineering | Kimi o Codex | Claude/Independent Reviewer + ADR + CI |
| Lógica financiera R3 | Engineering | Kimi o Codex | reviewer cross-family + reproducción adversarial + regresión + CI |
| Seguridad/privacidad R3 | Engineering/Research | según alcance | reviewer cross-family + controles R3 |
| Review/red team | Independent Reviewer | Claude | Orchestrator valida hallazgos; Codex reproduce P1/P2 cuando aplique |
| UX/UI/journeys | Product Design & UX | Product Design Work / ejecutor UI | Registro vivo + Human Interaction Gate |
| Documentación/roadmap | Governance & Documentation | Orchestrator | coherencia con fuentes canónicas |
| Release/merge | Orchestrator coordina | — | CI + revisión + Andrés cuando corresponda |
| Investigación amplia de codebase | Research/Engineering | Kimi o Codex | evidencia/recomendación, no autorización automática |

## Selección de ejecutor

Las preferencias anteriores optimizan el portfolio actual, pero **rol ≠ modelo**.

Antes de pedir trabajo a una segunda o tercera IA, el Orchestrator debe identificar qué incertidumbre concreta reducirá: review, reproducción, investigación especializada, red team, decisión difícil de revertir o verificación no demostrada.

No pedir múltiples respuestas equivalentes sin motivo.

## Regla de independencia

- Builder y reviewer siempre son sesiones distintas.
- En R3 financiero, seguridad, privacidad o integridad de datos, usar familias de modelo distintas mientras estén disponibles.
- El reviewer recibe contrato/diff/tests, no la defensa previa del builder.
- Los hallazgos reproducibles se deciden por evidencia, no por autoridad del modelo.
## Capacity-aware routing

La columna de ejecutor preferente expresa la primera opción **solo cuando existe capacidad suficiente**. Antes de una tarea material, consultar el estado GREEN/AMBER/RED/EXHAUSTED/UNKNOWN definido en `17-multi-ai-operating-policy.md`.

Orden de decisión:

1. riesgo y controles obligatorios;
2. capacidad técnica para la tarea;
3. independencia requerida;
4. capacidad/cuota disponible;
5. ejecutor preferente;
6. costo/latencia.

Si el preferente está RED/EXHAUSTED, seleccionar el mejor sustituto elegible sin pedir autorización a Andrés para un cambio puramente operativo. Si el cambio compromete un gate R3, costo material o calidad esperada, escalar.
