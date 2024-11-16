"use strict";
//PARTE 2
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Pending"] = 0] = "Pending";
    TodoStatus[TodoStatus["InProgress"] = 1] = "InProgress";
    TodoStatus[TodoStatus["COmpleted"] = 2] = "COmpleted";
})(TodoStatus || (TodoStatus = {}));
