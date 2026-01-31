function createTodo(title, description, dueDate, priority, notes, status){
    return{
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
        status: status,
    };
}