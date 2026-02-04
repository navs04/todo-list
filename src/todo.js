const todo = (function(){
    const createTodo = (title, description, dueDate, priority, notes, status) => {
        const todoStorage = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            notes: notes,
            status: status,
            id: crypto.randomUUID(),
        };

        return todoStorage;
    }

    return {createTodo};
})();

export {todo};