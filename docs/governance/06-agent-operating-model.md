# Pilas — Agent Operating Model v1.2

**Fecha:** 2026-09-14

## Principio

Andrés interactúa principalmente con un único Orchestrator. Los especialistas se organizan por rol; el modelo/herramienta se elige por tarea.

Regla central:

**Una IA coordina → una construye → otra reta → evidencia decide.**

La política detallada de independencia entre modelos, red team y costo vive en `17-multi-ai-operating-policy.md`.

## Roles

1. **Orchestrator:** producto, arquitectura, coordinación, contratos, gates y traducción al fundador. Ejecutor preferente actual: ChatGPT.
2. **Research & Reuse:** investigación Build-vs-Buy/Reuse Gate; no implementa por defecto.
3. **Engineering:** implementa únicamente alcance autorizado. Kimi es preferente para builds/refactors extensos; Codex para ingeniería integrada, reproducción y verificación; la asignación puede cambiar.
4. **Independent Reviewer:** intenta encontrar defectos y refutar la aptitud de la entrega. Claude es preferente para review/red team; no puede ser la misma sesión que construyó.
5. **Verification / Reproduction:** demuestra o refuta hallazgos con código/tests. Codex es preferente cuando existe acceso al repositorio.
6. **Product Design & UX:** journeys, navegación, responsive, accesibilidad e interacción.
7. **Governance & Documentation:** metodología, ADR, DoR/DoD, estado, trazabilidad, coherencia documental, Agent Registry y Pilas Control Center.
8. **CI / automated gates:** evidencia automatizada en entorno limpio.

## Scope explícito de Governance & Documentation

Governance & Documentation debe:
- mantener Governance, ADR, delivery/status, roadmap y documentación afectada;
- mantener el Agent Registry;
- mantener el Pilas Control Center alineado con fuentes canónicas;
- actualizar el Control Center después de cambios materiales de estado, roadmap, arquitectura, reglas, gates, releases o decisiones;
- ejecutar revisión periódica de drift entre Control Center, repositorios, Issues/PR, CI, ADR, UX Gap Register y Agent Registry;
- mantener vigente la Multi-AI Operating Policy;
- revisar periódicamente si la distribución de modelos sigue aportando calidad/velocidad/costo;
- elevar contradicciones o información no verificable en lugar de inventar estado.

## Reglas

- Un agente no amplía su propio alcance.
- El builder no aprueba su propia entrega.
- R2 requiere revisión independiente; R3 financiero/seguridad/privacidad/integridad exige independencia cross-family y reproducción según `17-multi-ai-operating-policy.md`.
- P1/P2 se reproducen antes de corregir cuando sea razonablemente posible.
- Toda decisión sensible o merge/release requiere a Andrés cuando corresponda.
- La memoria duradera vive en repositorio, Biblioteca, Issues, ADR, tests y registros; no en una sesión de IA.
- Preferir sesión fresca por hito/revisión importante.
- Rol ≠ modelo. Las preferencias actuales no son restricciones permanentes.
- El Control Center es una vista derivada: nunca prevalece sobre código, tests, Issues/PR, ADR, registros vivos o evidencia canónica.
- No construir una plataforma multiagente propia sin una decisión separada y evidencia de necesidad.
