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
