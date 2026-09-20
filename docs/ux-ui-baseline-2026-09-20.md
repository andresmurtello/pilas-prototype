# Baseline UX/UI consolidada — 20/09/2026

## Objetivo

Esta baseline consolida en el prototipo público todos los cambios UX/UI que habían sido validados primero sobre la vista privada local. A partir de esta promoción hay una sola implementación de interfaz: el prototipo público es la fuente de verdad y la vista privada únicamente sustituye fixtures por un modelo financiero local autorizado.

Ningún dato real forma parte de este repositorio.

## Arquitectura de una sola UI

La separación correcta es:

1. **Pilas Prototype**: navegación, componentes, gráficos, copy, responsive, privacidad y estados de interacción.
2. **Pilas Core**: contratos financieros, parsing, reconciliación, seguridad y reglas de negocio.
3. **Capa privada local**: modelo financiero y provenance. Se inyecta sobre la misma UI canónica y nunca se publica.

“Pilas Private” deja de ser un fork de frontend. Puede seguir existiendo como entorno local de validación porque contiene datos reales, pero no debe mantener CSS, gráficos, pantallas o lógica de navegación divergente.

## Inicio

La página de Inicio queda organizada como posición financiera y navegación ejecutiva:

- KPI de **Consumo** del periodo.
- KPI de **Pagos** pendientes.
- KPI de **Deudas**, separado de los saldos de cuentas.
- KPI de **Saldos** al último corte disponible.
- **Proyección mensual** compacta de seis meses, sin selector ni scroll.
- Próximos vencimientos.
- Top de categorías de consumo.
- Acciones/recomendaciones sustentadas en evidencia disponible.

La proyección de Inicio es la referencia visual para el sistema de gráficos: barras, separación temporal, tipografía, línea de total y redondeo superior.

## Análisis de consumo

La vista de Análisis incorpora:

- filtros por periodo, producto y titular;
- KPI compactos de consumo y comercio principal;
- pestañas **Resumen / Movimientos**;
- gráfico **Evolución del consumo**;
- segmentación **Recurrente / Variable**;
- pestañas **Recurrentes / Variables** para el detalle por categorías;
- agrupación de categorías de baja materialidad en **Otros**, con drill-down;
- comercios principales y acceso al historial filtrado.

### Evolución del consumo

El gráfico comparte el sistema visual de Proyección:

- misma escala tipográfica de etiquetas, totales y meses;
- barras apiladas recurrente/variable;
- línea total secundaria y punteada;
- total visible por encima de la línea, sin solapamiento;
- barras con redondeo únicamente en el segmento superior;
- selección de horizonte **6 / 12 / 18 / 24 meses**;
- valor inicial: **6 meses**.

El horizonte cambia la ventana visual, no la clasificación financiera.

## Proyección mensual

La pantalla `/planificacion/flujo` pasa a ser **Proyección mensual** y responde tres preguntas mediante pestañas.

### Gastos

Muestra el gasto esperado como:

- **Comprometido**: obligaciones conocidas con monto/fecha.
- **Recurrente**: comportamiento que se repite con regularidad.
- **Variable**: gasto más ocasional/controlable o aún no clasificado con suficiente evidencia.

La línea punteada representa el total de egresos.

### Flujo de caja

Conserva la misma composición de egresos y agrega una línea de ingresos.

Reglas promovidas:

- **Ingreso fijo**: último abono salarial identificado.
- **Ingreso variable**: mediana mensual de otros abonos externos elegibles.
- El ingreso variable considera cuentas tanto en **PEN como en USD**.
- Los USD se convierten a soles de referencia únicamente para consolidar la visualización.
- Transferencias propias identificadas, operaciones de cambio y desembolsos de deuda no se tratan como ingreso económico.
- **Ingreso total esperado = ingreso fijo + ingreso variable**.
- El valor inferior de cada mes es flujo neto, no saldo bancario acumulado.

La detección de ingreso fijo es semántica: rol salarial o descriptores equivalentes como haberes/planilla/nómina/salario; no depende de un descriptor privado específico.

### Compromisos

Muestra solo obligaciones futuras ya conocidas, con liberaciones explicables por fecha de término de cada plan. Se distinguen hipoteca, préstamo, tarjeta/cuotas y otros compromisos soportados por evidencia.

### Horizontes

Las tres vistas comparten **6 / 12 / 18 / 24 meses** y abren en **6 meses**.

Reglas de densidad:

- seis meses deben caber en móvil sin adelgazar excesivamente las barras;
- 12/18/24 meses pueden usar scroll horizontal cuando corresponda;
- el ancho de barra y el pitch temporal no dependen de repartir el ancho total disponible;
- la altura del gráfico no crece artificialmente cuando hay menos meses;
- Inicio conserva su variante compacta fija de seis meses.

## Sistema visual de gráficos

Los gráficos de Inicio, Evolución, Gastos, Flujo y Compromisos comparten:

- escala tipográfica de números y meses;
- ancho visual de barras;
- ritmo horizontal;
- línea punteada de total;
- separación vertical entre línea y etiqueta de total;
- leyendas compactas;
- alineación de centro X entre barra, punto/línea, total y etiqueta mensual.

Los importes dentro de segmentos se muestran solo cuando hay espacio suficiente.

## Presupuestos

Se preserva la distinción conceptual entre:

- histórico observado;
- recomendación de Pilas;
- presupuesto definido por el usuario.

La UI admite presupuestos por mes y por moneda. Una recomendación no se aplica automáticamente y un mes/categoría sin evidencia suficiente permanece como no disponible.

## Productos y deudas

Productos separa explícitamente:

- cuentas/depósitos;
- tarjetas;
- préstamos;
- hipotecario.

La deuda de tarjetas distingue facturado pendiente, no facturado y cuotas/compromisos futuros.

Los préstamos muestran saldo de capital, cuota vigente, capital, interés, seguros, plazo, tasa, próximo vencimiento e historial de estados. La cuota completa no se trata automáticamente como consumo.

La pantalla **Deudas** no mezcla saldos de cuentas con obligaciones financieras.

## Fuentes y confianza

Mi cuenta > Fuentes funciona como trust center:

- diferencia autoridad de EECC y actividad provisional;
- muestra último corte/cierre observado;
- separa cierre y vencimiento;
- expone cobertura de documentos y brechas;
- no rellena meses ausentes por inferencia;
- no presenta OAuth o sincronización productiva como activa cuando no existe.

En el prototipo toda esta evidencia es ficticia, pero la interfaz y los contratos visuales son equivalentes a los de la capa privada.

## Oportunidades

Las recomendaciones por ciclo/cierre se muestran solo cuando existe suficiente historial para soportar un patrón. La UI aclara que el patrón no garantiza días sin intereses y que debe confirmarse el cierre vigente antes de tomar una decisión.

## Privacidad y moneda

- Soles es la moneda inicial de visualización.
- El selector permite Soles, Dólares u Original según la vista.
- Cuando una visualización necesita agregar PEN y USD, se declara una moneda de referencia.
- El modo privacidad oculta la unidad completa del importe, sin dejar sufijos numéricos visibles.
- El comportamiento se aplica de forma transversal a KPI, gráficos y detalles.

## Responsive y navegación

Ajustes consolidados:

- navegación móvil sin contenido visible debajo del dock;
- underlay opaco para Firefox móvil y safe-area;
- enlaces de cabecera alineados arriba a la derecha con flecha;
- gráficos sin overflow de página; el scroll horizontal existe solo dentro del contenedor del gráfico cuando es deliberado;
- Home compacto independiente de timing de viewport: el primer render y un refresh producen la misma geometría;
- restauración de navegación/scroll preservada por el shell existente.

## Fixtures del prototipo

Los fixtures se enriquecieron para ejercitar todas las pantallas sin copiar información privada:

- cuentas con historial de corte;
- tarjetas con historial de cierre/vencimiento;
- préstamo personal e hipotecario de demostración;
- presupuestos con cobertura histórica ficticia;
- ingreso fijo y abonos variables ficticios en PEN y USD;
- metadata sintética de cobertura y documentos.

No se derivaron cifras, nombres de productos ni identificadores del dataset privado.

## QA de promoción

La promoción exige como mínimo:

- smoke estático;
- `git diff --check`;
- navegación sin errores JS en móvil 390×844 y desktop;
- ausencia de overflow de página;
- validación de Inicio, Análisis, Proyección mensual, Presupuestos, Calendario, Cuotas, Productos, Deudas, Cuentas, Oportunidades y Fuentes;
- validación de pestañas Recurrentes/Variables;
- validación de horizontes 6/12/18/24;
- validación de Gastos/Flujo/Compromisos;
- escaneo explícito para impedir nombres, bancos, IDs, cuentas, EECC o datos reales en el repositorio.

## Regla de evolución

Toda mejora genérica validada sobre datos privados debe implementarse/promoverse aquí. La capa privada puede adaptar datos y provenance, pero no mantener un frontend divergente. Si una necesidad depende exclusivamente de información privada, debe resolverse mediante un contrato de datos o metadata consumido por la UI común.
