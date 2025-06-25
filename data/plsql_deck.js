/* data\plsql_deck.js */
const plsqlDeckData = {
  id: "plsql_deck",
  name: "PL/SQL Fundamentals",
  description:
    "Conceptos clave, sintaxis y mejores prácticas para el desarrollo en PL/SQL de Oracle.",
  useImages: false, // This deck does not use images
  isAiGenerated: false,
  language: "sql", // Specify language for syntax highlighting
  cards: [
    {
      category: "Package Structure",
      hint: "Hint: It acts as the public interface or 'contract' of the package.",
      question:
        "Which part of a PL/SQL package declares the public elements accessible by other programs?",
      options: ["Package Body", "Package Specification", "Anonymous Block"],
      correctAnswer: "Package Specification",
      codeSnippet:
        "PACKAGE XXSBL_MOB_UTIL_PKG IS\n  -- Public procedures and functions are declared here\n  PROCEDURE GET_ORDER_DETAILS(...);\nEND XXSBL_MOB_UTIL_PKG;",
    },
    {
      category: "Package Structure",
      hint: "Hint: It contains the actual implementation and private logic.",
      question:
        "Where is the detailed PL/SQL code for procedures and functions implemented?",
      options: ["Specification", "Header", "Body"],
      correctAnswer: "Body",
      codeSnippet:
        "PACKAGE BODY XXSBL_MOB_UTIL_PKG IS\n  -- Private helper function\n  FUNCTION is_valid(...) RETURN BOOLEAN IS ...\n\n  -- Public procedure implementation\n  PROCEDURE GET_ORDER_DETAILS(...) IS\n  BEGIN\n    -- Logic goes here\n  END GET_ORDER_DETAILS;\nEND XXSBL_MOB_UTIL_PKG;",
    },
    {
      category: "Documentation",
      hint: "Hint: Used to describe a parameter in documentation.",
      question:
        "In `/*# @param P_ITEM_ID ... */`, what is the purpose of the `@param` tag?",
      options: [
        "To define a variable",
        "To create a parameter",
        "To document a parameter for tools",
      ],
      correctAnswer: "To document a parameter for tools",
      codeSnippet:
        "/*#\n * @param P_ITEM_ID The unique identifier for the item.\n * @param P_QUANTITY The amount of the item.\n */\nPROCEDURE ADD_ITEM(P_ITEM_ID IN NUMBER, P_QUANTITY IN NUMBER);",
    },
    {
      category: "Data Types",
      hint: "Hint: It's used for large text data, like a JSON response.",
      question:
        "Which data type is used to handle very large strings, such as a full API response?",
      options: ["VARCHAR2", "CLOB", "BLOB"],
      correctAnswer: "CLOB",
      codeSnippet:
        "PROCEDURE LOGIN_VALIDATE(\n  P_USERNAME IN VARCHAR2,\n  P_RESPONSE OUT CLOB -- Used for potentially large JSON output\n);",
    },
    {
      category: "Custom Types",
      hint: "Hint: It's like a blueprint for an object, grouping related fields.",
      question: "What does `TYPE ... IS RECORD` define in PL/SQL?",
      options: [
        "A database table",
        "A collection of records",
        "A structured data type",
      ],
      correctAnswer: "A structured data type",
      codeSnippet:
        "TYPE ITEM_REC_TYPE IS RECORD (\n  ITEM_ID    NUMBER,\n  QUANTITY   NUMBER,\n  UOM        VARCHAR2(240)\n);",
    },
    {
      category: "Custom Types",
      hint: "Hint: It's a collection of structured objects, like a list or array.",
      question: "What does `TYPE ... IS TABLE OF <RECORD_TYPE>` create?",
      options: [
        "A single record",
        "An array of records",
        "A physical database table",
      ],
      correctAnswer: "An array of records",
      codeSnippet:
        "-- First, define the record\nTYPE ITEM_REC_TYPE IS RECORD (...);\n\n-- Then, define a table of that record type\nTYPE ITEM_TBL_TYPE IS TABLE OF ITEM_REC_TYPE\n  INDEX BY BINARY_INTEGER;",
    },
    {
      category: "Custom Types",
      hint: "Hint: Where must custom types be declared to be used by external applications?",
      question:
        "To be used as parameters in public procedures, where must a custom RECORD or TABLE type be declared?",
      options: [
        "In the Package Body",
        "In the Package Specification",
        "In a separate script",
      ],
      correctAnswer: "In the Package Specification",
      codeSnippet:
        "PACKAGE my_api_spec IS\n  -- Publicly visible type definitions\n  TYPE my_record IS RECORD (...);\n  TYPE my_table IS TABLE OF my_record;\n\n  -- Procedure that uses the public type\n  PROCEDURE process_data(p_items IN my_table);\nEND my_api_spec;",
    },
    {
      category: "Cursors",
      hint: "Hint: A pointer to a result set, used to return query results to a client app.",
      question:
        "Which cursor type is most flexible for returning dynamic query results from a procedure?",
      options: ["Static Cursor", "Implicit Cursor", "SYS_REFCURSOR"],
      correctAnswer: "SYS_REFCURSOR",
      codeSnippet:
        "PROCEDURE GET_DATA(\n  P_RESULTS OUT SYS_REFCURSOR\n) IS\nBEGIN\n  OPEN P_RESULTS FOR\n    SELECT * FROM employees;\nEND;",
    },
    {
      category: "Cursors",
      hint: "Hint: It associates a SELECT statement with a cursor variable at runtime.",
      question:
        "Which command is used to assign a query to a `SYS_REFCURSOR` variable?",
      options: ["FETCH ... INTO", "SELECT ... INTO", "OPEN ... FOR"],
      correctAnswer: "OPEN ... FOR",
      codeSnippet:
        "DECLARE\n  l_cursor SYS_REFCURSOR;\n  l_query  VARCHAR2(200) := 'SELECT * FROM departments';\nBEGIN\n  -- Associate the query string with the cursor\n  OPEN l_cursor FOR l_query;\n  ...\nEND;",
    },
    {
      category: "Cursors",
      hint: "Hint: A query that is defined at compile time and given a name.",
      question:
        "A cursor declared with a name and a fixed `SELECT` statement in the `DECLARE` section is a/an ( ... ) cursor.",
      options: ["Dynamic", "Explicit", "Anonymous"],
      correctAnswer: "Explicit",
      codeSnippet:
        "DECLARE\n  -- The query is fixed when the code is compiled\n  CURSOR active_users_cur IS\n    SELECT user_name FROM users WHERE status = 'ACTIVE';\nBEGIN\n  ...\nEND;",
    },
    {
      category: "Control Flow",
      hint: "Hint: The standard way to iterate over rows from a cursor.",
      question:
        "Which loop structure is best for processing each row returned by a cursor?",
      options: ["WHILE LOOP", "Basic LOOP", "FOR ... IN ... LOOP"],
      correctAnswer: "FOR ... IN ... LOOP",
      codeSnippet:
        "BEGIN\n  FOR user_rec IN (SELECT user_id, user_name FROM users) LOOP\n    -- This code runs for each user found\n    DBMS_OUTPUT.PUT_LINE('Processing user: ' || user_rec.user_name);\n  END LOOP;\nEND;",
    },
    {
      category: "Control Flow",
      hint: "Hint: The fundamental structure for handling runtime errors.",
      question:
        "Which PL/SQL block structure is used for structured error handling?",
      options: ["IF/THEN/ELSE", "TRY/CATCH", "BEGIN/EXCEPTION/END"],
      correctAnswer: "BEGIN/EXCEPTION/END",
      codeSnippet:
        "BEGIN\n  -- Risky operation\n  l_value := 1 / 0;\nEXCEPTION\n  WHEN ZERO_DIVIDE THEN\n    -- Handle the specific error\n    log_error('Division by zero occurred.');\nEND;",
    },
    {
      category: "Subprograms",
      hint: "Hint: It performs an action but does not have to return a value.",
      question:
        "A named PL/SQL block designed to perform an action (like deleting a record) is called a ( ... ).",
      options: ["Function", "Procedure", "Trigger"],
      correctAnswer: "Procedure",
      codeSnippet:
        "PROCEDURE delete_line (p_quote_line_id IN NUMBER)\nIS\nBEGIN\n  DELETE FROM quote_lines\n  WHERE quote_line_id = p_quote_line_id;\n  COMMIT;\nEND delete_line;",
    },
    {
      category: "Subprograms",
      hint: "Hint: It must return a value and can be used in SQL queries.",
      question:
        "A named PL/SQL block that must compute and `RETURN` a value is called a ( ... ).",
      options: ["Procedure", "Function", "View"],
      correctAnswer: "Function",
      codeSnippet:
        "FUNCTION get_stock_count (p_item_id IN NUMBER) RETURN NUMBER\nAS\n  o_stock_count NUMBER := 0;\nBEGIN\n  SELECT quantity_on_hand INTO o_stock_count\n  FROM inventory WHERE item_id = p_item_id;\n\n  RETURN o_stock_count;\nEND get_stock_count;",
    },
    {
      category: "Joins",
      hint: "Hint: The (+) symbol is an old syntax for this type of join.",
      question:
        "In Oracle's old syntax, what does the `(+)` operator signify in a `WHERE` clause?",
      options: ["Inner Join", "Outer Join", "Cross Join"],
      correctAnswer: "Outer Join",
      codeSnippet:
        "-- Old syntax for LEFT OUTER JOIN\nSELECT e.name, d.name\nFROM employees e, departments d\nWHERE e.department_id = d.department_id (+);",
    },
    {
      category: "Aliases",
      hint: "Hint: It makes queries shorter and easier to read.",
      question:
        "In `FROM ra_customer_trx_all trx`, what is the purpose of `trx`?",
      options: [
        "It's a data type",
        "It's a table alias",
        "It's a required keyword",
      ],
      correctAnswer: "It's a table alias",
      codeSnippet:
        "SELECT\n  ord.order_number, -- Using alias 'ord'\n  cust.customer_name -- Using alias 'cust'\nFROM\n  oe_order_headers_all ord,\n  hz_cust_accounts cust\nWHERE\n  ord.sold_to_org_id = cust.cust_account_id;",
    },
    {
      category: "Aliases",
      hint: "Hint: It gives a new, more readable name to a column in the result set.",
      question:
        "What is the purpose of `AS PAYMENT_NUMBER` in `SELECT rec.receipt_number AS PAYMENT_NUMBER`?",
      options: [
        "To change the data type",
        "To create a column alias",
        "To filter the results",
      ],
      correctAnswer: "To create a column alias",
      codeSnippet:
        "SELECT\n  h.header_id AS OrderId,\n  h.order_number AS OrderNumber,\n  h.ordered_date AS OrderDate\nFROM oe_order_headers_all h;",
    },
    {
      category: "Keywords",
      hint: "Hint: It's used to introduce the implementation section of a block.",
      question:
        "The keyword `AS` (or `IS`) is used to separate the signature of a package or procedure from its ( ... ).",
      options: ["Parameters", "Name", "Implementation Block"],
      correctAnswer: "Implementation Block",
      codeSnippet:
        "PACKAGE BODY my_package AS\n\n  -- Implementation starts here\n  FUNCTION my_func RETURN NUMBER IS\n  BEGIN\n    RETURN 1;\n  END my_func;\n\nEND my_package;",
    },
    {
      category: "Parameters",
      hint: "Hint: The parameter's value is passed into the procedure.",
      question: "What does the `IN` mode mean for a procedure parameter?",
      options: [
        "The procedure can write to it",
        "It is read-only inside the procedure",
        "It is both readable and writable",
      ],
      correctAnswer: "It is read-only inside the procedure",
      codeSnippet:
        "PROCEDURE print_message(\n  p_message IN VARCHAR2 -- This value cannot be changed inside\n)\nIS\nBEGIN\n  DBMS_OUTPUT.PUT_LINE(p_message);\nEND;",
    },
    {
      category: "Parameters",
      hint: "Hint: The procedure uses this to pass a value back to the caller.",
      question: "What is the purpose of an `OUT` parameter?",
      options: [
        "To receive a value from the caller",
        "To return a value to the caller",
        "To be ignored by the procedure",
      ],
      correctAnswer: "To return a value to the caller",
      codeSnippet:
        "PROCEDURE get_user_status(\n  p_user_id IN NUMBER,\n  p_status OUT VARCHAR2 -- The result is placed here\n)\nIS\nBEGIN\n  SELECT status INTO p_status\n  FROM users WHERE user_id = p_user_id;\nEND;",
    },
    {
      category: "Parameters",
      hint: "Hint: A parameter that can be both read from and written to.",
      question:
        "Which parameter mode allows a value to be passed in, modified, and passed back out?",
      options: ["IN", "OUT", "IN OUT"],
      correctAnswer: "IN OUT",
      codeSnippet:
        "PROCEDURE increment_counter(\n  p_counter IN OUT NUMBER\n)\nIS\nBEGIN\n  -- Read the incoming value and write a new one\n  p_counter := p_counter + 1;\nEND;",
    },
    {
      category: "Data Types",
      hint: "Hint: Used for standard numbers, like IDs or quantities.",
      question:
        "Which data type would you use for a customer ID or a product quantity?",
      options: ["VARCHAR2", "NUMBER", "BOOLEAN"],
      correctAnswer: "NUMBER",
      codeSnippet:
        "DECLARE\n  l_customer_id NUMBER := 101;\n  l_order_qty   NUMBER(5, 2) := 10.50;\nBEGIN\n  -- ...\nEND;",
    },
    {
      category: "Data Types",
      hint: "Hint: Used for true/false logic.",
      question:
        "A variable to hold the result of a logical check (like `is_active`) should be what data type?",
      options: ["NUMBER(1)", "CHAR(1)", "BOOLEAN"],
      correctAnswer: "BOOLEAN",
      codeSnippet:
        "DECLARE\n  l_is_user_valid BOOLEAN;\nBEGIN\n  l_is_user_valid := check_user_credentials('user', 'pass');\n  IF l_is_user_valid THEN\n    -- ...\n  END IF;\nEND;",
    },
    {
      category: "Transactions",
      hint: "Hint: Makes changes permanent.",
      question:
        "Which command must be executed to save changes made by `INSERT`, `UPDATE`, or `DELETE` statements?",
      options: ["SAVEPOINT", "COMMIT", "ROLLBACK"],
      correctAnswer: "COMMIT",
      codeSnippet:
        "BEGIN\n  UPDATE accounts SET balance = balance - 100 WHERE id = 1;\n  UPDATE accounts SET balance = balance + 100 WHERE id = 2;\n  COMMIT; -- Save both changes together\nEXCEPTION\n  WHEN OTHERS THEN\n    ROLLBACK; -- Undo changes if an error occurs\nEND;",
    },
    {
      category: "Transactions",
      hint: "Hint: Undoes changes made in the current transaction.",
      question:
        "If an error occurs during a multi-step operation, which command should be used to undo all previous steps?",
      options: ["COMMIT", "SAVE", "ROLLBACK"],
      correctAnswer: "ROLLBACK",
      codeSnippet:
        "BEGIN\n  -- step 1\n  INSERT INTO orders (...);\n  -- step 2 (fails)\n  INSERT INTO order_lines ('a', ...); -- Invalid data\nEXCEPTION\n  WHEN OTHERS THEN\n    -- The order and its lines should not be saved\n    ROLLBACK;\nEND;",
    },
    {
      category: "Error Handling",
      hint: "Hint: Raises a custom error with a specific number and message.",
      question:
        "Which command allows you to stop execution and return a custom error message to the client application?",
      options: [
        "RAISE_APPLICATION_ERROR",
        "THROW_EXCEPTION",
        "EXIT_WITH_ERROR",
      ],
      correctAnswer: "RAISE_APPLICATION_ERROR",
      codeSnippet:
        "IF user_credit < item_price THEN\n  -- Stop and send a specific error back to the application\n  RAISE_APPLICATION_ERROR(-20001, 'Insufficient credit.');\nEND IF;",
    },
    {
      category: "Joins",
      hint: "Hint: The most common join, returns only rows that match in both tables.",
      question:
        "Which type of join would you use to get a list of customers who have placed orders?",
      options: ["LEFT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
      correctAnswer: "INNER JOIN",
      codeSnippet:
        "SELECT c.customer_name, o.order_date\nFROM customers c\nINNER JOIN orders o ON c.customer_id = o.customer_id;",
    },
    {
      category: "Joins",
      hint: "Hint: Returns all rows from the left table, even if there's no match in the right table.",
      question:
        "To get a list of ALL customers and their orders (if any), which join should be used?",
      options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN"],
      correctAnswer: "LEFT JOIN",
      codeSnippet:
        "-- This will list all customers, even those with no orders.\nSELECT c.customer_name, o.order_number\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id;",
    },
    {
      category: "Error Handling",
      hint: "Hint: A special variable that holds the error code number.",
      question:
        "Inside an `EXCEPTION` block, which variable contains the numeric code of the error that occurred?",
      options: ["SQLCODE", "SQLERRM", "ERROR_CODE"],
      correctAnswer: "SQLCODE",
      codeSnippet:
        "EXCEPTION\n  WHEN OTHERS THEN\n    -- SQLCODE is the Oracle error number (e.g., -1 for unique constraint)\n    log_error('Error occurred: ' || SQLCODE);\nEND;",
    },
    {
      category: "Error Handling",
      hint: "Hint: A special variable that holds the error message text.",
      question:
        "Inside an `EXCEPTION` block, which variable contains the descriptive text of the error?",
      options: ["SQLMESSAGE", "SQLCODE", "SQLERRM"],
      correctAnswer: "SQLERRM",
      codeSnippet:
        "EXCEPTION\n  WHEN OTHERS THEN\n    -- SQLERRM is the full error message string\n    log_error('Error details: ' || SQLERRM);\nEND;",
    },
    {
      category: "Package Structure",
      hint: "Hint: This improves performance by loading the entire package into memory at once.",
      question:
        "What is a major performance benefit of grouping related logic into a PL/SQL package?",
      options: [
        "It uses less disk space",
        "It reduces network traffic and parsing",
        "It automatically creates indexes",
      ],
      correctAnswer: "It reduces network traffic and parsing",
      codeSnippet:
        "-- Calling multiple procedures in a pre-loaded package\n-- is faster than calling separate external procedures.\nBEGIN\n  XXSBL_MOB_UTIL_PKG.VALIDATE_USER(...);\n  XXSBL_MOB_UTIL_PKG.GET_ORDER_DETAILS(...);\nEND;",
    },
    {
      category: "Package Structure",
      hint: "Hint: Procedures and variables defined only in this part are not visible to the outside world.",
      question:
        "How does a package `BODY` support information hiding and encapsulation?",
      options: [
        "By encrypting the source code",
        "By allowing the definition of private elements",
        "By requiring a special password",
      ],
      correctAnswer: "By allowing the definition of private elements",
      codeSnippet:
        "PACKAGE BODY my_package IS\n  -- This function is private and cannot be called from outside the package.\n  FUNCTION calculate_internal_discount(...) RETURN NUMBER IS\n  BEGIN\n    ...\n  END;\nEND my_package;",
    },
    {
      category: "Documentation",
      hint: "Hint: This annotation indicates the intended audience or access level.",
      question:
        "What does the `@rep:scope public` annotation typically signify?",
      options: [
        "The code is a report",
        "The code is public domain",
        "The element is intended for public use",
      ],
      correctAnswer: "The element is intended for public use",
      codeSnippet:
        "/*#\n * @rep:scope public\n * @rep:displayname Get User Roles\n */\nPROCEDURE GET_ROLES(p_user_id IN NUMBER);",
    },
    {
      category: "Documentation",
      hint: "Hint: This annotation describes the current status of the code in its development cycle.",
      question:
        "The annotation `@rep:lifecycle active` suggests that the code is...",
      options: [
        "Currently running on a server",
        "Actively maintained and not deprecated",
        "An interactive session",
      ],
      correctAnswer: "Actively maintained and not deprecated",
      codeSnippet:
        "/*#\n * @rep:lifecycle active\n * @rep:compatibility SBLE_V1\n */\nFUNCTION GET_AVAILTORESERV_STOCK(...) RETURN NUMBER;",
    },
    {
      category: "Data Types",
      hint: "Hint: Think about what it's storing: raw, unstructured data.",
      question:
        "While `CLOB` stores large text, what does the `BLOB` (Binary Large Object) data type store?",
      options: [
        "Only numbers",
        "XML documents",
        "Binary data like images or files",
      ],
      correctAnswer: "Binary data like images or files",
      codeSnippet:
        "CREATE TABLE file_storage (\n  file_id    NUMBER PRIMARY KEY,\n  file_name  VARCHAR2(100),\n  file_data  BLOB -- Stores the content of a PDF, JPG, etc.\n);",
    },
    {
      category: "Custom Types",
      hint: "Hint: This part of the syntax makes the collection work like an array with numeric keys.",
      question:
        "In `TYPE ... IS TABLE OF ... INDEX BY BINARY_INTEGER;`, what is the purpose of `INDEX BY BINARY_INTEGER`?",
      options: [
        "It creates a database index",
        "It defines the collection as an associative array",
        "It limits the table to integer data",
      ],
      correctAnswer: "It defines the collection as an associative array",
      codeSnippet:
        "DECLARE\n  TYPE t_name_list IS TABLE OF VARCHAR2(100)\n    INDEX BY BINARY_INTEGER;\n  v_names t_name_list;\nBEGIN\n  v_names(1) := 'John';\n  v_names(2) := 'Jane';\nEND;",
    },
    {
      category: "Custom Types",
      hint: "Hint: How do you access a specific field within a record variable?",
      question:
        "If `v_item` is a variable of `ITEM_REC_TYPE`, how do you access its `QUANTITY` field?",
      options: ["v_item('QUANTITY')", "v_item.QUANTITY", "QUANTITY(v_item)"],
      correctAnswer: "v_item.QUANTITY",
      codeSnippet:
        "DECLARE\n  v_item ITEM_REC_TYPE;\nBEGIN\n  v_item.ITEM_ID := 123;\n  v_item.QUANTITY := 10;\n  IF v_item.QUANTITY > 5 THEN\n    -- ...\n  END IF;\nEND;",
    },
    {
      category: "Cursors",
      hint: "Hint: It's the opposite of a static cursor whose query is fixed at compile time.",
      question:
        "A `SYS_REFCURSOR` is a form of ( ... ) cursor, because its query can be decided at runtime.",
      options: ["Dynamic", "Broken", "Implicit"],
      correctAnswer: "Dynamic",
      codeSnippet:
        "PROCEDURE get_report(p_type IN VARCHAR2, p_data OUT SYS_REFCURSOR) IS\n  l_query VARCHAR2(500);\nBEGIN\n  IF p_type = 'SALES' THEN\n    l_query := 'SELECT * FROM sales_view';\n  ELSE\n    l_query := 'SELECT * FROM inventory_view';\n  END IF;\n  OPEN p_data FOR l_query;\nEND;",
    },
    {
      category: "Control Flow",
      hint: "Hint: The final branch of a conditional structure that catches all other cases.",
      question:
        "In an `IF` statement, which block of code is executed if all preceding `IF` and `ELSIF` conditions are false?",
      options: ["ELSE", "END IF", "WHEN OTHERS"],
      correctAnswer: "ELSE",
      codeSnippet:
        "IF l_status = 'SHIPPED' THEN\n  -- Do A\nELSIF l_status = 'PENDING' THEN\n  -- Do B\nELSE\n  -- Do C for all other statuses\nEND IF;",
    },
    {
      category: "Control Flow",
      hint: "Hint: It is a 'catch-all' for any runtime error that wasn't handled specifically.",
      question:
        "What is the purpose of the `WHEN OTHERS` clause in an `EXCEPTION` block?",
      options: [
        "To handle successful completion",
        "To catch any error not previously specified",
        "To run when there is no data",
      ],
      correctAnswer: "To catch any error not previously specified",
      codeSnippet:
        "BEGIN\n  -- some operations\nEXCEPTION\n  WHEN NO_DATA_FOUND THEN\n    log_error('Specific: No data was found.');\n  WHEN OTHERS THEN\n    log_error('Generic: An unexpected error occurred: ' || SQLERRM);\nEND;",
    },
    {
      category: "Procedures vs. Functions",
      hint: "Hint: Can you use a procedure call as a value in a variable assignment?",
      question:
        "A key difference between a function and a procedure is that a function `RETURN`s a value and can be used in an ( ... ).",
      options: ["expression", "event", "index"],
      correctAnswer: "expression",
      codeSnippet:
        "DECLARE\n  l_stock NUMBER;\n  l_item_id NUMBER := 100;\nBEGIN\n  -- A function can be part of an assignment expression.\n  l_stock := GET_AVAILTORESERV_STOCK(l_item_id);\nEND;",
    },
    {
      category: "Procedures vs. Functions",
      hint: "Hint: Think about where you can use calculations or value-returning calls in SQL.",
      question:
        "Because a function returns a value, it can be called directly from a SQL ( ... ) statement.",
      options: ["COMMIT", "INSERT", "SELECT"],
      correctAnswer: "SELECT",
      codeSnippet:
        "-- Assuming GET_STOCK_COUNT is a function\nSELECT \n  product_name, \n  GET_STOCK_COUNT(product_id) AS current_stock\nFROM products;",
    },
    {
      category: "Joins",
      hint: "Hint: This is the modern, explicit ANSI syntax for joining tables.",
      question:
        "Which syntax is the modern, preferred way to write an `INNER JOIN`?",
      options: [
        "FROM table1, table2 WHERE t1.id = t2.id",
        "FROM table1 INNER JOIN table2 ON t1.id = t2.id",
        "FROM table1, table2 (+)",
      ],
      correctAnswer: "FROM table1 INNER JOIN table2 ON t1.id = t2.id",
      codeSnippet:
        "SELECT e.employee_name, d.department_name\nFROM employees e\nINNER JOIN departments d ON e.department_id = d.department_id;",
    },
    {
      category: "Joins",
      hint: "Hint: The old (+) syntax is equivalent to which modern join type?",
      question:
        "The old Oracle `(+)` syntax is used to create a/an ( ... ) join.",
      options: ["CROSS", "SELF", "OUTER"],
      correctAnswer: "OUTER",
      codeSnippet:
        "-- This old syntax...\nSELECT c.name, o.order_id\nFROM customers c, orders o\nWHERE c.id = o.customer_id (+);\n\n-- ...is equivalent to this modern syntax:\nSELECT c.name, o.order_id\nFROM customers c\nLEFT OUTER JOIN orders o ON c.id = o.customer_id;",
    },
    {
      category: "Aliases",
      hint: "Hint: Why are aliases crucial for APIs returning structured data?",
      question:
        "Why is aliasing columns (e.g., `SELECT c.id AS CustomerId`) particularly important for backend APIs?",
      options: [
        "It makes the query run faster",
        "It provides stable, predictable keys for the JSON response",
        "It is required by the database",
      ],
      correctAnswer:
        "It provides stable, predictable keys for the JSON response",
      codeSnippet:
        '-- The client app receives a JSON object like: \n-- { "OrderId": 123, "OrderDate": "2025-06-24" }\nSELECT \n  order_header_id AS "OrderId",\n  creation_date AS "OrderDate"\nFROM oe_order_headers_all;',
    },
    {
      category: "Keywords",
      hint: "Hint: These two keywords are interchangeable in this context.",
      question:
        "In a procedure or package definition, the keyword `IS` can always be replaced by ( ... ).",
      options: ["AS", "BEGIN", "DEFINE"],
      correctAnswer: "AS",
      codeSnippet:
        "-- These two procedure definitions are identical to PL/SQL.\nPROCEDURE my_proc_1 IS\nBEGIN\n  NULL;\nEND;\n\nPROCEDURE my_proc_2 AS\nBEGIN\n  NULL;\nEND;",
    },
    {
      category: "Package Structure",
      hint: "Hint: What is the main purpose of the public 'contract' of a package?",
      question:
        "The `PACKAGE SPECIFICATION` primarily serves as the ( ... ) for the database logic.",
      options: [
        "documentation",
        "implementation",
        "API (Application Programming Interface)",
      ],
      correctAnswer: "API (Application Programming Interface)",
      codeSnippet:
        "-- The SPECIFICATION defines the public API.\nPACKAGE BODY XXSBL_MOB_UTIL_PKG AS\n  -- The BODY provides the implementation of that API.\nEND;",
    },
    {
      category: "Data Types",
      hint: "Hint: A format that includes both date and time.",
      question:
        "Which data type is appropriate for storing a precise moment, such as `l_request_date`?",
      options: ["DATE", "TIMESTAMP", "TIME"],
      correctAnswer: "DATE",
      codeSnippet:
        "DECLARE\n  l_request_date DATE;\nBEGIN\n  -- SYSDATE returns the current database server date and time.\n  l_request_date := SYSDATE;\nEND;",
    },
    {
      category: "Data Types",
      hint: "Hint: This is the most common data type for variable-length strings.",
      question:
        "For storing a user's name or an API token, the standard data type to use is ( ... ).",
      options: ["CHAR", "VARCHAR2", "STRING"],
      correctAnswer: "VARCHAR2",
      codeSnippet:
        "PROCEDURE CREATE_USER (\n  P_USERNAME  IN VARCHAR2,\n  P_APITOKEN  IN VARCHAR2\n);",
    },
    {
      category: "Control Flow",
      hint: "Hint: Think about how you process a list of items.",
      question:
        "A `FOR` loop is ideal for iterating over the elements of a/an ( ... ).",
      options: ["single variable", "condition", "collection or cursor"],
      correctAnswer: "collection or cursor",
      codeSnippet:
        "DECLARE\n  TYPE t_list IS TABLE OF NUMBER;\n  v_numbers t_list := t_list(10, 20, 30);\nBEGIN\n  FOR i IN 1..v_numbers.COUNT LOOP\n    DBMS_OUTPUT.PUT_LINE(v_numbers(i));\n  END LOOP;\nEND;",
    },
    {
      category: "Procedures vs. Functions",
      hint: "Hint: One is designed for actions, the other for calculations.",
      question:
        "You would use a ( ... ) to delete a record, and a ( ... ) to calculate a value.",
      options: [
        "function, procedure",
        "procedure, function",
        "trigger, procedure",
      ],
      correctAnswer: "procedure, function",
      codeSnippet:
        "-- Action: Use a Procedure\nDELETE_LINE(p_quote_line_id => 123);\n\n-- Calculation: Use a Function\nl_price := GET_LINE_PRICE(p_item_id => 456);",
    },
    {
      category: "Cursors",
      hint: "Hint: This is the most common way to declare a named, static cursor.",
      question:
        "An `explicit` cursor is declared in the ( ... ) section of a PL/SQL block.",
      options: ["BEGIN", "EXCEPTION", "DECLARE"],
      correctAnswer: "DECLARE",
      codeSnippet:
        "DECLARE\n  -- Declaration of the cursor\n  CURSOR c_employees IS SELECT first_name FROM employees;\n  l_name employees.first_name%TYPE;\nBEGIN\n  OPEN c_employees;\n  FETCH c_employees INTO l_name;\n  CLOSE c_employees;\nEND;",
    },
    {
      category: "Control Flow",
      hint: "Hint: This structure allows for multiple mutually exclusive conditions.",
      question:
        "Which structure is best for checking multiple conditions in sequence, like `status = 'A'`, `status = 'B'`, or `status = 'C'`?",
      options: ["CASE statement", "IF / ELSIF / END IF", "Basic LOOP"],
      correctAnswer: "IF / ELSIF / END IF",
      codeSnippet:
        "IF user_level = 'ADMIN' THEN\n  -- Full access\nELSIF user_level = 'EDITOR' THEN\n  -- Write access\nELSIF user_level = 'VIEWER' THEN\n  -- Read-only access\nEND IF;",
    },
    {
      category: "Procedures vs. Functions",
      hint: "Hint: What is the main section where the logic of a subprogram resides?",
      question:
        "The core logic of both procedures and functions is placed between the `BEGIN` and `END`/`EXCEPTION` keywords in the ( ... ) section.",
      options: ["execution", "declaration", "header"],
      correctAnswer: "execution",
      codeSnippet:
        "FUNCTION my_func RETURN BOOLEAN IS\n  -- Declaration section\nBEGIN\n  -- Execution section (core logic)\n  RETURN TRUE;\nEXCEPTION\n  -- Exception section\n  WHEN OTHERS THEN RETURN FALSE;\nEND;",
    },
    {
      category: "Transactions",
      hint: "Hint: You make a change but want to undo it.",
      question:
        "If you `UPDATE` a row but then issue a `ROLLBACK` command, what happens to the change?",
      options: [
        "It is saved permanently",
        "It is undone",
        "It is saved temporarily",
      ],
      correctAnswer: "It is undone",
      codeSnippet:
        "BEGIN\n  -- Initial balance is 1000\n  UPDATE accounts SET balance = 900 WHERE id = 1;\n  -- At this point, balance is 900 in this session.\n\n  ROLLBACK;\n  -- After rollback, balance is 1000 again.\nEND;",
    },
    {
      category: "Error Handling",
      hint: "Hint: How do you access the error message from an exception?",
      question:
        "To get the descriptive error message inside a `WHEN OTHERS` block, you should use the ( ... ) variable.",
      options: ["SQLCODE", "ERROR_TEXT", "SQLERRM"],
      correctAnswer: "SQLERRM",
      codeSnippet:
        "EXCEPTION\n  WHEN OTHERS THEN\n    -- SQLERRM contains the error string, e.g., 'ORA-01403: no data found'\n    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);\nEND;",
    },
    {
      category: "Custom Types",
      hint: "Hint: It is a composite data type, like a simple class.",
      question: "A `RECORD` type is best described as a...",
      options: [
        "List of items",
        "Group of related fields treated as a single unit",
        "Pointer to a memory location",
      ],
      correctAnswer: "Group of related fields treated as a single unit",
      codeSnippet:
        "-- A record groups different data types into one logical unit.\nTYPE person_rec IS RECORD (\n  id     NUMBER,\n  name   VARCHAR2(100),\n  active BOOLEAN\n);",
    },
    {
      category: "Joins",
      hint: "Hint: What part of the join syntax specifies how the tables are related?",
      question:
        "In the modern `JOIN` syntax, the `ON` clause is used to specify the ( ... ).",
      options: ["columns to select", "join condition", "tables to use"],
      correctAnswer: "join condition",
      codeSnippet:
        "SELECT ...\nFROM employees e\nINNER JOIN departments d \n  ON e.department_id = d.department_id; -- This is the join condition",
    },
    {
      category: "Cursors",
      hint: "Hint: The `FOR ... IN` loop simplifies cursor handling.",
      question:
        "When using a `FOR ... IN cursor_name LOOP`, which steps are done automatically for you?",
      options: [
        "DECLARE, COMMIT, ROLLBACK",
        "OPEN, FETCH, CLOSE",
        "SELECT, UPDATE, DELETE",
      ],
      correctAnswer: "OPEN, FETCH, CLOSE",
      codeSnippet:
        "-- The FOR loop implicitly handles OPEN, FETCH, and CLOSE.\n-- This is much cleaner than doing it manually.\nBEGIN\n  FOR rec IN RETRIVE_CART_DTLS(...) LOOP\n    -- Logic for each row\n  END LOOP;\nEND;",
    },
    {
      category: "Package Structure",
      hint: "Hint: It's the public-facing part of the package.",
      question:
        "An application backend connects to the database and calls procedures defined in the package ( ... ).",
      options: ["header", "specification", "body"],
      correctAnswer: "specification",
      codeSnippet:
        "-- The backend code knows about this procedure because\n-- it's declared in the public specification.\nPROCEDURE CREATE_ORDER(p_customer_id IN NUMBER, ...);",
    },

    {
      category: "Control Structures",
      hint: "This is the standard structure for executing code blocks based on a set of logical evaluations.",
      question:
        "What is the primary structure in PL/SQL for making decisions and executing code conditionally?",
      options: [
        "LOOP ... END LOOP",
        "IF ... THEN ... ELSIF ... END IF",
        "CASE ... WHEN",
      ],
      correctAnswer: "IF ... THEN ... ELSIF ... END IF",
      codeSnippet:
        "IF P_APITOKEN = 'VALID_TOKEN' THEN\n  P_RESPONSE := 'Success';\nELSE\n  P_RESPONSE := 'Invalid API Token!!';\nEND IF;",
    },
    {
      category: "Error Handling",
      hint: "It serves as a universal catch-all within a BEGIN...END block to handle any runtime error that was not specifically anticipated.",
      question:
        "Which exception handler is used to trap any error that has not been explicitly handled elsewhere in a PL/SQL block?",
      options: ["WHEN NO_DATA_FOUND", "WHEN OTHERS", "WHEN ZERO_DIVIDE"],
      correctAnswer: "WHEN OTHERS",
      codeSnippet:
        "EXCEPTION\n  WHEN OTHERS THEN\n    P_MESSAGE_CODE := '400';\n    P_MESSAGE := 'An unexpected error occurred: ' || SQLERRM;",
    },
    {
      category: "Transaction Control",
      hint: "This command establishes a named marker within a transaction, allowing for a partial rollback of subsequent work.",
      question:
        "What command do you use to create a point within a transaction to which you can later revert?",
      options: ["COMMIT", "SAVEPOINT", "CHECKPOINT"],
      correctAnswer: "SAVEPOINT",
      codeSnippet:
        "UPDATE accounts SET balance = balance - 100 WHERE id = 1;\nSAVEPOINT before_update;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;",
    },
    {
      category: "Transaction Control",
      hint: "This command undoes all data changes made in the current transaction back to a previously defined marker.",
      question:
        "How do you undo a transaction only to a specific named marker without affecting prior changes?",
      options: ["ROLLBACK", "REVERT TRANSACTION", "ROLLBACK TO SAVEPOINT"],
      correctAnswer: "ROLLBACK TO SAVEPOINT",
      codeSnippet:
        "IF l_status = 'E' THEN\n  ROLLBACK TO before_update;\nEND IF;",
    },
    {
      category: "Transaction Control",
      hint: "This command finalizes the current transaction, making all changes to the data permanent and visible to other users.",
      question:
        "Which statement is used to permanently save all changes made during a transaction?",
      options: ["SAVE", "COMMIT", "END TRANSACTION"],
      correctAnswer: "COMMIT",
      codeSnippet:
        "INSERT INTO logs (log_message) VALUES ('Transaction successful');\nCOMMIT;",
    },
    {
      category: "Data Retrieval",
      hint: "This statement is used to retrieve data from exactly one row and place it into local variables.",
      question:
        "What is the standard syntax in PL/SQL to query a single row and assign its column values to variables?",
      options: ["FETCH ... INTO", "SELECT ... INTO", "GET ROW ... INTO"],
      correctAnswer: "SELECT ... INTO",
      codeSnippet:
        "SELECT first_name, last_name\n  INTO l_first_name, l_last_name\n  FROM employees\n  WHERE employee_id = 100;",
    },
    {
      category: "Data Retrieval",
      hint: "This special, single-row system table is used when you need to select a value without querying a real table.",
      question:
        "Which table do you select from to get the result of a function or expression, like SYSDATE?",
      options: ["SYSTEM", "DUAL", "TEMP"],
      correctAnswer: "DUAL",
      codeSnippet:
        "SELECT UTL_RAW.CAST_TO_VARCHAR2(UTL_ENCODE.BASE64_DECODE(l_raw))\n  INTO l_decoded_string\n  FROM DUAL;",
    },
    {
      category: "SQL Clauses",
      hint: "This clause is essential for filtering rows from a table based on one or more conditions.",
      question:
        "Which SQL clause is used to specify the criteria that rows must meet to be selected, updated, or deleted?",
      options: ["HAVING", "WHERE", "FILTER BY"],
      correctAnswer: "WHERE",
      codeSnippet:
        "SELECT product_name, price\n  FROM products\n  WHERE price < 50 AND category = 'Electronics';",
    },
    {
      category: "SQL Operators",
      hint: "This operator is used to join two or more character strings together to form a single string.",
      question:
        "What is the standard Oracle operator for string concatenation?",
      options: ["+", "&", "||"],
      correctAnswer: "||",
      codeSnippet: "l_full_name := l_first_name || ' ' || l_last_name;",
    },
    {
      category: "SQL Operators",
      hint: "This operator performs pattern matching on string data within a filtering clause.",
      question:
        "Which operator is used with wildcards (%) to search for a pattern in a text column?",
      options: ["MATCH", "LIKE", "CONTAINS"],
      correctAnswer: "LIKE",
      codeSnippet: "SELECT * FROM customers WHERE email LIKE '%@example.com';",
    },
    {
      category: "SQL Operators",
      hint: "This operator provides a shorthand for multiple OR conditions by checking for a value within a list of specified values.",
      question:
        "What operator is used to check if a value exists within a given set of values?",
      options: ["BETWEEN", "ANY", "IN"],
      correctAnswer: "IN",
      codeSnippet:
        "SELECT * FROM orders WHERE status IN ('PENDING', 'SHIPPED');",
    },
    {
      category: "SQL Operators",
      hint: "This logical operator is highly efficient for checking the existence of at least one row in a subquery.",
      question:
        "Which operator should you use to check if a subquery returns any rows, without needing the data itself?",
      options: ["EXISTS", "COUNT() > 0", "FIND"],
      correctAnswer: "EXISTS",
      codeSnippet:
        "SELECT c.customer_name\n  FROM customers c\n  WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
    },
    {
      category: "SQL Functions",
      hint: "This function evaluates an expression and, if it is null, returns a specified substitute value.",
      question:
        "What function allows you to replace a NULL value with a specific default value?",
      options: ["IFNULL", "COALESCE", "NVL"],
      correctAnswer: "NVL",
      codeSnippet:
        "SELECT product_name, NVL(on_hand_quantity, 0) FROM inventory;",
    },
    {
      category: "SQL Functions",
      hint: "This Oracle-specific function provides inline IF-THEN-ELSE logic, transforming a value based on a series of search-result pairs.",
      question:
        "Which function compares an expression to a series of values and returns a corresponding result?",
      options: ["CASE", "SWITCH", "DECODE"],
      correctAnswer: "DECODE",
      codeSnippet:
        "SELECT DECODE(status, 'A', 'Active', 'I', 'Inactive', 'Unknown') FROM user_accounts;",
    },
    {
      category: "Data Types",
      hint: "This attribute anchors a variable's data type to that of a specific database table column.",
      question:
        "How can you declare a variable that automatically inherits the data type of a table column?",
      options: ["AS TYPE", "%TYPE", "LIKE"],
      correctAnswer: "%TYPE",
      codeSnippet: "DECLARE\n  l_user_name FND_USER.USER_NAME%TYPE;",
    },
    {
      category: "Data Types",
      hint: "This attribute creates a record variable that has the same structure as a full row in a table or cursor.",
      question:
        "What attribute do you use to declare a record variable that can hold an entire row from a table?",
      options: ["%ROW", "%ROWTYPE", "%STRUCT"],
      correctAnswer: "%ROWTYPE",
      codeSnippet: "DECLARE\n  l_employee_rec employees%ROWTYPE;",
    },
    {
      category: "Custom Types",
      hint: "This construct defines a composite data type that groups several related fields, similar to a struct in other languages.",
      question:
        "What is the syntax for defining a custom, structured data type that groups related fields?",
      options: ["CREATE STRUCTURE", "TYPE ... IS RECORD", "DEFINE OBJECT"],
      correctAnswer: "TYPE ... IS RECORD",
      codeSnippet:
        "TYPE item_rec_type IS RECORD (\n  item_id   NUMBER,\n  quantity  NUMBER,\n  uom       VARCHAR2(240)\n);",
    },
    {
      category: "Custom Types",
      hint: "This construct defines a collection type, like an array, capable of holding multiple elements of another type.",
      question:
        "How do you create a collection type, such as a list of records, in PL/SQL?",
      options: ["CREATE ARRAY OF", "DEFINE LIST AS", "TYPE ... IS TABLE OF"],
      correctAnswer: "TYPE ... IS TABLE OF",
      codeSnippet:
        "TYPE item_tbl_type IS TABLE OF item_rec_type INDEX BY BINARY_INTEGER;",
    },
    {
      category: "Oracle EBS",
      hint: "This core procedure sets the application context, which is mandatory before calling most Oracle E-Business Suite APIs.",
      question:
        "In Oracle EBS, which procedure initializes the environment by setting the User ID, Responsibility ID, and Application ID?",
      options: [
        "MO_GLOBAL.INIT",
        "FND_GLOBAL.APPS_INITIALIZE",
        "FND_SECURITY.INITIALIZE",
      ],
      correctAnswer: "FND_GLOBAL.APPS_INITIALIZE",
      codeSnippet: "fnd_global.apps_initialize (ln_user_id, l_resp_id, 671);",
    },
    {
      category: "Oracle EBS",
      hint: "This procedure configures the session's data visibility to a specific organizational unit within a multi-organization environment.",
      question:
        "Which procedure sets the Multi-Org access control, enabling the session to see data for a specific operating unit?",
      options: [
        "SET_ORG_CONTEXT",
        "APPS_INITIALIZE.SET_ORG",
        "MO_GLOBAL.SET_POLICY_CONTEXT",
      ],
      correctAnswer: "MO_GLOBAL.SET_POLICY_CONTEXT",
      codeSnippet: "mo_global.set_policy_context('S', l_org_id);",
    },
    {
      category: "Set Operators",
      hint: "This operator combines the result sets of two queries, keeping all rows from both, including any duplicates.",
      question:
        "Which set operator is used to concatenate two result sets without removing duplicate rows?",
      options: ["UNION", "UNION ALL", "MERGE"],
      correctAnswer: "UNION ALL",
      codeSnippet:
        "SELECT employee_id FROM sales\nUNION ALL\nSELECT employee_id FROM marketing;",
    },
    {
      category: "Set Operators",
      hint: "This operator combines the result sets of two queries and then removes any duplicate rows from the final result.",
      question:
        "Which set operator returns a single, duplicate-free result set from two or more SELECT statements?",
      options: ["UNION", "UNION ALL", "INTERSECT"],
      correctAnswer: "UNION",
      codeSnippet:
        "SELECT product_sku FROM catalog_a\nUNION\nSELECT product_sku FROM catalog_b;",
    },
    {
      category: "Error Handling",
      hint: "This occurs when a SELECT...INTO statement is executed but the query does not return any rows.",
      question:
        "What predefined exception is raised when a SELECT...INTO statement fails to find a row?",
      options: ["TOO_MANY_ROWS", "ROW_NOT_FOUND", "NO_DATA_FOUND"],
      correctAnswer: "NO_DATA_FOUND",
      codeSnippet: "EXCEPTION\n  WHEN NO_DATA_FOUND THEN\n    RETURN NULL;",
    },
    {
      category: "Error Handling",
      hint: "This occurs when a SELECT...INTO statement is executed and the query returns more than one row.",
      question:
        "What predefined exception is raised when a SELECT...INTO statement returns multiple rows?",
      options: ["TOO_MANY_ROWS", "MULTIPLE_ROWS_FOUND", "DATA_OVERFLOW"],
      correctAnswer: "TOO_MANY_ROWS",
      codeSnippet:
        "EXCEPTION\n  WHEN TOO_MANY_ROWS THEN\n    RAISE_APPLICATION_ERROR(-20001, 'Ambiguous data found.');",
    },
    {
      category: "SQL Functions",
      hint: "This function provides the numeric error code associated with the most recent exception in the current session.",
      question:
        "Inside an EXCEPTION block, which function returns the numerical code for the error that was trapped?",
      options: ["SQLCODE", "ERR_CODE", "SQL_ERROR_NUM"],
      correctAnswer: "SQLCODE",
      codeSnippet:
        "EXCEPTION\n  WHEN OTHERS THEN\n    l_error_code := SQLCODE;",
    },
    {
      category: "SQL Functions",
      hint: "This function provides the descriptive error message associated with the current error code.",
      question:
        "Inside an EXCEPTION block, which function returns the text description of the current error?",
      options: ["SQLERR_TEXT", "ERROR_MESSAGE", "SQLERRM"],
      correctAnswer: "SQLERRM",
      codeSnippet:
        "EXCEPTION\n  WHEN OTHERS THEN\n    l_error_message := SQLERRM;",
    },
    {
      category: "Set Operators",
      hint: "This operator returns only the rows that are present in both of the query result sets.",
      question:
        "Which set operator is used to find the common rows between two result sets?",
      options: ["MINUS", "INTERSECT", "COMMON"],
      correctAnswer: "INTERSECT",
      codeSnippet:
        "SELECT student_id FROM math_club\nINTERSECT\nSELECT student_id FROM science_club;",
    },
    {
      category: "Set Operators",
      hint: "This operator takes the distinct rows from the first query and removes the ones that also appear in the second query's result set.",
      question:
        "Which set operator returns rows from the first query that do not exist in the second query?",
      options: ["MINUS", "DIFFERENCE", "EXCEPT"],
      correctAnswer: "MINUS",
      codeSnippet:
        "SELECT employee_id FROM all_staff\nMINUS\nSELECT employee_id FROM staff_on_leave;",
    },
    {
      category: "SQL Functions",
      hint: "This function converts all characters in a string to their uppercase equivalents, which is useful for case-insensitive comparisons.",
      question:
        "What is the standard SQL function for converting a string to all uppercase letters?",
      options: ["TO_UPPER", "UPPERCASE", "UPPER"],
      correctAnswer: "UPPER",
      codeSnippet: "SELECT * FROM users WHERE UPPER(username) = 'ADMIN';",
    },
    {
      category: "SQL Functions",
      hint: "When applied to a date value, this function removes the time portion, effectively setting it to midnight.",
      question:
        "Which function is used to get just the date part of a DATE or TIMESTAMP value, removing the time?",
      options: ["ROUND", "STRIP_TIME", "TRUNC"],
      correctAnswer: "TRUNC",
      codeSnippet:
        "SELECT * FROM user_logins WHERE TRUNC(login_time) = TRUNC(SYSDATE);",
    },
    {
      category: "SQL Functions",
      hint: "This function returns the current date and time from the database server.",
      question:
        "Which function should you call to get the current date and time of the database server?",
      options: ["NOW()", "CURRENT_TIMESTAMP", "SYSDATE"],
      correctAnswer: "SYSDATE",
      codeSnippet:
        "UPDATE orders SET ship_date = SYSDATE WHERE order_id = 123;",
    },
    {
      category: "PL/SQL Packages",
      hint: "This procedure, part of a standard Oracle package, is commonly used to print output for debugging purposes.",
      question:
        "What is the most common procedure used to display messages from a PL/SQL block in a client tool?",
      options: ["PRINT_LINE", "DBMS_OUTPUT.PUT_LINE", "CONSOLE.LOG"],
      correctAnswer: "DBMS_OUTPUT.PUT_LINE",
      codeSnippet:
        "BEGIN\n  DBMS_OUTPUT.PUT_LINE('Debug: Value of l_variable is ' || l_variable);\nEND;",
    },
    {
      category: "SQL Clauses",
      hint: "This keyword, used within a SELECT statement, removes duplicate rows to return a unique set of results.",
      question:
        "Which keyword is used to ensure that a query only returns unique rows?",
      options: ["UNIQUE", "DISTINCT", "SINGLE"],
      correctAnswer: "DISTINCT",
      codeSnippet: "SELECT DISTINCT status FROM tasks;",
    },
    {
      category: "Procedure Definition",
      hint: "This parameter mode is the default and is used to pass a value into a subprogram.",
      question:
        "Which parameter mode allows you to pass a value into a procedure, but not get a value back out?",
      options: ["IN", "OUT", "IN OUT"],
      correctAnswer: "IN",
      codeSnippet: "PROCEDURE calculate_tax(p_amount IN NUMBER);",
    },
    {
      category: "Procedure Definition",
      hint: "This parameter mode is used to return a value from a subprogram to the caller.",
      question:
        "Which parameter mode is used to pass a value out of a procedure, but not into it?",
      options: ["IN", "OUT", "IN OUT"],
      correctAnswer: "OUT",
      codeSnippet:
        "PROCEDURE get_user_id(p_username IN VARCHAR2, p_user_id OUT NUMBER);",
    },
    {
      category: "Procedure Definition",
      hint: "This parameter mode allows a variable to be passed into a subprogram, modified, and then returned to the caller.",
      question:
        "Which parameter mode allows a variable to be used for both input and output?",
      options: ["IN", "OUT", "IN OUT"],
      correctAnswer: "IN OUT",
      codeSnippet: "PROCEDURE increment_counter(p_value IN OUT NUMBER);",
    },
    {
      category: "Cursors",
      hint: "This type of cursor is declared in the declaration section of a PL/SQL block with a named, static SQL query.",
      question:
        "What do you call a cursor that is explicitly named and defined with a SELECT statement in the DECLARE section?",
      options: ["Implicit Cursor", "Dynamic Cursor", "Explicit Cursor"],
      correctAnswer: "Explicit Cursor",
      codeSnippet:
        "DECLARE\n  CURSOR c_employees IS SELECT last_name FROM employees;",
    },
    {
      category: "Cursors",
      hint: "This flexible cursor variable type can be associated with different queries at runtime.",
      question:
        "Which cursor type allows for dynamic queries and can be passed as a parameter to return a result set to a client application?",
      options: ["SYS_REFCURSOR", "STATIC_CURSOR", "IMPLICIT_CURSOR"],
      correctAnswer: "SYS_REFCURSOR",
      codeSnippet:
        "PROCEDURE get_products(p_category_id IN NUMBER, p_result_set OUT SYS_REFCURSOR);",
    },
    {
      category: "Control Flow",
      hint: "This type of loop is the most concise and efficient way to process every row returned by a cursor.",
      question:
        "What is the recommended loop structure for iterating through the rows of a cursor?",
      options: ["WHILE LOOP", "FOR ... IN ... LOOP", "Basic LOOP"],
      correctAnswer: "FOR ... IN ... LOOP",
      codeSnippet:
        "BEGIN\n  FOR emp_rec IN (SELECT * FROM employees) LOOP\n    DBMS_OUTPUT.PUT_LINE(emp_rec.last_name);\n  END LOOP;\nEND;",
    },
    {
      category: "Cursors",
      hint: "This command associates a cursor variable, such as a SYS_REFCURSOR, with a SELECT statement.",
      question:
        "Which statement is used to assign a query to a reference cursor variable at runtime?",
      options: ["FETCH ... INTO", "OPEN ... FOR", "SELECT ... INTO"],
      correctAnswer: "OPEN ... FOR",
      codeSnippet:
        "OPEN p_result_set FOR\n  SELECT product_name, price FROM products WHERE category_id = p_category_id;",
    },
  ],
};
