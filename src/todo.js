import {format} from "date-fns";

function displayDate(dateObj){
    if(dateObj !=""){
        const result = format(new Date(dateObj),"yyyy-MM-dd");
        return result;
    }
}

const todo = (function(){
    const createTodo = (title, description, dueDate, priority, notes) => {
        const todoStorage = {
            title: title,
            description: description,
            dueDate: displayDate(dueDate),
            priority: priority,
            notes: notes,
            completed: false,
            id: crypto.randomUUID(),
        };

        return todoStorage;
    }

    return {createTodo};
})();

export {todo};