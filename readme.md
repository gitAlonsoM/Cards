# Proyecto "Cards" - Documentación Técnica

**Fecha de Documentación:** 22 de junio de 2025

Este documento sirve como un registro del estado actual del proyecto "Cards", su arquitectura y sus flujos de lógica clave. También establece una hoja de ruta (roadmap) para las próximas funcionalidades a implementar, junto con recomendaciones técnicas.

## 1. Resumen del Proyecto

"Cards" es una aplicación web de tarjetas de aprendizaje (flashcards) diseñada para ser una herramienta de estudio progresiva y personalizable. Permite a los usuarios estudiar con mazos de tarjetas predefinidos o generar dinámicamente sus propios mazos sobre cualquier tema utilizando la inteligencia artificial de OpenAI. El sistema rastrea el progreso del usuario para optimizar las sesiones de estudio, priorizando las tarjetas que requieren más repaso.

## 2. Arquitectura Actual

El proyecto ha sido refactorizado desde un único archivo monolítico a una arquitectura modular basada en componentes de JavaScript, lo que facilita su mantenimiento y escalabilidad.

### Estructura de Archivos

```
/CARDS
├── index.html              // Punto de entrada principal y esqueleto de la UI.
├── css/
│   └── style.css           // Estilos personalizados y de Tailwind.
├── data/
│   ├── tech_deck.js        // Datos del mazo estático de Tecnología.
│   └── nouns_deck.js       // Datos del mazo estático de Sustantivos.
└── js/
    ├── api.js              // Lógica para la comunicación con la API de OpenAI.
    ├── main.js             // Orquestador principal: estado, eventos y flujos.
    ├── storage.js          // Gestor del LocalStorage (mazos, progreso, API key).
    ├── tts.js              // Gestor de la Síntesis de Voz (Text-to-Speech).
    └── ui.js               // Manipulación del DOM y renderizado de la UI.
```

### Descripción de Componentes

* **`index.html`**: Contiene la estructura HTML de todas las pantallas de la aplicación (selección de mazo, detalles, quiz, resultados) y los contenedores para los elementos dinámicos. Carga todos los scripts CSS y JS en el orden requerido.
* **`css/style.css`**: Almacena todas las reglas de estilo.
* **`data/`**: Este directorio contiene los mazos de tarjetas estáticos. Cada archivo define un objeto JavaScript con la estructura de un mazo.
* **`js/storage.js`**: Centraliza toda la interacción con el `localStorage` del navegador. Gestiona el guardado y la carga de los mazos generados por el usuario, el progreso de aprendizaje de cada mazo y la API key de OpenAI.
* **`js/api.js`**: Es responsable de una única tarea: comunicarse con la API de OpenAI. Construye el `prompt` del sistema, envía la solicitud al modelo (`gpt-4o`) y procesa la respuesta JSON para devolver un array de tarjetas.
* **`js/tts.js`**: Encapsula la funcionalidad de Text-to-Speech, utilizando la API nativa `window.speechSynthesis` del navegador.
* **`js/ui.js`**: Contiene todo el código que manipula directamente el DOM. Es responsable de mostrar u ocultar pantallas, renderizar las listas de mazos, mostrar las preguntas y actualizar visualmente la interfaz.
* **`js/main.js`**: Es el cerebro de la aplicación. Inicializa el estado, carga los datos, configura todos los `event listeners` y contiene las funciones de alto nivel que orquestan los flujos de la aplicación (ej. `startGame`, `selectDeck`).

## 3. Flujos de Lógica Clave

### Generación de Mazos con IA y Gestión de API Key

Este es el flujo más complejo de la aplicación:

1.  **Activación**: El usuario hace clic en "Crear Mazo con IA".
2.  **Carga de API Key**: `main.js` solicita la API key guardada desde `storage.js`.
3.  **Apertura de Modal**: `ui.js` muestra el modal de creación y, si se encontró una clave, la pre-rellena en el campo correspondiente.
4.  **Envío de Formulario**: El usuario rellena el título, el prompt y confirma su API key.
5.  **Guardado de API Key**: Al enviar, `main.js` llama a `storage.js` para guardar la API key en `localStorage`, asegurando su persistencia.
6.  **Llamada a la API**: `main.js` invoca a `api.generateCardsWithAI`, pasándole el prompt del usuario y la clave.
7.  **Procesamiento de IA**: `api.js` utiliza el modelo **`gpt-4o`** con un `systemPrompt` avanzado que exige preguntas contextuales y un formato JSON estricto (`{ "type": "json_object" }`).
8.  **Creación del Mazo**: Una vez recibida y parseada la respuesta de la IA, `main.js` crea un nuevo objeto de mazo, le asigna un ID único y lo añade al estado de la aplicación.
9.  **Persistencia del Mazo**: El nuevo mazo se guarda en `localStorage` a través de `storage.js`.
10. **Actualización de UI**: La interfaz se vuelve a renderizar para mostrar el nuevo mazo en la lista.

## 4. Próximos Pasos y Hoja de Ruta (Roadmap)

Las siguientes funcionalidades son prioritarias para mejorar la robustez y la experiencia de usuario de la aplicación.

### Mejora 1: Sistema Avanzado de Síntesis de Voz (TTS)

* **Problema Actual**: La síntesis de voz actual depende de la detección automática de idioma del navegador, que puede ser imprecisa y resultar en una pronunciación deficiente.
* **Solución Propuesta**: Otorgar al usuario el control sobre el idioma de la locución.
* **Recomendaciones Técnicas**:
    1.  **UI (`index.html`)**: Añadir un menú desplegable (`<select>`) en una ubicación visible (ej. en la pantalla de selección de mazo o en un menú de configuración) que permita al usuario elegir un idioma de una lista predefinida (ej. "Inglés (US)", "Español (España)", "Francés").
    2.  **Persistencia (`storage.js`)**: Crear funciones `saveLanguagePreference(langCode)` y `getLanguagePreference()` para guardar la elección del usuario en `localStorage` (ej. `langCode` podría ser `'en-US'`).
    3.  **Lógica (`main.js` y `ui.js`)**: Al momento de mostrar una pregunta (`ui.displayQuestion`), leer la preferencia de idioma guardada.
    4.  **Ejecución (`tts.js`)**: Modificar la función `createSpeakButton(textToSpeak, lang)` para que siempre reciba el código de idioma explícito y lo use al crear el `SpeechSynthesisUtterance`. Esto elimina la ambigüedad y fuerza la pronunciación correcta.

### Mejora 2: Implementación Universal de Imágenes

* **Problema Actual**: Solo los mazos estáticos pueden tener imágenes. Los mazos generados por IA carecen de soporte visual, y pedirle a un LLM que proporcione URLs de imágenes directamente es poco fiable y propenso a "alucinaciones" (URLs inventadas o rotas).
* **Solución Propuesta**: Integrar una API de imágenes de stock para obtener URLs fiables y relevantes para cada tarjeta generada por la IA.
* **Recomendaciones Técnicas**:
    1.  **Prompt Engineering (`api.js`)**: Modificar el `systemPrompt` de OpenAI. Además de los campos actuales, se le debe pedir a la IA que genere un campo adicional: `"imageSearchQuery": "a short, accurate, descriptive search term in English"`. Por ejemplo, para una tarjeta sobre una cuchara, el query sería `"wooden spoon"`.
    2.  **Elección de API de Imágenes**: Seleccionar y obtener una API key gratuita de un servicio de imágenes de stock como **Pexels**, **Unsplash** o **Pixabay**. Estas APIs son fiables y están diseñadas para este propósito.
    3.  **Lógica de API (`api.js`)**: La función `generateCardsWithAI` debe ser modificada. Después de recibir la respuesta de OpenAI con el contenido de las tarjetas (incluido el `imageSearchQuery`), debe realizar un segundo `fetch`:
        * Por cada tarjeta, hacer una llamada a la API de imágenes (ej. Pexels) usando el `imageSearchQuery`.
        * Tomar la URL de la imagen del primer resultado (ej. `response.photos[0].src.medium`).
        * Añadir esta URL a la tarjeta en un nuevo campo: `"imageUrl": "https://url.from.pexels.api"`.
    4.  **Manejo de Errores (Robustez)**:
        * Si la API de imágenes no devuelve resultados para un query, o si la llamada falla, el campo `imageUrl` debe quedar vacío o nulo.
        * La función `ui.displayQuestion` ya tiene la lógica para mostrar una imagen por defecto si `imageUrl` no existe o está roto. Esta lógica se vuelve ahora aún más importante y debe ser mantenida.
