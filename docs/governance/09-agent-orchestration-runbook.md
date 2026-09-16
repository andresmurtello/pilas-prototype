# Pilas — Runbook de orquestación v1.3

**Fecha:** 2026-09-14

## Flujo normal

1. Andrés expresa objetivo en lenguaje de producto.
2. Orchestrator reconstruye estado/baseline y clasifica problema, riesgo y dominio.
3. Si es nueva capacidad: Reuse Gate.
4. Orchestrator genera/actualiza Issue o contrato verificable.
5. Define builder, reviewer/gate, evidencia esperada y condición de parada.
6. Comprueba capacidad/cuota observable de los candidatos y selecciona ejecutor según `07-agent-routing-matrix.md` y `17-multi-ai-operating-policy.md`; si el preferente está limitado, aplica failover.
7. Especialista trabaja en entorno/branch aislado.
8. Tests y evidencia.
9. Revisión independiente proporcional al riesgo.
10. Para P1/P2 o discrepancias materiales, reproducir antes de corregir cuando sea posible.
11. Gate de dominio: financiero, UX, seguridad, privacidad, datos, etc.
12. Builder corrige únicamente hallazgos válidos/reproducidos o justificados.
13. Retest/regresión/CI.
14. Orchestrator determina PASS/FAIL/PARCIAL/BLOQUEADO/DECISIÓN REQUERIDA.
15. Resume a Andrés en lenguaje concreto y escala solo decisiones sensibles.
16. Andrés aprueba pasos sensibles.
17. Merge/release controlado.
18. Verificación post-integración/post-release.
19. Governance actualiza estado, documentación, aprendizaje, Agent Registry si cambió y Control Center.

## Regla multi-IA

No utilizar varios modelos por defecto.

Antes de involucrar otro modelo, responder internamente:

**¿Qué incertidumbre adicional quiero reducir?**

Ejemplo R3 preferente:

**Kimi implementa → Claude revisa → Codex reproduce → Builder corrige → Codex/regresión/CI → Orchestrator cierra.**

Es un patrón, no una obligación de marcas. La independencia y la evidencia sí son obligatorias donde lo define Governance.


## Capacity check y failover

Antes de trabajo material, el Orchestrator registra mentalmente u operativamente el estado de capacidad de ChatGPT/Codex/Kimi/Claude cuando sea observable: GREEN / AMBER / RED / EXHAUSTED / UNKNOWN.

- GREEN: routing normal.
- AMBER: conservar para trabajo donde tenga ventaja material.
- RED: desviar trabajo intercambiable.
- EXHAUSTED: failover inmediato.
- UNKNOWN: no asumir capacidad ni afirmar monitoreo.

Una señal de límite, cuota, reset o consumo relevante durante el ciclo obliga a recalcular el routing antes de la siguiente tarea costosa. El cambio de ejecutor por capacidad no requiere intervención de Andrés salvo que afecte alcance, costo material, calidad esperada o un gate R3.

## Discrepancias

Ante “modelo A dice X / modelo B dice Y”:

1. formular hipótesis;
2. revisar contrato;
3. reproducir;
4. testear;
5. decidir con evidencia.

No corregir código únicamente para satisfacer un comentario no reproducido si el contrato y la evidencia lo contradicen.

## Sincronización del Control Center

Governance actualiza la vista ejecutiva después de eventos materiales: cambio de hito, Issue/PR relevante, CI/gate, release, arquitectura, regla financiera, UX gap, decisión pendiente o Agent Registry.

Además ejecuta una auditoría periódica de drift. Si la vista contradice una fuente canónica, corrige la vista; no corrige la fuente para hacerla coincidir con el dashboard.

## Escalación inmediata

- decisión funcional;
- cambio material de alcance;
- arquitectura difícil de revertir;
- nueva dependencia relevante;
- uso de datos reales;
- seguridad/privacidad;
- gasto adicional relevante;
- despliegue;
- destrucción irreversible;
- alternativas válidas con implicancias de negocio diferentes.

## Regla de sesiones

Usar una sesión nueva para hitos/reviews importantes. El builder no puede ser el único aprobador.

## Mínima intervención de Andrés

Objetivo:

**Andrés define intención → Orchestrator coordina → agentes ejecutan/revisan → evidencia valida → Andrés recibe resultado/decisión.**

Cuando una herramienta no sea invocable directamente, preparar un handoff corto listo para copiar/pegar. Evitar convertir a Andrés en router manual de conversaciones.
