# Pilas — Repository Enforcement Blueprint

**Versión:** 1.0
**Fecha:** 2026-09-11

## Objetivo

Convertir la metodología en controles técnicos para depender menos de memoria o disciplina manual.

## 1. Estructura mínima por repositorio

Cada repo nuevo o existente debe tender a incluir:

```text
AGENTS.md
.github/
  ISSUE_TEMPLATE/
  pull_request_template.md
  workflows/
docs/
  governance/
  architecture/adr/
  delivery/status.md
```

No todos los repos necesitan la misma documentación completa, pero todos deben declarar dónde está la fuente canónica.

## 2. AGENTS.md

Debe exigir antes de trabajar:
- leer governance y fuentes de verdad;
- verificar branch/status/diff;
- respetar Reuse Gate;
- no ampliar scope;
- ejecutar pruebas aplicables;
- documentar riesgos y omisiones;
- no hacer merge/deploy sensible sin autorización.

## 3. Issue template

Todo hito significativo debe incluir:
- problema/objetivo;
- alcance y exclusiones;
- Reuse Gate;
- riesgo R1/R2/R3;
- criterios de aceptación;
- matriz adversarial/casos borde;
- estrategia de pruebas;
- seguridad/privacidad/datos;
- dependencias/costos;
- entregables y stop conditions.

## 4. PR template

Todo PR debe declarar:
- qué cambió y qué no cambió;
- issue asociado;
- Reuse decision;
- riesgo;
- tests exactos y resultados;
- regresión/E2E/UX aplicable;
- seguridad/privacidad;
- docs/ADR actualizados;
- riesgos/limitaciones;
- evidencia y commit final.

## 5. Protección de `main`

Objetivo recomendado:
- requerir PR para integrar;
- prohibir force-push y borrado de `main`;
- exigir checks aplicables;
- exigir branch actualizado cuando el riesgo lo amerite;
- impedir merge con conversaciones/revisiones requeridas pendientes;
- limitar bypass a casos excepcionales auditables.

## 6. CI por repo

El set de checks depende del dominio, pero debe poder convertirse en required checks. Ejemplos:
- test/lint/typecheck;
- contratos/migraciones;
- E2E/UX;
- seguridad/secret scanning;
- build reproducible;
- deploy preview o smoke.

## 7. ADR

Crear ADR para decisiones costosas de revertir: lenguaje/core, framework, persistencia, proveedor crítico, auth, arquitectura de IA, formatos/contratos financieros, seguridad o estrategia de despliegue.

Formato mínimo: contexto, opciones, decisión, razones, consecuencias, fecha y condición de revisión.

## 8. Release

Nunca desplegar automáticamente una rama no aprobada a producción. Preferir ambientes/preview separados y publicar desde un commit identificado. Verificar el artefacto desplegado contra ese commit.

## 9. Bootstrap para repos futuros

Backend, web, mobile e infra deben crearse desde una plantilla de repositorio de Pilas que ya incluya governance, issue/PR templates, CI base y protección de ramas antes de empezar features.

## 10. Plan de adopción

1. Publicar governance canónico fuera de ramas activas.
2. Finalizar F3.1-C y V8.2.1 sin contaminar candidatas.
3. Abrir ramas exclusivas `governance/v1` en cada repo existente.
4. Incorporar AGENTS/docs/templates/workflows sin mezclar funcionalidades.
5. Revisar y mergear governance.
6. Activar branch protection y required checks.
7. Crear template reutilizable para futuros repos.
