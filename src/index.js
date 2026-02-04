import {todo} from "./todo";
import { project, projectManager } from "./project";

const appController = (function(){
    const manageTodo = (title, description, dueDate, priority, notes, status) => {
        const todoObj= todo.createTodo(title, description, dueDate, priority, notes, status);

        return todoObj;
    }

    const controlProject = (title, description) => {
        const projObj = projectManager.manageProject(title, description);

        return projObj;
    }

    const moveTodo = (todo) => {
        const current = projectManager.currentProject();
        current.addTodo(todo);
    }

    return {manageTodo, controlProject, moveTodo};
})();