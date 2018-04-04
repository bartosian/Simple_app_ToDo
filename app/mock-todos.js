System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TODOS;
    return {
        setters:[],
        execute: function() {
            /*mock-todos it's just an array of objects that simulates a database.
            You should use a database. */
            //exporting the heroes mock
            exports_1("TODOS", TODOS = [
                { "name": "Go to the GYM", completed: false },
                { "name": "Visit my grandma", completed: false },
                { "name": "feed the lawn", completed: false },
                { "name": "Pay by rent", completed: false },
                { "name": "Buy a present for my sister", completed: false },
                { "name": "See the new film", completed: false },
                { "name": "Take a walk with the dog", completed: false },
                { "name": "Go to a bar with friends", completed: false },
                { "name": "Buy plane tickets", completed: false }
            ]);
        }
    }
});
//# sourceMappingURL=mock-todos.js.map