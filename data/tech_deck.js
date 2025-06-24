/* data\tech_deck.js */
const techDeckData = {
  id: "tech_deck",
  name: "Programación, Database y Redes",
  description: "Conceptos fundamentales de desarrollo de software.",
  useImages: false,
  isAiGenerated: false,
  cards: [
    {
      category: "API & DB Connection",
      hint: "Hint: This action initiates the creation of a new record in the database.",
      question:
        "A user submits a new form. The frontend sends a POST request, which corresponds to a database ( ... ) command.",
      options: ["SELECT", "INSERT", "UPDATE"],
      correctAnswer: "INSERT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This HTTP method is used to add a completely new entity to the system.",
      question:
        "To add a new product to the inventory via the API, the standard method to use is HTTP ( ... ).",
      options: ["GET", "PUT", "POST"],
      correctAnswer: "POST",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: After adding data, this database command makes the changes permanent.",
      question:
        "After an INSERT operation triggered by a POST request, a ( ... ) command must be executed to save the data.",
      options: ["COMMIT", "SAVEPOINT", "ROLLBACK"],
      correctAnswer: "COMMIT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This status code indicates that a new resource was successfully created.",
      question:
        "A successful POST request that creates a new item should return a ( ... ) status code.",
      options: ["200 OK", "201 Created", "302 Found"],
      correctAnswer: "201 Created",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This action is for fetching existing data without altering it.",
      question:
        "When a user views a list of items, the app sends a GET request, which triggers a database ( ... ) query.",
      options: ["FETCH", "UPDATE", "SELECT"],
      correctAnswer: "SELECT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This HTTP method is designed for retrieving information from a server.",
      question:
        "To read product details from the server, the frontend application sends an HTTP ( ... ) request.",
      options: ["READ", "GET", "FETCH"],
      correctAnswer: "GET",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: Reading data doesn't require this command because nothing is changed.",
      question:
        "Unlike data modification operations, a SELECT query does not require a ( ... ) to be executed afterward.",
      options: ["COMMIT", "INDEX", "JOIN"],
      correctAnswer: "COMMIT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: The most common success code for a request that retrieves data.",
      question:
        "A standard successful GET request typically returns a ( ... ) status code.",
      options: ["200 OK", "204 No Content", "404 Not Found"],
      correctAnswer: "200 OK",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This action modifies an existing record in the database.",
      question:
        "Sending a PUT or PATCH request to the API corresponds to a database ( ... ) command.",
      options: ["MODIFY", "CHANGE", "UPDATE"],
      correctAnswer: "UPDATE",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This HTTP method is used to replace an entire resource with new data.",
      question:
        "To completely replace a user's profile information, the client should send a/an ( ... ) request.",
      options: ["PATCH", "POST", "PUT"],
      correctAnswer: "PUT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This HTTP method is for applying partial modifications to a resource.",
      question:
        "If you only need to change a product's price, the more efficient HTTP method to use is ( ... ).",
      options: ["PATCH", "UPDATE", "MODIFY"],
      correctAnswer: "PATCH",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: An operation that changes data requires this to make the changes permanent.",
      question:
        "An UPDATE statement, triggered by a PUT or PATCH, must be followed by a ( ... ) to save the changes.",
      options: ["SAVE", "LOCK", "COMMIT"],
      correctAnswer: "COMMIT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This SQL command is used to alter existing rows in a table.",
      question:
        'A PATCH request to /api/products/123 with {"price": 99} results in an SQL ( ... ) command.',
      options: ["INSERT", "UPDATE", "MODIFY"],
      correctAnswer: "UPDATE",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This action permanently removes a record from the database.",
      question:
        "An HTTP DELETE request sent to an endpoint triggers a ( ... ) command in the database.",
      options: ["DROP", "ERASE", "DELETE"],
      correctAnswer: "DELETE",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This HTTP method is used to signal the removal of a specific resource.",
      question:
        "To remove product with ID 456 from the system, the application sends a ( ... ) request to /api/products/456.",
      options: ["REMOVE", "DELETE", "ERASE"],
      correctAnswer: "DELETE",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This status code indicates a successful deletion with no data to return.",
      question:
        "A successful DELETE operation typically returns a ( ... ) status code.",
      options: ["200 OK", "410 Gone", "204 No Content"],
      correctAnswer: "204 No Content",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This is the 'C' in the common database operations acronym.",
      question:
        "The 'C' in CRUD stands for Create, which corresponds to the database operation ( ... ).",
      options: ["INSERT", "NEW", "ADD"],
      correctAnswer: "INSERT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This is the 'R' in the common database operations acronym.",
      question:
        "The 'R' in CRUD stands for Read, which is performed using the ( ... ) statement.",
      options: ["GET", "FETCH", "SELECT"],
      correctAnswer: "SELECT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This is the 'U' in the common database operations acronym.",
      question:
        "The 'U' in CRUD stands for Update, implemented with the database command ( ... ).",
      options: ["MODIFY", "UPDATE", "CHANGE"],
      correctAnswer: "UPDATE",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This is the 'D' in the common database operations acronym.",
      question:
        "The 'D' in CRUD stands for Delete, which corresponds to the ( ... ) command in SQL.",
      options: ["REMOVE", "DROP", "DELETE"],
      correctAnswer: "DELETE",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: A common data format for sending information in the body of an API request.",
      question:
        "The body of a POST or PUT request usually contains the resource data in ( ... ) format.",
      options: ["HTML", "XML", "JSON"],
      correctAnswer: "JSON",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: The frontend and backend communicate using this set of rules.",
      question:
        "The entire flow of creating, reading, updating, and deleting data is managed over the ( ... ) protocol.",
      options: ["FTP", "HTTP", "TCP"],
      correctAnswer: "HTTP",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: It is a stateless protocol for communication.",
      question:
        "The architectural style that uses methods like GET, POST, and DELETE is known as ( ... ).",
      options: ["SOAP", "REST", "RPC"],
      correctAnswer: "REST",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: What database operation does not require a COMMIT?",
      question:
        "Out of all CRUD operations, only ( ... ) does not change the database state and requires no COMMIT.",
      options: ["CREATE", "READ", "UPDATE"],
      correctAnswer: "READ",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This HTTP method creates a new resource and is not idempotent.",
      question:
        "The HTTP method that corresponds to the CREATE operation is ( ... ).",
      options: ["PUT", "POST", "GET"],
      correctAnswer: "POST",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This database command is used to retrieve data from a table.",
      question: "The HTTP GET method directly maps to the ( ... ) SQL command.",
      options: ["FETCH", "SELECT", "READ"],
      correctAnswer: "SELECT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: It replaces the entire resource with the provided data.",
      question:
        "The ( ... ) HTTP method is idempotent and is used for a full UPDATE operation.",
      options: ["PATCH", "POST", "PUT"],
      correctAnswer: "PUT",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: It is used for removing a resource permanently.",
      question:
        "The DELETE CRUD operation is directly implemented by the HTTP ( ... ) method.",
      options: ["REMOVE", "ERASE", "DELETE"],
      correctAnswer: "DELETE",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: It's the standard format for data exchange in modern web APIs.",
      question:
        "When the server responds to a GET request, it usually sends the data as a ( ... ) payload.",
      options: ["Text", "Binary", "JSON"],
      correctAnswer: "JSON",
    },
    {
      category: "API & DB Connection",
      hint: "Hint: This command makes all recent data changes final and visible to others.",
      question:
        "To ensure data integrity after an UPDATE or DELETE, a ( ... ) is essential.",
      options: ["SAVE", "COMMIT", "END TRANSACTION"],
      correctAnswer: "COMMIT",
    },
    {
      category: "API REST",
      hint: "Hint: This term describes a stateless, client-server communication style.",
      question:
        "An architectural style for networked applications that uses stateless operations is known as a ( ... ).",
      options: ["SOAP", "REST API", "GraphQL"],
      correctAnswer: "REST API",
    },
    {
      category: "API REST",
      hint: "Hint: These are the specific addresses like /users/ or /notes/1.",
      question:
        "The specific URLs in a REST API that correspond to resources are called ( ... ).",
      options: ["Endpoints", "Protocols", "Sockets"],
      correctAnswer: "Endpoints",
    },
    {
      category: "HTTP Methods",
      hint: "Hint: It's for retrieving information only.",
      question:
        "To request data from a server without causing modifications, a client uses the HTTP ( ... ) method.",
      options: ["POST", "GET", "UPDATE"],
      correctAnswer: "GET",
    },
    {
      category: "HTTP Methods",
      hint: "Hint: This method sends data to create something new.",
      question:
        "To create a new resource on a backend server, the standard HTTP method is ( ... ).",
      options: ["CREATE", "PUT", "POST"],
      correctAnswer: "POST",
    },
    {
      category: "HTTP Methods",
      hint: "Hint: This method is used when you want to replace an entire item.",
      question:
        "To completely update or replace an existing resource, a client sends a/an ( ... ) request.",
      options: ["PUT", "PATCH", "REPLACE"],
      correctAnswer: "PUT",
    },
    {
      category: "JSON",
      hint: "Hint: It needs to convert this text into a usable object.",
      question:
        "To use API data in an application, the received JSON string must be ( ... ) into a native object.",
      options: ["compiled", "serialized", "parsed"],
      correctAnswer: "parsed",
    },
    {
      category: "Local API",
      hint: "Hint: This special hostname always refers to 'this computer'.",
      question:
        "During development, a backend server running on the same machine is accessed via the hostname ( ... ).",
      options: ["`192.168.1.1`", "`localhost`", "`remote.host`"],
      correctAnswer: "`localhost`",
    },
    {
      category: "WebSocket",
      hint: "Hint: Unlike HTTP's request-response, this is like an open phone line.",
      question:
        "For real-time apps like chats, a ( ... ) provides a persistent, two-way communication channel.",
      options: ["REST API", "HTTP Request", "WebSocket"],
      correctAnswer: "WebSocket",
    },
    {
      category: "Mobile",
      hint: "Hint: This command-line tool for Android creates a network tunnel.",
      question:
        "To connect a physical phone to a local server, the command `( ... ) tcp:8000 tcp:8000` is used.",
      options: ["`net-tunnel`", "`adb reverse`", "`android link`"],
      correctAnswer: "`adb reverse`",
    },
    {
      category: "Database",
      hint: "Hint: Instead of building SQL in the app, the code calls pre-written programs in the DB.",
      question:
        "The application's data logic is heavily implemented in the database using ( ... ).",
      options: ["Microservices", "ORM Queries", "Stored Procedures"],
      correctAnswer: "Stored Procedures",
    },
    {
      category: "Security",
      hint: "Hint: This 'S' in the protocol indicates a secure, encrypted connection.",
      question:
        "In a production environment, all API communication must use ( ... ) for security.",
      options: ["HTTP", "FTP", "HTTPS"],
      correctAnswer: "HTTPS",
    },
    {
      category: "Configuration",
      hint: "Hint: Instead of hard-coding URLs, their values are stored outside the code.",
      question:
        "To manage different API URLs for development and production, the app uses ( ... ).",
      options: ["Global Constants", "Environment Variables", "Config Maps"],
      correctAnswer: "Environment Variables",
    },
    {
      category: "Authentication",
      hint: "Hint: This Google service is used to manage user sign-in and identity.",
      question:
        "User authentication is handled by ( ... ), which provides a unique `uid`.",
      options: ["Auth0", "Firebase", "Passport.js"],
      correctAnswer: "Firebase",
    },
    {
      category: "Real-time",
      hint: "Hint: This in-memory data store acts as a high-speed message broker.",
      question:
        "For broadcasting real-time chat messages, the backend uses ( ... ) as a message broker.",
      options: ["PostgreSQL", "Redis", "SQLite"],
      correctAnswer: "Redis",
    },
    {
      category: "Frontend",
      hint: "Hint: The UI updates immediately, before the server confirms the action.",
      question:
        "When sending a chat message, the UI updates instantly. This is called ( ... ).",
      options: [
        "Lazy Loading",
        "Optimistic Rendering",
        "Server-Side Rendering",
      ],
      correctAnswer: "Optimistic Rendering",
    },
    {
      category: "Database",
      hint: "Hint: This is a common database tool for creating unique, auto-incrementing numbers.",
      question:
        "To generate unique IDs for new rows in a table, the Oracle database uses ( ... ).",
      options: ["UUIDs", "Indexes", "Sequences"],
      correctAnswer: "Sequences",
    },
    {
      category: "Database",
      hint: "Hint: This database feature automatically executes an action when a certain event occurs.",
      question:
        "To automatically update an `updated_at` field whenever a row is changed, the database uses ( ... ).",
      options: ["Functions", "Triggers", "Views"],
      correctAnswer: "Triggers",
    },
    {
      category: "Frontend",
      hint: "Hint: Each one has a specific responsibility, like `AuthService` or `ChatService`.",
      question:
        "The frontend code is organized into specialized, reusable classes called ( ... ).",
      options: ["Components", "Modules", "Services"],
      correctAnswer: "Services",
    },
    {
      category: "Database",
      hint: "Hint: Django usually provides this feature to translate Python objects into database tables.",
      question:
        "The application intentionally avoids using Django's built-in ( ... ) for its core business logic.",
      options: ["ORM", "Templating Engine", "Admin Site"],
      correctAnswer: "ORM",
    },
    {
      category: "Architecture",
      hint: "Hint: This is the ability of a system to handle a growing amount of work.",
      question:
        "A major advantage of the client-server model is ( ... ), as more servers can be added to handle more users.",
      options: ["Simplicity", "Scalability", "Low Latency"],
      correctAnswer: "Scalability",
    },
    {
      category: "HTTP Methods",
      hint: "Hint: This action is destructive and permanent.",
      question:
        "To permanently remove a specific resource from the server, a client sends a/an ( ... ) request.",
      options: ["REMOVE", "DROP", "DELETE"],
      correctAnswer: "DELETE",
    },
    {
      category: "HTTP Methods",
      hint: "Hint: It only updates a part of a resource, not the whole thing.",
      question:
        "To apply a partial modification to a resource, rather than replacing it entirely, the ( ... ) method should be used.",
      options: ["PUT", "PATCH", "MODIFY"],
      correctAnswer: "PATCH",
    },
    {
      category: "HTTP Methods",
      hint: "Hint: `GET` and `PUT` have this property, but `POST` does not.",
      question:
        "An HTTP method is considered ( ... ) if making the same request multiple times produces the same result.",
      options: ["Idempotent", "Safe", "Recursive"],
      correctAnswer: "Idempotent",
    },
    {
      category: "HTTP Methods",
      hint: "Hint: This term describes methods that should not change the server's state.",
      question:
        "HTTP methods like GET and HEAD are considered ( ... ) because they are for reading data only.",
      options: ["Stable", "Stateless", "Safe"],
      correctAnswer: "Safe",
    },
    {
      category: "HTTP Methods",
      hint: "Hint: This method is just like `GET`, but it only asks for the response headers.",
      question:
        "The HTTP method that is identical to GET but does not return a message body is ( ... ).",
      options: ["OPTIONS", "HEAD", "INFO"],
      correctAnswer: "HEAD",
    },
    {
      category: "Architecture",
      hint: "Hint: This model separates the user interface from the data processing logic.",
      question: "The application is built on a ( ... ) architecture.",
      options: ["Monolithic", "Client-Server", "Peer-to-Peer"],
      correctAnswer: "Client-Server",
    },
    {
      category: "Frontend",
      hint: "Hint: This UI toolkit provides pre-built components for a native look and feel.",
      question:
        "To ensure a native look on iOS and Android, the application uses the ( ... ) framework.",
      options: ["React Native", "Ionic", "Flutter"],
      correctAnswer: "Ionic",
    },
    {
      category: "Frontend",
      hint: "Hint: This framework from Google provides the structure and logic for the frontend.",
      question:
        "The logical 'brain' of the frontend, managing its structure and behavior, is built with ( ... ).",
      options: ["Vue.js", "React", "Angular"],
      correctAnswer: "Angular",
    },
    {
      category: "Backend",
      hint: "Hint: This high-level Python framework is known for its 'batteries-included' philosophy.",
      question:
        "The server-side of the application is built using the ( ... ) framework.",
      options: ["Flask", "Django", "FastAPI"],
      correctAnswer: "Django",
    },
    {
      category: "Real-time",
      hint: "Hint: This Django library is required to handle protocols beyond HTTP, like WebSockets.",
      question:
        "To enable WebSocket support in the Django backend, the application uses ( ... ).",
      options: ["Django REST Framework", "Django Channels", "Socket.IO"],
      correctAnswer: "Django Channels",
    },
    {
      category: "Mobile",
      hint: "Hint: This tool acts as a bridge, allowing a web app to be installed on a phone.",
      question:
        "The bridge that allows the web app to run as a native mobile application is ( ... ).",
      options: ["Cordova", "Capacitor", "Electron"],
      correctAnswer: "Capacitor",
    },
    {
      category: "Security",
      hint: "Hint: This is the process of checking if a verified user has permission to access a resource.",
      question:
        "After validating a user's identity, the server must also perform ( ... ) to check their permissions.",
      options: ["Authentication", "Authorization", "Encryption"],
      correctAnswer: "Authorization",
    },
    {
      category: "Ionic Communication",
      hint: "Hint: This is the primary tool in Angular for making web requests.",
      question:
        "In an Ionic/Angular service, the ( ... ) is injected to make HTTP requests.",
      options: ["HttpModule", "HttpClient", "HttpRequest"],
      correctAnswer: "HttpClient",
    },
    {
      category: "Asynchronous",
      hint: "Hint: You can't get the data immediately. You have to wait for it.",
      question:
        "Making an HTTP request is an ( ... ) operation, meaning the app doesn't freeze while waiting for the response.",
      options: ["instantaneous", "asynchronous", "embedded"],
      correctAnswer: "asynchronous",
    },
    {
      category: "Ionic/Angular",
      hint: "Hint: This is the keyword to 'listen' for the response from the server.",
      question:
        "After making an HTTP request, you must ( ... ) to the response to process the incoming data.",
      options: [".then()", ".subscribe()", ".await()"],
      correctAnswer: ".subscribe()",
    },
    {
      category: "Django Routing",
      hint: "Hint: This file acts like a switchboard for incoming requests.",
      question:
        "In Django, the `api/( ... ).py` file directs an incoming URL to the correct view function.",
      options: ["views", "urls", "settings"],
      correctAnswer: "urls",
    },
    {
      category: "Django Views",
      hint: "Hint: This is the standard way to send data back to a REST client.",
      question:
        "In most Django API views, the response is wrapped in a ( ... ) object to send data in JSON format.",
      options: ["HttpResponse", "TemplateResponse", "JsonResponse"],
      correctAnswer: "JsonResponse",
    },
    {
      category: "File Downloads",
      hint: "Hint: This special header tells the browser to save a file instead of displaying it.",
      question:
        "For file downloads, Django sets the `( ... )` header in the HttpResponse.",
      options: ["`Content-Type`", "`Content-Disposition`", "`File-Name`"],
      correctAnswer: "`Content-Disposition`",
    },
    {
      category: "File Downloads",
      hint: "Hint: It's a more fundamental response type used for binary data.",
      question:
        "When sending a file, Django uses a generic ( ... ) instead of a JsonResponse.",
      options: ["HttpResponse", "FileResponse", "DataResponse"],
      correctAnswer: "HttpResponse",
    },
    {
      category: "Ionic Architecture",
      hint: "Hint: These specialized classes handle external communication, not the UI pages.",
      question:
        "In the Ionic app, API calls are encapsulated within Angular ( ... ) files.",
      options: ["Pages", "Modules", "Services"],
      correctAnswer: "Services",
    },
    {
      category: "Observer Pattern",
      hint: "Hint: It's the general software design principle behind reactive programming.",
      question:
        "The `subscribe` mechanism is an implementation of the famous ( ... ) Pattern.",
      options: ["Factory", "Singleton", "Observer"],
      correctAnswer: "Observer",
    },
    {
      category: "RxJS",
      hint: "Hint: This powerful library is what Angular uses for reactive programming.",
      question:
        "In Angular, asynchronous operations are managed using the ( ... ) library.",
      options: ["jQuery", "RxJS", "Axios"],
      correctAnswer: "RxJS",
    },
    {
      category: "RxJS",
      hint: "Hint: An HTTP request in Angular returns this 'potential' stream of data.",
      question:
        "An Angular `HttpClient` method returns an ( ... ), which is a stream of future data.",
      options: ["Promise", "Observable", "Callback"],
      correctAnswer: "Observable",
    },
    {
      category: "Observer Pattern",
      hint: "Hint: This is the source of the events or data you are interested in.",
      question:
        "In the Observer pattern, the object that emits data is called the Subject or the ( ... ).",
      options: ["Observer", "Observable", "Subscriber"],
      correctAnswer: "Observable",
    },
    {
      category: "Observer Pattern",
      hint: "Hint: This is the one that is waiting for notifications.",
      question:
        "In the Observer pattern, the object that listens for data is called the ( ... ).",
      options: ["Notifier", "Publisher", "Observer"],
      correctAnswer: "Observer",
    },
    {
      category: "Asynchronous",
      hint: "Hint: This programming style is essential for UIs that don't freeze.",
      question:
        "Using `subscribe` allows for ( ... ) programming, keeping the user interface responsive.",
      options: ["reactive", "procedural", "synchronous"],
      correctAnswer: "reactive",
    },
    {
      category: "Ionic/Django",
      hint: "Hint: One side asks, the other side answers.",
      question:
        "The communication pattern between Ionic and Django is that Ionic ( ... ) and Django responds.",
      options: ["listens", "initiates", "waits"],
      correctAnswer: "initiates",
    },
    {
      category: "Django Flow",
      hint: "Hint: It's the function that first receives the request object from the router.",
      question:
        "After the URL router, a request in Django is passed to a ( ... ) function.",
      options: ["model", "service", "view"],
      correctAnswer: "view",
    },
    {
      category: "Django Flow",
      hint: "Hint: This is where the main business logic, like database queries, resides.",
      question:
        "A Django view typically delegates the main workload to a ( ... ) layer.",
      options: ["template", "service", "middleware"],
      correctAnswer: "service",
    },
    {
      category: "HTTP",
      hint: "Hint: This is the 'language' or set of rules for communication between the client and server.",
      question:
        "The dialogue between Ionic and Django primarily uses the ( ... ) protocol.",
      options: ["FTP", "WebSocket", "HTTP"],
      correctAnswer: "HTTP",
    },
    {
      category: "HttpClient",
      hint: "Hint: Use this method when you need to send data to create a new item.",
      question:
        "To create a new folder, the Ionic service would call `this.http.( ... )`.",
      options: ["get()", "post()", "delete()"],
      correctAnswer: "post()",
    },
    {
      category: "HttpClient",
      hint: "Hint: Use this method when you need to replace an existing item completely.",
      question:
        "To update a user's profile entirely, the Ionic service would call `this.http.( ... )`.",
      options: ["patch()", "put()", "update()"],
      correctAnswer: "put()",
    },
    {
      category: "Backend Tech",
      hint: "Hint: This technology is often used in event-driven backends for message queuing.",
      question:
        "In complex backends, a service might subscribe to a message queue like ( ... ) or Kafka.",
      options: ["Redis", "RabbitMQ", "PostgreSQL"],
      correctAnswer: "RabbitMQ",
    },
    {
      category: "Mobile Native",
      hint: "Hint: This is Apple's framework for reactive programming in iOS apps.",
      question:
        "For native iOS development, the equivalent reactive framework to RxJS is called ( ... ).",
      options: ["RxSwift", "Combine", "Flow"],
      correctAnswer: "Combine",
    },
    {
      category: "Mobile Native",
      hint: "Hint: This is the reactive programming solution for modern Android development.",
      question:
        "For native Android development, developers use ( ... ) for reactive data streams.",
      options: ["Java Streams", "Coroutines", "Kotlin Flows"],
      correctAnswer: "Kotlin Flows",
    },
    {
      category: "Promises",
      hint: "Hint: This is an older, simpler way to handle a single future event in JavaScript.",
      question:
        "Conceptually similar to `subscribe` for a single value, a JavaScript `Promise` uses the `( ... )` method.",
      options: [".then()", ".on()", ".catch()"],
      correctAnswer: ".then()",
    },
    {
      category: "JSON",
      hint: "Hint: It's the universal data format for web APIs.",
      question:
        "A `JsonResponse` from Django ensures the data is in the ( ... ) format that the client expects.",
      options: ["XML", "HTML", "JSON"],
      correctAnswer: "JSON",
    },
    {
      category: "Django Responses",
      hint: "Hint: This indicates if the request was successful, failed, or something else.",
      question:
        "A `JsonResponse` contains the data and typically a ( ... ) code, like 200 for OK or 404 for Not Found.",
      options: ["status", "response", "header"],
      correctAnswer: "status",
    },
    {
      category: "Architecture",
      hint: "Hint: The code for fetching data is kept separate from the code for displaying it.",
      question:
        "Placing API calls in services promotes a clean separation of ( ... ).",
      options: ["code", "concerns", "files"],
      correctAnswer: "concerns",
    },
    {
      category: "RxJS",
      hint: "Hint: An `Observable` is often described as a lazy push-based collection.",
      question:
        "An `Observable` is a stream of data that can be emitted over ( ... ).",
      options: ["time", "a single call", "a function"],
      correctAnswer: "time",
    },
    {
      category: "Ionic/Django",
      hint: "Hint: The frontend component initiates the call, but it's the specialized class that does the work.",
      question:
        "An Ionic page calls a method in a ( ... ), which in turn calls the Django API.",
      options: ["service", "component", "module"],
      correctAnswer: "service",
    },
    {
      category: "Error Handling",
      hint: "Hint: It's how you handle when a request fails.",
      question:
        "The `subscribe` method can take a second function as an argument to handle ( ... ).",
      options: ["successes", "errors", "timeouts"],
      correctAnswer: "errors",
    },
    {
      category: "Oracle DB",
      hint: "Hint: These are the fundamental structures for storing data in rows and columns.",
      question:
        "The core structures that hold data like users, notes, and folders are called ( ... ).",
      options: ["Views", "Tables", "Indexes"],
      correctAnswer: "Tables",
    },
    {
      category: "Oracle DB",
      hint: "Hint: This object generates unique, sequential numbers, often for primary keys.",
      question:
        "To automatically generate unique IDs for new records, Oracle uses a ( ... ).",
      options: ["Sequence", "Trigger", "Function"],
      correctAnswer: "Sequence",
    },
    {
      category: "PL/SQL",
      hint: "Hint: These are named blocks of code for performing actions like INSERT, UPDATE, or DELETE.",
      question:
        "Logic that modifies data is encapsulated in ( ... ) Procedures.",
      options: ["Stored", "Anonymous", "Function"],
      correctAnswer: "Stored",
    },
    {
      category: "PL/SQL",
      hint: "Hint: This type of PL/SQL block is similar to a procedure but must return a value.",
      question:
        "A named PL/SQL block that is used for queries and must return a value is a ( ... ).",
      options: ["Package", "Trigger", "Function"],
      correctAnswer: "Function",
    },
    {
      category: "Oracle DB",
      hint: "Hint: This object automatically executes in response to an event like an INSERT on a table.",
      question:
        "A ( ... ) is a special procedure that runs automatically when a data modification event occurs.",
      options: ["Trigger", "Constraint", "View"],
      correctAnswer: "Trigger",
    },
    {
      category: "PL/SQL",
      hint: "Hint: A PL/SQL block that is executed only once at the time it is processed.",
      question:
        "For one-time setup tasks like inserting initial data, a/an ( ... ) PL/SQL block is used.",
      options: ["Anonymous", "Named", "Trigger"],
      correctAnswer: "Anonymous",
    },
    {
      category: "Oracle Data Types",
      hint: "Hint: This data type is ideal for storing large, unstructured binary data like images or PDFs.",
      question:
        "To store the binary content of a file directly in the database, the ( ... ) data type is used.",
      options: ["CLOB", "VARCHAR2", "BLOB"],
      correctAnswer: "BLOB",
    },
    {
      category: "Oracle Data Types",
      hint: "Hint: This date type is crucial for global applications because it includes time zone information.",
      question:
        "For handling dates and times across different regions, ( ... ) is the appropriate data type.",
      options: ["DATE", "TIMESTAMP", "TIMESTAMP WITH TIME ZONE"],
      correctAnswer: "TIMESTAMP WITH TIME ZONE",
    },
    {
      category: "DB Constraints",
      hint: "Hint: This rule on a foreign key will automatically delete child rows when the parent row is deleted.",
      question:
        "The `( ... )` rule on a foreign key ensures that deleting a folder also deletes all its notes.",
      options: ["ON DELETE SET NULL", "ON DELETE CASCADE", "ON DELETE PROTECT"],
      correctAnswer: "ON DELETE CASCADE",
    },
    {
      category: "DB Constraints",
      hint: "Hint: This type of rule enforces specific, custom business logic at the data level.",
      question:
        "A ( ... ) constraint can enforce a rule like 'a folder must belong to a user OR a space, but not both'.",
      options: ["UNIQUE", "CHECK", "PRIMARY KEY"],
      correctAnswer: "CHECK",
    },
    {
      category: "PL/SQL Cursors",
      hint: "Hint: This is a pointer to the result set of a query, allowing an application to process rows one by one.",
      question:
        "PL/SQL functions return a `SYS_REFCURSOR`, which is a flexible type of ( ... ) for query results.",
      options: ["Table", "View", "Cursor"],
      correctAnswer: "Cursor",
    },
    {
      category: "SQL Joins",
      hint: "Hint: This type of join returns all rows from the first table, even if there are no matches in the second.",
      question:
        "To list all folders, including those that are empty, you would use a ( ... ) JOIN.",
      options: ["INNER", "FULL", "LEFT"],
      correctAnswer: "LEFT",
    },
    {
      category: "DB Transactions",
      hint: "Hint: This command saves all changes, making them permanent.",
      question:
        "To save all changes in a transaction permanently, you issue the ( ... ) command.",
      options: ["SAVE", "COMMIT", "END"],
      correctAnswer: "COMMIT",
    },
    {
      category: "DB Transactions",
      hint: "Hint: This command undoes all changes made during a transaction if an error occurs.",
      question:
        "Inside an `EXCEPTION` block, a ( ... ) is typically executed to prevent an inconsistent data state.",
      options: ["ROLLBACK", "REVERT", "UNDO"],
      correctAnswer: "ROLLBACK",
    },
    {
      category: "DB Auditing",
      hint: "Hint: This table is specifically designed to record a history of operations like INSERT, UPDATE, and DELETE.",
      question: "A central component for traceability is the ( ... ) table.",
      options: ["UserLog", "HistoryLog", "AuditLog"],
      correctAnswer: "AuditLog",
    },
    {
      category: "PL/SQL",
      hint: "Hint: This command allows you to throw a specific, user-defined error from within your code.",
      question:
        "To provide a clear error message to the client application, you can use ( ... ).",
      options: ["RAISE_APPLICATION_ERROR", "THROW_EXCEPTION", "CREATE_ERROR"],
      correctAnswer: "RAISE_APPLICATION_ERROR",
    },
    {
      category: "Oracle DB",
      hint: "Hint: This object improves the speed of data retrieval operations, much like an index in a book.",
      question:
        "To speed up queries, you create an ( ... ) on one or more columns.",
      options: ["Index", "Sequence", "View"],
      correctAnswer: "Index",
    },
    {
      category: "Oracle DB",
      hint: "Hint: Small tables used to standardize repeating values, like 'Pending' or 'Completed'.",
      question:
        "To avoid data redundancy, values like task statuses are stored in ( ... ) tables.",
      options: ["Main", "Junction", "Catalog"],
      correctAnswer: "Catalog",
    },
    {
      category: "Oracle Data Types",
      hint: "Hint: Used for variable-length text, specifying CHAR ensures proper support for multi-byte characters.",
      question:
        "The `( ... )` data type is used for text fields like names and descriptions.",
      options: ["VARCHAR2(n CHAR)", "STRING", "TEXT"],
      correctAnswer: "VARCHAR2(n CHAR)",
    },
    {
      category: "Oracle DB",
      hint: "Hint: This ensures no numbers are skipped if the database restarts, at a small performance cost.",
      question:
        "The ( ... ) clause on a sequence guarantees no numbers will be lost.",
      options: ["NOCYCLE", "NOCACHE", "NOORDER"],
      correctAnswer: "NOCACHE",
    },
    {
      category: "PL/SQL Naming",
      hint: "Hint: The convention of starting procedure names with a specific prefix, like 'prc_'.",
      question:
        "Encapsulating DML logic in procedures creates a 'database ( ... )'.",
      options: ["Interface", "API", "Gateway"],
      correctAnswer: "API",
    },
    {
      category: "DB Constraints",
      hint: "Hint: A rule that links one table to another, ensuring data validity.",
      question:
        "A ( ... ) Key constraint is used to establish a relationship between two tables.",
      options: ["PRIMARY", "UNIQUE", "FOREIGN"],
      correctAnswer: "FOREIGN",
    },
    {
      category: "PL/SQL Error Handling",
      hint: "Hint: These special variables capture the details of a database error within an exception block.",
      question:
        "Inside an EXCEPTION block, you can use ( ... ) to get the specific error message.",
      options: ["SQLCODE", "SQLERRM", "ERROR_MSG"],
      correctAnswer: "SQLERRM",
    },
    {
      category: "DB Design",
      hint: "Hint: The process of reducing data redundancy and improving data integrity.",
      question:
        "Using catalog tables to store repeating values is a form of data ( ... ).",
      options: ["Duplication", "Normalization", "Aggregation"],
      correctAnswer: "Normalization",
    },
    {
      category: "Oracle Data Types",
      hint: "Hint: Used for storing very long strings of text that won't fit in a standard text field.",
      question:
        "For storing long text like messages or log entries, the ( ... ) data type is appropriate.",
      options: ["BLOB", "CLOB", "LONGTEXT"],
      correctAnswer: "CLOB",
    },
    {
      category: "SQL Joins",
      hint: "Hint: This is the most common type of join, returning only rows that have a match in both tables.",
      question:
        "To combine rows from two tables based on a related column, you use a ( ... ) clause.",
      options: ["COMBINE", "MERGE", "JOIN"],
      correctAnswer: "JOIN",
    },
    {
      category: "DB Transactions",
      hint: "Hint: A sequence of database operations that are executed as a single logical unit.",
      question:
        "A ( ... ) ensures that a block of operations either all succeed or all fail together.",
      options: ["Transaction", "Procedure", "Session"],
      correctAnswer: "Transaction",
    },
    {
      category: "Oracle DB",
      hint: "Hint: A trigger that fires just before a row is modified.",
      question:
        "To automatically set an `updated_at` timestamp, you can use a `( ... ) UPDATE` trigger.",
      options: ["BEFORE", "AFTER", "INSTEAD OF"],
      correctAnswer: "BEFORE",
    },
    {
      category: "DB Constraints",
      hint: "Hint: This rule ensures that every value in a column is different from all other values.",
      question:
        "A ( ... ) constraint on an email column prevents duplicate user registrations.",
      options: ["CHECK", "UNIQUE", "NOT NULL"],
      correctAnswer: "UNIQUE",
    },
    {
      category: "DB Constraints",
      hint: "Hint: This rule on a foreign key will change a field to empty if the referenced parent row is deleted.",
      question:
        "The `( ... )` rule is useful when deleting a user who invited others, without deleting the invitees.",
      options: [
        "ON DELETE SET NULL",
        "ON DELETE CASCADE",
        "ON DELETE RESTRICT",
      ],
      correctAnswer: "ON DELETE SET NULL",
    },
  ],
};
