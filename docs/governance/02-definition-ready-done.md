# Pilas — Definition of Ready / Definition of Done

**Versión:** 1.2
**Fecha:** 2026-09-14

## Definition of Ready (DoR)

Un trabajo significativo está **READY** solo cuando:
- existe problema/objetivo y valor esperado;
- alcance y exclusiones están escritos;
- fuentes de verdad y decisiones previas relevantes están identificadas;
- Reuse Gate terminó en REUSE / ADAPT / BUY-SERVICE / BUILD;
- nivel de riesgo R1/R2/R3 está definido;
- criterios de aceptación son observables y verificables;
- casos adversariales principales están enumerados cuando aplique;
- estrategia de pruebas está definida;
- para R2/R3 están definidos builder, reviewer/gate y evidencia esperada conforme a `17-multi-ai-operating-policy.md`;
- impacto en datos, privacidad, seguridad y cumplimiento está evaluado;
- dependencias, instalaciones, costos o servicios externos están identificados;
- cambios arquitectónicos requieren ADR o decisión previa;
- plan de migración/rollback está definido si el cambio puede afectar datos o producción;
- rama, issue/hito y condición de parada están claros.

Si falta un punto material, el trabajo está en discovery, no en desarrollo.

## Definition of Done (DoD)

Un trabajo está **DONE** solo cuando:
- todos los criterios de aceptación aplicables tienen evidencia;
- tests específicos pasan;
- suite de regresión aplicable pasa;
- CI requerida está verde;
- no quedan regresiones críticas conocidas sin decisión explícita;
- revisión independiente fue completada;
- para R3 financiero, seguridad, privacidad o integridad de datos, la revisión satisface la independencia cross-family y reproducción adversarial exigidas por `17-multi-ai-operating-policy.md`, salvo excepción documentada y aprobada;
- seguridad/privacidad/migraciones/performance fueron validadas cuando correspondía;
- documentación, ADR, status y contratos afectados están actualizados;
- si cambia arquitectura, flujo financiero, flujo de datos, regla de negocio, roadmap o estado ejecutivo, su representación en el **Pilas Control Center** está actualizada;
- diff revisado y scope sin expansión accidental;
- rama/working tree están en estado conocido y reproducible;
- PR contiene riesgos, límites, omisiones y evidencia;
- merge recibió la aprobación requerida;
- post-merge CI pasa;
- si hubo deploy, se verificó la versión realmente desplegada y existe rollback cuando aplique;
- el registro de gaps/incidentes/backlog se actualizó si apareció aprendizaje nuevo.

## No confundir
- **Código escrito** ≠ Done.
- **Commit** ≠ Done.
- **Push** ≠ Done.
- **PR abierto** ≠ Done.
- **Review favorable** ≠ evidencia suficiente por sí sola.
- **CI verde** ≠ Done.
- **Merge** ≠ release.
- **Release** ≠ éxito hasta verificar producción.

## Criterio de parada

Si durante la implementación aparece una decisión de producto, arquitectura, seguridad, costo o alcance no autorizada, el agente debe detener esa parte, documentar la decisión pendiente y elevarla. No debe “resolverla” silenciosamente.
