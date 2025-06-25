Claro, aquí tienes el contenido completo y listo para que lo guardes en un archivo llamado README.md.

Markdown

# Proyecto "Smart Decks": Documentación Técnica y Hoja de Ruta

**Versión:** 2.0
**Fecha:** 24 de junio de 2025

## 1. Visión General del Proyecto

**Smart Decks** es una aplicación web de aprendizaje progresivo diseñada para crear experiencias de estudio dinámicas y personalizadas. A diferencia de las plataformas de *flashcards* tradicionales, Smart Decks aprovecha la inteligencia artificial para generar mazos de estudio completos sobre cualquier tema, enriquecidos con contenido visual y contextual como fragmentos de código con resaltado de sintaxis e imágenes relevantes.

## 2. Arquitectura Actual

La aplicación sigue una arquitectura modular en el *frontend* que separa claramente las responsabilidades, facilitando su mantenimiento y futura expansión.

### Estructura de Archivos Relevante

/
├── index.html              // Estructura principal del DOM y punto de entrada.
├── css/
│   └── style.css           // Estilos personalizados.
├── data/
│   ├── plsql_deck.js       // Mazo estático de ejemplo.
│   └── ...                 // Otros mazos estáticos.
└── js/
├── api.js              // Módulo de comunicación con la API de OpenAI.
├── main.js             // Orquestador principal: estado, eventos y flujos de lógica.
├── storage.js          // Módulo de gestión del LocalStorage.
├── tts.js              // Módulo de Text-to-Speech para accesibilidad.
└── ui.js               // Módulo de manipulación del DOM y renderizado de la UI.


### Descripción de Módulos Clave

* **`main.js`**: Actúa como el cerebro de la aplicación. Gestiona el estado global (mazos actuales, progreso), inicializa los *event listeners* y orquesta las interacciones entre los demás módulos.
* **`ui.js`**: Es el único módulo con acceso directo al DOM. Es responsable de renderizar dinámicamente todos los componentes visuales: listas de mazos, tarjetas de preguntas, pantallas de resultados, etc.
* **`api.js`**: Abstrae toda la comunicación con servicios externos. Actualmente, se encarga de construir los *prompts* y gestionar las llamadas a la API de OpenAI (`gpt-4o`) para la generación de tarjetas.
* **`storage.js`**: Encapsula toda la lógica de persistencia de datos en el `localStorage` del navegador. Gestiona los mazos creados por el usuario, el progreso de aprendizaje y la API key.
* **`tts.js`**: Proporciona funcionalidades de accesibilidad mediante la síntesis de voz, permitiendo a los usuarios escuchar el contenido de las tarjetas.

## 3. Hoja de Ruta para la Escalabilidad (Roadmap)

Para transformar Smart Decks en una plataforma verdaderamente dinámica y escalable, se proponen las siguientes mejoras estratégicas, ordenadas por prioridad.

### Mejora Fundamental: Refactorización del Modelo de Datos

El paso más crítico para la escalabilidad es evolucionar la estructura de datos de los mazos y las tarjetas.

**Modelo Actual (Limitado):**
```javascript
// Tarjeta con propiedades opcionales
{
  category: "Shell Scripting",
  question: "...",
  options: ["...", "..."],
  correctAnswer: "...",
  codeSnippet: "chmod +x file.sh" // Opcional
  // imageUrl: "url.jpg" // Opcional y no usado por la IA
}
Modelo Propuesto (Escalable y Flexible):
La propuesta es unificar el contenido dinámico en un objeto content, cuyo tipo determina cómo debe ser renderizado.

JavaScript

// Nueva estructura de tarjeta unificada
{
  category: "Web Development",
  hint: "...",
  question: "Which tag is used to define a hyperlink?",
  options: ["...", "..."],
  correctAnswer: "<a>",
  // El objeto 'content' describe el material de apoyo visual.
  content: {
    type: "code", // Tipos posibles: 'code', 'image', 'none'
    language: "html", // Relevante solo si type es 'code'
    value: "<a>Hello World</a>"
  }
}
Si el contenido fuera una imagen, la estructura sería:

JavaScript

// ...
content: {
    type: "image",
    value: "photo of a computer screen with HTML code" // Esto sería un 'image search query'
}
// ...
Ventajas de este enfoque:

Escalabilidad: Añadir nuevos tipos de contenido en el futuro (ej. type: 'audio', type: 'diagram') solo requeriría añadir un nuevo case en la lógica de renderizado, sin cambiar el modelo de datos.

Flexibilidad: Un mismo mazo puede contener tarjetas con diferentes tipos de contenido (code, image, none), permitiendo experiencias de aprendizaje mucho más ricas.

Mejora 1: Generación de Contenido Dinámico Multimodal con IA
Con el nuevo modelo de datos, el siguiente paso es mejorar la inteligencia del módulo api.js.

Plan de Acción:

Ingeniería de Prompts Avanzada (api.js):

Modificar el systemPrompt para que la IA entienda la nueva estructura de la tarjeta, incluyendo el objeto content.

Instruir a la IA para que, dependiendo del contexto de la pregunta, decida el type de contenido más apropiado.

Para código: Pedirle que siempre especifique el campo language (ej. javascript, python, sql, bash).

Para imágenes: Instruir a la IA para que NO genere URLs. En su lugar, debe generar una consulta de búsqueda en inglés, corta y descriptiva, en el campo value. Ejemplo: {"type": "image", "value": "a diagram of the water cycle"}.

Integración de API de Imágenes (api.js):

Obtener una API key gratuita de un servicio como Pexels o Unsplash.

Modificar generateCardsWithAI: después de recibir la respuesta de OpenAI, iterar sobre las tarjetas. Si una tarjeta tiene content.type === 'image', hacer una segunda llamada a la API de Pexels/Unsplash usando content.value como consulta.

Reemplazar el content.value (la consulta de búsqueda) por la URL de la imagen obtenida de la API de imágenes.

Implementar un manejo de errores robusto: si la API de imágenes falla o no devuelve resultados, el content.type debe cambiar a none para esa tarjeta.

Mejora 2: Flexibilidad en la Creación de Mazos
El usuario debe poder guiar a la IA en el tipo de mazo que desea crear.

Plan de Acción:

Actualizar UI del Modal de Creación (index.html / ui.js):

Añadir opciones en el formulario de "Crear Mazo con IA", como un grupo de checkboxes:

[ ] Incluir fragmentos de código

[ ] Incluir imágenes relevantes

Añadir un campo de texto para especificar los lenguajes de programación deseados si se marca la opción de código.

Adaptación Dinámica del Prompt (main.js / api.js):

Al enviar el formulario, main.js construirá un prompt de usuario más detallado.

Ejemplo: User prompt: "Un mazo sobre los hooks de React. Por favor, incluye fragmentos de código en javascript y también imágenes relevantes cuando sea posible."

Esta información se pasará a generateCardsWithAI, que la incorporará en su lógica para instruir a la IA de manera más precisa.

Mejora 3: Renderizado Dinámico y Escalable de Contenido
La función ui.displayQuestion debe ser refactorizada para manejar el nuevo modelo de datos.

Plan de Acción:

Refactorizar displayQuestion (ui.js):

Reemplazar la cadena de if/else if actual por una estructura switch basada en question.content.type.

JavaScript

// Lógica de renderizado propuesta en ui.js
const content = question.content;
switch (content.type) {
    case 'code':
        // Lógica para mostrar el contenedor de código
        // y usar content.language para el resaltado de sintaxis con highlight.js
        this.dom.codeSnippet.className = `language-${content.language || 'plaintext'}`;
        this.dom.codeSnippet.textContent = content.value;
        hljs.highlightElement(this.dom.codeSnippet);
        break;
    case 'image':
        // Lógica para mostrar el contenedor de imagen
        // usando content.value (que ahora es una URL)
        this.dom.cardImage.src = content.value;
        break;
    case 'none':
    default:
        // Ocultar ambos contenedores (código e imagen)
        break;
}
