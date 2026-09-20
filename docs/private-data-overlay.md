# Capa privada local sobre la UI canónica

## Decisión

Pilas mantiene **una sola UI**. La experiencia web pública/demo vive en `pilas-prototype/main`. La vista privada local no es otro frontend.

La capa privada conserva únicamente:

- `private_model.json` local;
- caché/extracciones autorizadas;
- credenciales locales protegidas;
- provenance y metadata de cobertura;
- un builder delgado que reemplaza fixtures sintéticos por el modelo privado.

## Qué no debe volver a existir en Private

No deben mantenerse overrides privados permanentes para CSS responsive, navegación, pantallas, gráficos, filtros, copy genérico, reglas visuales o jerarquía de Proyección/Análisis.

Si una mejora es útil para Pilas como producto, se promueve primero a la UI canónica y Private la consume automáticamente.

## Límite de seguridad

Unificar el código **no significa** publicar los datos. Estados de cuenta, documentos, credenciales, dumps, modelos privados y resultados de extracción permanecen fuera de Git/GitHub.

El repositorio público/demo usa fixtures sintéticos suficientemente ricos para probar los mismos contratos visuales sin filtrar información real.
