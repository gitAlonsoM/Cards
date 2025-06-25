# Guía para la Creación de Flashcards de Programación Efectivas

Este documento establece un estándar para la creación de flashcards de aprendizaje orientadas a la programación. El objetivo es producir material de estudio que sea claro, preciso y que facilite una retención del conocimiento sólida y duradera.

## Principios Fundamentales

1.  **Un Concepto por Card:** Cada flashcard debe centrarse en **un único concepto, comando o principio**. Evita mezclar múltiples ideas. Por ejemplo, `UNION` y `UNION ALL` deben ser dos cards separadas, ya que, aunque relacionados, su diferencia es el concepto clave a evaluar.
2.  **Enfocarse en el "Para Qué", no solo en el "Qué":** Una buena card no solo pregunta "¿Qué es X?", sino "¿Para qué sirve X?" o "¿Qué problema resuelve X?". Esto fomenta la comprensión del uso práctico sobre la simple memorización.
3.  **El Código como Evidencia:** El fragmento de código no es decorativo. Es la prueba tangible del concepto. Debe ser minimalista, autoexplicativo y 100% relevante para la pregunta.

---

## Anatomía de una Card Perfecta

Cada card se compone de seis campos esenciales. A continuación, se detalla el propósito y las mejores prácticas para cada uno.

### 1. `category` (Categoría)

* **Propósito:** Agrupar cards relacionadas para facilitar el estudio por temas (ej: "Transaction Control", "SQL Operators", "Error Handling").
* **Reglas:**
    * Debe ser concisa y descriptiva.
    * Utiliza el formato `Title Case` en inglés (ej: `Data Types`).
    * Sé consistente. Usa las mismas categorías para conceptos similares.

### 2. `hint` (Pista o Definición)

* **Propósito:** Proveer una definición formal y contextual del término. Prepara al usuario para la pregunta sin revelar la respuesta.
* **Reglas:**
    * **NUNCA** debe ser una pregunta. Es una afirmación.
    * Debe definir el concepto sin usar el término clave que es la respuesta.
    * **Incorrecto:** `Hint: Pista sobre la función que reemplaza valores nulos.`
    * **Correcto:** `Hint: This function evaluates an expression and, if it is null, returns a specified substitute value.`

### 3. `question` (Pregunta)

* **Propósito:** Es el núcleo de la card. Desafía al usuario a recuperar activamente el conocimiento.
* **Reglas:**
    * Debe ser una pregunta clara, directa y sin ambigüedades.
    * Debe enfocarse en el propósito o la aplicación del concepto.
    * **Incorrecto:** `¿Qué hace NVL?`
    * **Correcto:** `What function allows you to replace a NULL value with a specific default value?`
    * **Correcto:** `Which operator is most efficient for checking if a related record exists in another table without retrieving any of its data?`

### 4. `options` (Opciones)

* **Propósito:** Presentar una selección de respuestas donde solo una es correcta.
* **Reglas:**
    * Deben ser tres opciones en total: una correcta y dos "distractores" plausibles.
    * Los distractores deben ser conceptos relacionados o errores comunes. Esto pone a prueba un entendimiento más profundo.
        * **Buen ejemplo:** Para la respuesta `NVL` (Oracle), buenos distractores son `ISNULL` y `COALESCE` (funciones similares en otros sistemas de bases de datos).
        * **Mal ejemplo:** Para `NVL`, malos distractores serían `COMMIT` y `SELECT` (conceptos no relacionados).
    * Mantén un formato y longitud consistentes entre las opciones.

### 5. `correctAnswer` (Respuesta Correcta)

* **Propósito:** Indicar cuál de las `options` es la correcta.
* **Reglas:**
    * El texto debe coincidir **exactamente** con una de las cadenas de texto en el array `options`.

### 6. `codeSnippet` (Fragmento de Código)

* **Propósito:** Mostrar un ejemplo práctico y conciso del concepto en acción. Refuerza visualmente la respuesta correcta.
* **Reglas:**
    * **CERO comentarios en el código.** El código debe hablar por sí mismo. Los comentarios pueden dar pistas o la respuesta directamente.
    * Debe ser breve y centrarse exclusivamente en demostrar el concepto.
    * Debe ser sintácticamente correcto y usar buenas prácticas de formato.
    * Debe ser un ejemplo real, aunque simplificado.

---

## Proceso de Creación (Paso a Paso)

Sigue estos pasos para construir una card de manera metódica:

1.  **Aislar el Concepto:** Elige un único término o comando (ej: `SAVEPOINT`).
2.  **Redactar la Definición (Hint):** Escribe una definición clara. *Ej: "Este comando establece un marcador con nombre dentro de una transacción, permitiendo una reversión parcial."*
3.  **Formular la Pregunta (Question):** Crea la pregunta clave. *Ej: "¿Qué comando usas para crear un punto dentro de una transacción al que puedas revertir más tarde?"*
4.  **Diseñar las Opciones (Options):** Piensa en la respuesta correcta (`SAVEPOINT`) y dos buenos distractores (`COMMIT`, `CHECKPOINT`).
5.  **Crear el Ejemplo de Código (CodeSnippet):** Escribe un fragmento de código limpio que lo demuestre.
    ```sql
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    SAVEPOINT before_final_update;
    UPDATE wallets SET credits = credits - 10;
    ```
6.  **Asignar la Categoría (Category):** Define su grupo. *Ej: `Transaction Control`.*
7.  **Revisión Final:** Lee la card completa. ¿El hint ayuda sin revelar la respuesta? ¿La pregunta es clara? ¿El código es limpio y relevante? ¿Las opciones son desafiantes pero justas? Si todo está en orden, la card está lista.