# Pilas — Testing & Release Strategy

**Versión:** 1.1
**Fecha:** 2026-09-14

## 1. Principio

La profundidad de pruebas depende del riesgo y del componente. No existe un único porcentaje de cobertura que demuestre calidad.

La pregunta correcta es: **¿qué tipos de error serían peligrosos aquí y qué evidencia demuestra que los controlamos?**

La revisión multi-IA complementa las pruebas; nunca las sustituye.

## 2. Matriz mínima por dominio

| Dominio | Pruebas mínimas dominantes |
|---|---|
| Motor financiero | unitarias, integración, adversariales, invariantes, idempotencia, precisión Decimal |
| Parsers/documentos | corpus sintético/real autorizado, formatos corruptos, duplicados, regresión, provenance |
| Backend/API | contrato, integración, auth, errores, idempotencia, rate/timeout según aplique |
| Base de datos | constraints, migraciones, rollback, concurrencia, integridad |
| Web | componentes, integración, E2E, responsive, accesibilidad, interacción real |
| Mobile | E2E, touch, lifecycle, permisos, iOS/Android reales antes de release relevante |
| IA | golden sets, precision/recall, falsos positivos/negativos, costo, latencia, fallback |
| Integraciones externas | sandbox, expiración/revocación, reintentos, duplicados, timeouts, límites |
| Infra | deploy reproducible, health checks, rollback, observabilidad, secretos |
| Seguridad/privacidad | threat model, least privilege, secret scanning, retención, abuso/entrada hostil |

## 3. Capas de prueba

- **Unit:** pieza aislada.
- **Integration:** varias piezas reales cooperando.
- **Contract:** productor/consumidor mantienen interfaz esperada.
- **Adversarial:** casos diseñados para producir falsos PASS o estados peligrosos.
- **Regression:** protege comportamiento que ya funcionaba.
- **Smoke:** funciones esenciales siguen vivas.
- **E2E:** journey completo de usuario.
- **Human Interaction:** interacción equivalente a persona real cuando el navegador/SO/dispositivo importa.
- **Security/Privacy:** controles específicos por amenaza.
- **Performance/Reliability:** solo cuando latencia, volumen o disponibilidad sean materialmente relevantes.

## 4. Red Team mínimo para lógica financiera crítica

Cuando aplique, diseñar pruebas para:
- nulls, campos ausentes, duplicados y registros incompletos;
- Decimal, redondeo y diferencias de centavos;
- monedas distintas, conversiones y precisión;
- fechas límite, cierre, consumo/proceso y timezone;
- movimientos invertidos, extornos y reversos posteriores;
- pagos parciales/duplicados y cuotas;
- conciliación ambigua, uno-a-muchos y muchos-a-uno;
- pendiente → confirmado;
- eventos fuera de orden;
- importaciones/reprocesamiento repetidos e idempotencia;
- documentos corruptos/duplicados;
- entradas grandes/profundamente anidadas y formatos inesperados;
- serialización/deserialización y reconstrucción de objetos;
- inconsistencias frontend ↔ backend ↔ motor financiero.

El objetivo es intentar romper la implementación, no solo demostrar el happy path.

## 5. Regla para bugs y regresiones

1. Reproducir el problema en la versión afectada cuando sea posible.
2. Capturar una prueba/evidencia que falle.
3. Aplicar el cambio mínimo.
4. Confirmar que la prueba nueva pasa.
5. Ejecutar regresión suficiente para demostrar que el arreglo no rompió otra cosa.
6. Registrar el incidente si revela una brecha de protocolo.

Un hallazgo P1/P2 de un reviewer debe reproducirse antes de modificar código cuando sea razonablemente posible.

## 6. Release

Secuencia estándar:

**branch → tests locales → PR/review → CI → gate → merge → CI post-merge → staging/preview cuando aplique → autorización → deploy → smoke/E2E sobre versión desplegada → observación.**

Merge y deploy son eventos distintos.

## 7. Rollback

Todo cambio R3 que pueda alterar datos, autenticación, integraciones o producción debe tener una estrategia de rollback o forward-fix explícita antes del release. Una migración irreversible necesita aprobación específica.

## 8. Evidencia

La evidencia debe identificar versión/commit, entorno, plataforma, acción, resultado y fecha. Screenshots por sí solos no prueban datos, foco, navegación, seguridad o persistencia.

Cuando dos modelos discrepen sobre un comportamiento reproducible, el test/reproducción ejecutada prevalece sobre la opinión.

## 9. Gate de calidad

PASS significa que los controles acordados para ese alcance no muestran un blocker conocido. No significa ausencia absoluta de bugs.
