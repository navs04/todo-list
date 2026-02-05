import {todo} from "./todo";
import { project, projectManager } from "./project";

const appController = (function(){
    const manageTodo = (title, description, dueDate, priority, notes) => {
        const todoObj= todo.createTodo(title, description, dueDate, priority, notes);

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

const todo1 = appController.manageTodo("oil painting", "make an oil painting", "2024-01-23", "low","choose a subject, make composition");
const project1 = appController.controlProject("art", "project for all art related things");