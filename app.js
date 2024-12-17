let todos = [];

function addTodo(title, category) {
    const newTodo = {
        id: Date.now(),
        title: title,
        category: category,
        completed: false
    };
    todos.push(newTodo);
    console.log('Todo aggiunto:', newTodo);
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    console.log('Todo eliminato, ID:', id);
}

function toggleComplete(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    console.log('Todo aggiornato, ID:', id);
}

function filtroTooDoCompletati() {
    return todos.filter(todo => todo.completed);
}

function filtroTooDoNonCompletati() {
    return todos.filter(todo => !todo.completed);
}

function filtroCategorie(category) {
    return todos.filter(todo => todo.category === category);
}

function showAllTodos() {
    displayTodos(todos);
}

function showCompletedTodos() {
    const completedTodos = filterCompletedTodos();
    displayTodos(completedTodos);
}

function showPendingTodos() {
    const pendingTodos = filterPendingTodos();
    displayTodos(pendingTodos);
}

function showTodosByCategory() {
    const category = document.getElementById('categoryFilter').value;
    const filteredTodos = filterTodosByCategory(category);
    displayTodos(filteredTodos);
}

function displayTodos(todos) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.textContent = `${todo.title} - ${todo.category} (${todo.completed ? 'Completato' : 'Non completato'})`;
        appDiv.appendChild(todoItem);
    });
}
