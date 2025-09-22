// Simple Todo List
let todos = [];

function addTodo(task) {
    todos.push({ task, done: false });
}

function removeTodo(index) {
    todos.splice(index, 1);
}

function toggleTodo(index) {
    todos[index].done = !todos[index].done;
}

function getTodos() {
    return todos;
}

console.log('Todo module loaded');
