let todos = [];

window.onload = function() { 
    const storedTodos = localStorage.getItem('todos'); 
    if (storedTodos) { 
        todos = JSON.parse(storedTodos); 
    } 
    displayTodos(todos); 
};

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(title, category) {
    const newTodo = {
        id: Date.now(),
        title: title,
        category: category,
        completed: false
    };
    todos.push(newTodo);
    saveTodos();
    console.log('Todo aggiunto:', newTodo);
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    console.log('Todo eliminato, ID:', id);
}

function toggleComplete(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
    console.log('Todo aggiornato, ID:', id);
}

function editTodoTitle(id, newTitle) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.title = newTitle;
        saveTodos();
        console.log('Titolo del Todo modificato:', newTitle);
    }
}

function editTodoCategory(id, newCategory) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.category = newCategory;
        saveTodos();
        console.log('Categoria del Todo modificata:', newCategory);
    }
}

function filterCompletedTodos() {
    return todos.filter(todo => todo.completed);
}

function filterPendingTodos() {
    return todos.filter(todo => !todo.completed);
}

function filterTodosByCategory(category) {
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

function saveTodoWithCategory(todo, category) {
    todo.category = category;
    saveToDatabase(todo);
}
