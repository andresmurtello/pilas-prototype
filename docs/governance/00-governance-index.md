# Pilas — Governance Index

**Versión:** 1.1
**Estado:** Canónico para adopción transversal
**Fecha:** 2026-09-14

## Propósito

Este índice define cómo se gobierna el desarrollo de Pilas en cualquier componente: motor financiero, ingestión documental, backend/API, base de datos, web, móvil, IA, integraciones, infraestructura, seguridad y UX/UI.

La metodología no depende de una herramienta, agente o repositorio concreto. ChatGPT, Codex, Kimi, Claude, Product Design, CI o futuros desarrolladores humanos trabajan bajo las mismas reglas.

## Principio rector

**Problema antes que feature. Reúso antes que construcción. Evidencia antes que afirmación. Revisión independiente antes que integración.**

Ciclo resumido:

**Descubrir → Reuse Gate → definir → construir aislado → probar → intentar romper → revisar independientemente → reproducir hallazgos → aprobar → integrar → desplegar → verificar → aprender.**

Para trabajo multi-IA:

**Una IA coordina → una construye → otra reta → evidencia decide.**

## Documentos canónicos

1. **Pilas Delivery Framework** — ciclo transversal y gates obligatorios.
2. **Definition of Ready / Definition of Done** — cuándo un trabajo puede empezar y cuándo realmente termina.
3. **Testing & Release Strategy** — profundidad mínima de pruebas según riesgo y tipo de componente.
4. **Repository Enforcement Blueprint** — cómo convertir reglas en controles técnicos de GitHub y CI.
5. **Reuse Gate / Build-vs-Buy** — orden REUSE → ADAPT → BUY/SERVICE → BUILD.
6. **Agent Operating Model** — roles persistentes de Orchestrator, Engineering, Independent Reviewer, Product Design y Governance.
7. **Agent Routing Matrix + Handoff Contract + Orchestration Runbook** — asignación, transferencia y ejecución controlada.
8. **Agent Registry** — ejecutores y capacidades vigentes; es estado dinámico, no una regla permanente.
9. **Multi-AI Operating Policy** — independencia entre familias, preferencias de modelos, evidencia, red team financiero y cost governance.
10. Protocolos específicos por dominio, por ejemplo UX/UI, que complementan pero no contradicen esta capa.

## Jerarquía

- Las decisiones de producto aprobadas gobiernan el **qué** y el **por qué**.
- Este marco gobierna el **cómo se entrega y valida**.
- Los ADR gobiernan decisiones arquitectónicas significativas.
- El código y los tests describen el comportamiento realmente implementado.
- Los informes de investigación y opiniones de modelos son evidencia auxiliar, no autorizaciones automáticas.
- El Agent Registry describe disponibilidad/asignación actual; no reemplaza políticas.
- Un protocolo específico puede ser más estricto que este marco, nunca más laxo para un riesgo equivalente.

## Roles

- **Andrés:** Product Owner / fundador y decisor final para alcance, riesgo y aprobaciones sensibles.
- **ChatGPT / Orchestrator:** producto, arquitectura, coordinación, QA, gates, handoffs y release coordination.
- **Engineering:** implementa alcance autorizado; el ejecutor se selecciona según tarea.
- **Independent Reviewer:** intenta refutar la aptitud de la entrega y no puede ser la misma sesión que construyó.
- **Product Design / auditor independiente:** gate UX/UI cuando corresponda.
- **Governance & Documentation:** mantiene metodología, trazabilidad, Registry, Control Center y coherencia documental.
- **CI/CD:** verificación automatizada en ambiente limpio.

## Regla de adopción

Este marco debe incorporarse progresivamente a todos los repositorios de Pilas. Ningún repositorio nuevo debe considerarse listo para desarrollo si no incluye las reglas mínimas de governance, plantillas de trabajo y CI aplicables.

La adopción al repositorio debe hacerse mediante cambios de governance identificables y revisables; no mezclar silenciosamente cambios metodológicos con una feature activa.
