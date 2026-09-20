# Pilas — prototipo navegable

Repositorio canónico de la experiencia web de Pilas. `main` contiene la UI estable que se publica y que también consume la vista privada local.

## Fuente de verdad

- **UX/UI y navegación:** este repositorio, rama `main`.
- **Motor financiero, contratos y seguridad:** `finanzas-personales-core/main`.
- **Datos privados:** permanecen fuera de Git y se inyectan localmente sobre esta misma UI. Ya no existe una bifurcación funcional de “Pilas Private”: Private es una capa de datos/evidencia, no otro producto ni otro frontend.

## Alcance actual

La baseline incluye Inicio, Análisis, Movimientos, Planificación, Presupuestos, Proyección mensual, Calendario, Cuotas, Membresías, Productos, Cuentas, Tarjetas, Deudas, Préstamos, Oportunidades y Mi cuenta/Fuentes. Los fixtures del repositorio son ficticios y están diseñados para ejercitar las mismas pantallas y reglas visuales que la vista privada.

La especificación consolidada está en `docs/ux-ui-baseline-2026-09-20.md`.

## Versionado

- `main`: última versión estable/publicada.
- Tags `vN`: hitos estables recuperables.
- Ramas de trabajo: cambios antes de promoción a `main`.

## Datos y seguridad

Este repositorio **no contiene** credenciales, estados de cuenta, dumps, extractos, identificadores bancarios ni datos financieros reales. Los fixtures son sintéticos. La vista privada local reemplaza únicamente el bloque de datos/metadata y conserva esta misma UI.

## Identidad

Pilas Brand Package v2.0 es la fuente visual normativa. El messaging vigente se mantiene en `brand/`.

## Governance

El repositorio adopta Governance v1 mediante `AGENTS.md`, `docs/governance/` y los templates de Issue/PR. El prototipo no sustituye la autoridad financiera del core.
