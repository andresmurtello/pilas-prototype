# Pilas — Contrato de handoff entre agentes v1.0

Todo handoff debe incluir:
- objetivo;
- alcance autorizado;
- fuera de alcance;
- fuentes de verdad;
- branch/commit cuando aplique;
- nivel de riesgo R1/R2/R3;
- Reuse decision cuando corresponda;
- criterios de aceptación;
- tests obligatorios;
- permisos permitidos;
- acciones prohibidas;
- evidencia esperada;
- condición de parada;
- formato de entrega.

## Regla de aislamiento
El receptor no debe inferir permisos adicionales ni iniciar el siguiente hito.

## Regla de revisión
El Independent Reviewer recibe la entrega y el contrato original, pero no instrucciones para justificar al builder. Su función es intentar refutar la aptitud de la entrega.

## Resultado
Toda ejecución termina en uno de:
PASS / FAIL / PARCIAL / BLOQUEADO / DECISIÓN REQUERIDA.
