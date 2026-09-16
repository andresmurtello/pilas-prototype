# Pilas — Product Identity & Naming Policy v1.1

## Estado actual
El nombre visible actual y aprobado es **Pilas**. No existe un rename pendiente.

## Owner
**Governance & Documentation Agent** es responsable de mantener y propagar la identidad vigente en documentación activa, Control Center, roadmap, diagramas, plantillas y artefactos actuales.

## Fuente canónica
La fuente canónica del nombre visible es `config/product-identity.json` en el repositorio privado `finanzas-personales-core`. Allí constan `product_name=Pilas`, estado aprobado, Brand Package v2.0, tagline y descriptor vigentes. Ninguna otra plataforma debe crear un registro paralelo de identidad.

## Fuente normativa visual
`docs/brand/source/Pilas_Brand_Package_v2.0.zip` es la fuente normativa visual vigente, con su SHA-256 registrado en la configuración. El messaging aprobado posterior se mantiene como override hasta su homologación formal, sin alterar byte-a-byte el paquete v2.0.

## Regla de parametrización
- Todo artefacto nuevo o generado debe usar **Pilas** como identidad actual o derivar el nombre visible de la configuración canónica.
- Control Center debe leer el nombre visible desde la configuración central.
- Assets y tokens de marca deben referenciarse mediante la capa canónica y no duplicarse ad hoc.
- Governance incluye revisión de drift de nombre/marca en sus sincronizaciones periódicas.
- `pilas-prototype` es la referencia vigente para el prototipo; nombres anteriores solo pueden aparecer como evidencia histórica.

## Evidencia histórica que no se reescribe
No se renombra retroactivamente el histórico Git, Issues/PRs cerrados, SHAs, ramas históricas, auditorías/baselines inmutables ni citas necesarias para trazabilidad. En esos casos el nombre anterior describe el artefacto histórico, no la identidad vigente.

## Identificadores técnicos
La migración técnica a Pilas fue ejecutada mediante el workstream específico de marca/namespace y no autoriza futuros rename masivos. Cualquier nuevo cambio de repositorio, package, URL/domain, API identifier o integración requiere análisis de impacto y autorización correspondiente.

## Procedimiento ante una futura decisión de identidad
1. Andrés aprueba explícitamente el cambio.
2. Governance actualiza la configuración canónica.
3. Se abre Issue/rama de migración con inventario determinístico.
4. Se actualizan artefactos actuales y se ejecuta scan de referencias obsoletas.
5. Se decide por separado cada identificador técnico.
6. Se ejecutan pruebas de enlaces/build/regresión.
7. Se documentan redirects/aliases cuando aplique.
8. Se verifica la versión desplegada en todas las superficies vigentes.

## Principio
**Una identidad configurable, una fuente de verdad, muchas vistas.**
