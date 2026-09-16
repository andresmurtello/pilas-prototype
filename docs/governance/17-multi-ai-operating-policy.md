# Pilas — Multi-AI Operating Policy v1.1

**Estado:** Canónico
**Fecha:** 2026-09-14
**Owner:** Orchestrator + Governance & Documentation

## 1. Propósito

Pilas utiliza varias familias de IA para maximizar calidad, independencia de revisión, velocidad de desarrollo y eficiencia de costo, sin convertir la diversidad de modelos en burocracia ni duplicación de trabajo.

La regla operativa central es:

> **Una IA coordina → una construye → otra reta → evidencia decide.**

Y su regla de eficiencia es:

> **Usar una IA cuando una IA sea suficiente. Usar otra cuando reduzca una incertidumbre concreta.**

Esta política complementa el Governance Index, Delivery Framework, Definition of Ready / Done, Testing & Release Strategy, Agent Operating Model, Agent Routing Matrix y Agent Handoff Contract. Ante contradicción, prevalece la regla más estricta para un riesgo equivalente.

## 2. Principios

1. El Orchestrator mantiene la visión global, el contrato, los gates y la trazabilidad.
2. El builder no aprueba por sí solo una entrega relevante.
3. La revisión independiente debe reducir sesgo de confirmación, no repetir la opinión del builder.
4. Cuando una afirmación pueda comprobarse con código, repositorio, test, reproducción o CI, la evidencia prevalece sobre la autoridad del modelo.
5. Los roles son estables; las herramientas/modelos son preferentes y pueden cambiar según desempeño.
6. La diversidad de modelos no sustituye una especificación clara.
7. El proceso debe reducir la intervención operativa de Andrés, no aumentarla.

## 3. Roles y modelos preferentes

### ChatGPT — Orchestrator / Product & Technical Lead

Responsabilidades preferentes:

- custodiar el contexto global de Pilas;
- traducir necesidades de negocio a requerimientos verificables;
- definir alcance, exclusiones, criterios de aceptación e invariantes;
- gobernar roadmap, dependencias, arquitectura y gates;
- seleccionar el ejecutor y nivel de revisión proporcional al riesgo;
- preparar handoffs mínimos y completos;
- interpretar resultados de Codex, Kimi, Claude y otros agentes;
- resolver discrepancias mediante evidencia;
- mantener trazabilidad problema → solución → prueba → cierre;
- escalar a Andrés solo cuando exista una decisión funcional, de alcance, riesgo, costo o autorización sensible.

ChatGPT no debe programar todo directamente si otro ejecutor puede hacerlo mejor o con mayor eficiencia.

### Codex — Ingeniería integrada, reproducción y verificación

Uso preferente:

- inspección real del repositorio;
- implementación concreta cuando convenga;
- reproducción de defectos;
- escritura y ejecución de tests;
- revisión de código;
- regresiones;
- investigación del comportamiento efectivo;
- ramas/worktrees y tareas técnicas paralelas;
- verificación objetiva de hallazgos reportados por otros modelos.

Codex tiene un rol especialmente valioso como **reproductor y generador de evidencia técnica**.

### Kimi — Builder / Engineering Agent

Uso preferente:

- features completas con contrato claro;
- refactors;
- tareas extensas de código;
- implementación de especificaciones;
- generación de tests;
- análisis amplio de codebase;
- investigación técnica extensa;
- trabajo paralelizable.

Una entrega material de Kimi no se considera cerrada por declaración del propio builder. Debe existir evidencia verificable y, según riesgo, revisión independiente.

### Claude — Independent Reviewer / Red Team

Uso preferente:

- revisión independiente de PRs/cambios relevantes;
- búsqueda deliberada de errores y edge cases;
- revisión de invariantes, arquitectura y seguridad;
- consistencia de dominio;
- riesgo de regresión;
- revisión adversarial de lógica financiera;
- clasificación P0/P1/P2/P3.

Cuando sea posible, Claude recibe código/diff, contrato, criterios de aceptación y tests relevantes, pero **no la defensa o razonamiento completo del builder antes de formar su propia opinión**.

### Product Design & UX

Mantiene independencia funcional sobre journeys, responsive, interacción real, accesibilidad y Registro vivo UX/UI. Un screenshot no reemplaza un retest funcional.

## 4. Independencia de revisión por riesgo

### R1 — Bajo

Ejemplos: copy, documentación, asset o estilo aislado sin lógica ni datos sensibles.

Mínimo:

**Builder → test/smoke focal → evidencia.**

La revisión independiente puede omitirse si no reduce una incertidumbre material.

### R2 — Medio

Ejemplos: UI funcional, endpoint interno, filtro, navegación, nueva vista, lógica no crítica.

Mínimo:

**Builder → tests → regresión/CI aplicable → revisión independiente.**

El reviewer debe ser una sesión distinta y, cuando aporte independencia real, una familia de modelo distinta.

### R3 — Alto / crítico

Incluye, entre otros:

- conciliación financiera;
- saldos, deuda, pagos, cuotas e intereses;
- monedas y tipo de cambio;
- movimientos y estados de cuenta;
- clasificación financiera;
- identidad de productos;
- reglas centrales e invariantes;
- autenticación;
- privacidad y seguridad;
- datos personales;
- persistencia, integridad y migraciones;
- conectores bancarios/correo;
- IA que influya en decisiones financieras.

Mínimo obligatorio:

**Especificación → implementación → tests → revisión independiente cross-family → reproducción adversarial → corrección → suite de regresión → CI → aceptación final.**

Para R3 financiero, seguridad, privacidad o integridad de datos, el reviewer debe pertenecer a una familia distinta del builder mientras estén disponibles varias familias de modelo. Una excepción requiere justificación registrada y aprobación del Orchestrator; si reduce un control sensible, escalar a Andrés.

Ejemplo preferente, no rígido:

**Kimi implementa → Claude revisa → Codex reproduce → Builder corrige → Codex ejecuta regresión → ChatGPT determina cierre.**

Codex puede ser builder y Kimi puede validar cuando el caso lo aconseje. Lo obligatorio es la independencia y la evidencia, no una marca concreta.

## 5. Evidence over opinion

Cuando dos modelos discrepen:

1. definir la hipótesis exacta en conflicto;
2. revisar contrato, especificación o ADR;
3. crear una reproducción mínima;
4. escribir un test cuando sea razonable;
5. ejecutar;
6. decidir según evidencia.

Formato esperado:

> “El reviewer plantea X. La reproducción logró/no logró demostrarlo mediante Y. El contrato exige Z. Por lo tanto…”

No aceptar ni descartar hallazgos solo por reputación del modelo.

## 6. Desarrollo guiado por contrato

Antes de implementar trabajo relevante deben quedar claros, según corresponda:

- objetivo y valor esperado;
- alcance y fuera de alcance;
- reglas de negocio e invariantes;
- entradas válidas e inválidas;
- estados y errores esperados;
- criterios de aceptación observables;
- pruebas necesarias;
- regresiones que no deben producirse;
- condición de parada.

Las decisiones importantes del motor financiero deben quedar codificadas en tests además de documentadas.

Si aparece una ambigüedad material, no consolidar un comportamiento accidental del código como regla de producto.

## 7. Red Team financiero

En funcionalidades financieras críticas deben considerarse deliberadamente, cuando apliquen:

- nulls y campos ausentes;
- duplicados y reprocesamiento de la misma fuente;
- registros incompletos o contradictorios;
- precisión Decimal, redondeos e Inexact/Rounded;
- diferencias de centavos;
- múltiples monedas y conversiones;
- fechas límite, fecha consumo/proceso/cierre y timezone;
- movimientos invertidos y extornos;
- pagos parciales y duplicados;
- cuotas e intereses;
- documentos corruptos y duplicados;
- entradas extremadamente grandes o profundamente anidadas;
- formatos inesperados;
- serialización/deserialización y reconstrucción de objetos;
- doble contabilización;
- conciliaciones ambiguas;
- uno-a-muchos y muchos-a-uno;
- pendiente → confirmado;
- reversos posteriores;
- cambio de descripción entre notificación y estado de cuenta;
- eventos fuera de orden;
- importaciones repetidas;
- idempotencia;
- pérdida parcial de información;
- reconstrucción de estados históricos;
- inconsistencias frontend ↔ backend ↔ motor financiero.

El objetivo no es demostrar únicamente el happy path, sino intentar romper deliberadamente la implementación.

## 8. Product y UX

Las validaciones funcionales deben considerar cuando aplique:

- desktop y móvil;
- navegación y back;
- scroll y restauración de estado;
- persistencia de filtros;
- estados vacíos/error;
- textos y datos largos;
- montos grandes;
- responsive;
- jerarquía visual;
- accesibilidad razonable;
- journeys completos.

Para auditorías UX/UI se conserva:

**hallazgo original → evidencia original → implementación candidata → retest → PASS/FAIL.**

La baseline histórica no se altera retrospectivamente.

## 9. Uso eficiente de modelos

Antes de involucrar otra IA, el Orchestrator debe identificar qué incertidumbre adicional busca reducir.

Usos válidos:

- revisión independiente;
- reproducción;
- investigación especializada;
- comparación arquitectónica;
- red teaming;
- segunda opinión ante decisión difícil de revertir;
- verificación de algo aún no demostrado.

Usos ineficientes:

- pedir a tres modelos la misma explicación;
- generar arquitecturas completas redundantes;
- repetir reviews equivalentes;
- repetir investigación ya confirmada;
- usar el modelo más costoso en una tarea trivial.

Una tarea clara y de bajo riesgo debe favorecer ejecución directa.

## 10. Capacity-aware routing y monitoreo de uso

La selección de modelo no depende solo de calidad o rol preferente. El Orchestrator debe considerar también la **capacidad disponible** de cada plataforma: créditos, cuota, límites por ventana, rate limits, tiempo de reset, disponibilidad del servicio y capacidad suficiente para completar la tarea prevista.

Antes de asignar una tarea material, y nuevamente antes de iniciar una segunda fase costosa del mismo ciclo cuando el consumo pueda haber cambiado de forma relevante, el Orchestrator debe comprobar el estado de capacidad **si ese dato es observable**.

Estados normalizados:

- **GREEN:** capacidad suficiente; routing normal.
- **AMBER:** capacidad reducida; reservar la plataforma para tareas donde aporte ventaja material y desviar trabajo intercambiable.
- **RED:** capacidad muy baja o riesgo alto de agotar cuota durante la tarea; no iniciar trabajo no esencial y preferir un ejecutor alternativo compatible.
- **EXHAUSTED/BLOCKED:** cuota agotada, límite alcanzado o plataforma temporalmente no disponible; hacer failover.
- **UNKNOWN:** el saldo/uso no es observable de forma confiable; no inventar ni inferir capacidad.

Cuando una plataforma exponga porcentaje restante, los umbrales operativos iniciales pueden ser orientativamente GREEN >30%, AMBER 15–30%, RED <15%. Si la plataforma usa ventanas, mensajes restantes, límites dinámicos o resets temporales, el Orchestrator debe traducirlos a estos estados según la capacidad necesaria para terminar la tarea, no según un porcentaje artificial.

### Fuentes válidas de telemetría

El estado de capacidad solo puede derivarse de evidencia observable, por ejemplo:

- API oficial o endpoint de usage/billing/quota;
- conector autorizado;
- CLI que exponga cuota/uso;
- interfaz autenticada accesible al Orchestrator/Work;
- mensaje explícito de rate limit/quota/reset del propio agente;
- dato proporcionado por Andrés.

Si ninguna fuente está disponible, registrar **UNKNOWN**. El Orchestrator no debe afirmar que está monitoreando un saldo que técnicamente no puede observar.

### Failover por capacidad

Si el ejecutor preferente está AMBER/RED/EXHAUSTED, el Orchestrator puede reasignar la tarea a otro modelo aunque no sea su rol preferente, siempre que:

1. tenga capacidad técnica suficiente;
2. reciba el mismo contrato, baseline y criterios;
3. se mantengan los gates de riesgo;
4. la sustitución no destruya la independencia requerida;
5. se registre el motivo cuando el cambio sea material.

Ejemplos:

- Kimi bajo de créditos → Codex puede asumir build si el alcance es adecuado.
- Codex limitado → Kimi puede implementar o reproducir cuando tenga acceso/evidencia suficiente.
- Claude sin capacidad → otro reviewer cross-family puede asumir review, siempre que sea independiente del builder.
- ChatGPT/Orchestrator con capacidad restringida → priorizar coordinación, decisiones y handoffs; desplazar ejecución pesada a agentes disponibles.

Para R3, el ahorro de créditos **nunca justifica eliminar el gate de independencia cross-family**. Si no existe capacidad suficiente para mantener el control exigido, el estado es BLOQUEADO o DECISIÓN REQUERIDA, no un PASS degradado silenciosamente.

### Monitoreo continuo

Governance debe mantener el estado de capacidad tan actualizado como permitan las fuentes observables. Cuando exista telemetría automática, debe revisarse de manera periódica y antes de routing material. Cuando solo exista telemetría durante una sesión, debe actualizarse ante cada señal de cuota, rate limit, consumo relevante o reset.

El objetivo es anticipar agotamientos y hacer **capacity-aware failover** antes de interrumpir un ciclo de trabajo.

## 11. Cost governance

La diversidad de modelos se mantiene mientras genere productividad marginal real.

No recomendar upgrades solo porque existan. Antes de aumentar gasto, identificar un cuello de botella demostrado:

- agotamiento frecuente de límites;
- interrupción del desarrollo;
- sesiones insuficientes;
- falta de capacidad paralela;
- espera recurrente por cuota;
- necesidad material no cubierta.

Evaluar:

1. qué plataforma genera el cuello;
2. frecuencia;
3. trabajo bloqueado;
4. si créditos adicionales lo resuelven;
5. si conviene aumentar solo esa plataforma;
6. si alguna suscripción dejó de aportar valor.

La cartera de herramientas, planes y costo vigente se registra en `12-agent-registry.md`, no en esta política, para evitar convertir datos temporales en reglas permanentes.

## 12. Evaluación periódica de herramientas

Después de fases relevantes o cambios materiales de modelos/precio, Governance puede evaluar:

- calidad de código;
- calidad de review;
- defectos detectados;
- falsos positivos;
- contexto;
- velocidad;
- autonomía;
- integración GitHub;
- capacidad de ejecutar tests;
- límites;
- costo;
- dependencia manual de Andrés.

Una herramienta puede cambiar de rol si la evidencia lo justifica.

Cambios significativos al modelo operativo deben explicar:

- problema actual;
- cambio propuesto;
- beneficio esperado;
- costo/riesgo introducido.

## 13. Orquestación y handoffs

El Orchestrator determina primero:

- resultado requerido;
- estado actual y baseline;
- evidencia existente;
- agente/ejecutor adecuado;
- nivel de revisión;
- artefactos de salida.

Los handoffs siguen `08-agent-handoff-contract.md`.

Para revisión independiente se transmite contexto suficiente para comprender contrato y diff, evitando contaminar al reviewer con la conclusión del builder.

Si una herramienta no es accesible directamente, entregar a Andrés un prompt corto y listo para copiar/pegar. No trasladarle coordinación manual innecesaria.

## 14. Severidad y tratamiento de hallazgos

Se mantiene la escala:

- **P0:** bloqueante crítico; seguridad, integridad financiera o pérdida de datos severa.
- **P1:** defecto grave que bloquea merge/release.
- **P2:** defecto real relevante; corregir o justificar explícitamente.
- **P3:** mejora/deuda técnica menor; puede diferirse.

Antes de corregir un hallazgo, determinar:

- reproducible o no;
- válido según contrato;
- relevancia;
- nuevo o heredado;
- dentro o fuera de alcance.

P1/P2 deben reproducirse antes de modificar código cuando sea razonablemente posible. Falsos positivos se descartan con evidencia.

## 15. Definition of Done y trazabilidad

La Definition of Done canónica vive en `02-definition-ready-done.md`.

Al cerrar un ciclo relevante debe poder reconstruirse:

- objetivo;
- implementación;
- builder;
- tests;
- reviewer independiente;
- hallazgos;
- reproducciones;
- correcciones/descartes;
- CI;
- commit/PR;
- riesgos residuales;
- siguiente paso.

No es necesario mostrar todo a Andrés en cada respuesta; debe quedar disponible en fuentes persistentes.

## 16. Intervención de Andrés y mínima carga manual

Andrés es Product Owner/fundador. Escalar principalmente ante:

- decisión funcional;
- cambio material de alcance;
- trade-off de producto;
- impacto UX importante;
- arquitectura difícil de revertir;
- gasto adicional relevante;
- seguridad/privacidad;
- alternativas válidas con implicancias de negocio distintas;
- acción externa/irreversible que requiera autorización.

No escalar decisiones puramente técnicas cuando exista una opción claramente superior, reversible y verificable.

Flujo objetivo:

**Andrés define intención → ChatGPT orquesta → agentes ejecutan/revisan → evidencia valida → Andrés recibe decisión/resultado.**

Evitar:

**Andrés copia prompt → espera → copia respuesta → cambia de IA → compara manualmente → reinicia.**

## 16. Continuidad

Una conversación nueva no reinicia la metodología.

El Orchestrator debe reconstruir estado desde Governance, Agent Registry, repositorios, Issues/PR, CI, ADR, registros vivos y documentación canónica.

El estado técnico verificable prevalece sobre recuerdos incompletos.

## 17. Plataforma multiagente propia

Esta política **no autoriza construir una plataforma/orquestador multiagente propio**.

La coordinación debe aprovechar herramientas existentes. La construcción de infraestructura propia solo se reconsiderará cuando exista evidencia de fricción manual suficiente para justificar costo, complejidad y mantenimiento.

## 18. Regla final

El objetivo no es usar la mayor cantidad de modelos, sino construir Pilas con:

- alta calidad;
- velocidad sostenible;
- lógica financiera confiable;
- buena UX;
- arquitectura mantenible;
- revisiones independientes;
- pocas regresiones;
- trazabilidad;
- baja carga manual;
- gasto de IA eficiente.

> **El modelo que construye no gana por autoridad. El modelo que revisa tampoco. La evidencia decide.**
