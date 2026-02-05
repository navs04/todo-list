import {format} from "date-fns";

function displayDate(dateObj){
    const result = format(new Date(dateObj),"yyyy-MM-dd");
    return result;
}

const todo = (function(){
    const createTodo = (title, description, dueDate, priority, notes, status) => {
        const todoStorage = {
            title: title,
            description: description,
            dueDate: displayDate(dueDate),
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