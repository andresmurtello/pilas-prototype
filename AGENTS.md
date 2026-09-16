# Reglas de trabajo de Pilas — Prototipo

## Contexto y alcance

Antes de modificar este repositorio, leer `docs/governance/00-governance-index.md`, `docs/governance/17-multi-ai-operating-policy.md` y `README.md`, además del registro/protocolo UX vigente cuando el cambio afecte experiencia o navegación.

Este repositorio contiene únicamente la experiencia visual pública de Pilas. No contiene ni debe adquirir autoridad financiera, lógica de conciliación productiva, credenciales, documentos reales ni datos personales.

## Datos y privacidad

- Todo fixture público debe ser ficticio, explícitamente sintético y no derivable de un usuario real.
- Nunca copiar datos de Pilas Private, PDFs reales, cuentas, tarjetas, DNI, emails, montos personales, tokens o secretos.
- Pilas Private consume una baseline publicada de este repo; este repo no consume ni versiona el modelo privado.
- Si un hallazgo de Private es genérico, elevarlo como candidato upstream con evidencia sanitizada; no crear forks visuales privados permanentes.

## Desarrollo y cambios

- Trabajar en ramas de propósito claro (`feature/`, `fix/`, `ux/`, `governance/`, `docs/` o equivalente), nunca por nombre del agente.
- No hacer merge a `main` sin revisión y autorización de Andrés.
- Antes de editar, verificar branch, SHA, working tree y dependencia de PRs apilados.
- No declarar backend, Gmail, OAuth, sincronización bancaria ni IA productiva si la UI solo los simula.
- No incorporar capacidades nuevas fuera del catálogo/alcance aprobado mediante un cambio visual aparentemente menor.
- Mantener procedencia, autoridad y estados provisionales/confirmados coherentes con los contratos del core; la UI no redefine semántica financiera.
## Validación

- Ejecutar `python scripts/prototype_smoke.py` antes de entregar cambios.
- Para cambios UX funcionales, ejecutar además el protocolo de retest aplicable en desktop y móvil (390×844 y 412×915 cuando corresponda).
- Verificar ausencia de overflow horizontal, errores de consola, navegación rota y regresiones de estado/filtros.
- No marcar un hallazgo UX como resuelto solo por inspección de código; exigir evidencia funcional.
- Mantener separados demo visual, evidencia real, interpretación financiera y estado productivo.

## Riesgo y coordinación

- Aplicar la clasificación R1/R2/R3 de Governance. Cambios de seguridad, privacidad, autoridad financiera o representación que pueda inducir decisiones financieras requieren revisión independiente reforzada.
- Product Design gobierna experiencia y visualización; el core privado gobierna autoridad financiera; Governance mantiene reglas y memoria durable.
- GitHub es la memoria durable del trabajo. Conversaciones, screenshots y ramas candidatas no reemplazan un estado integrado en `main`.
- Informar siempre SHA, pruebas, omisiones y riesgos residuales al cerrar un ciclo.

## Gate

**NO MERGE** mientras exista un gate obligatorio pendiente o falte la aprobación de Andrés cuando corresponda.
