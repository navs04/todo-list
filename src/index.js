import "./styles.css";
import {todo} from "./todo";
import { projectManager } from "./project";
import { projectUI } from "./ui";

const appController = (function(){
    const manageTodo = (title, description, dueDate, priority, notes) => {
        const todoObj= todo.createTodo(title, description, dueDate, priority, notes);

        return todoObj;
    }

    const controlProject = (title, description) => {
        const projObj = projectManager.manageProject(title, description);

        return projObj;
    }

    const moveTodo = (todo, project) => {
        const projectFound = projectManager.findProject(project);
        projectFound.addTodo(todo);
    }

    return {manageTodo, controlProject, moveTodo};
})();

const data = (function(){
    const projectData = () => {
        const todo1 = appController.manageTodo("Oil Painting", "Create a complete oil painting from start to finish", "2026-01-23", "low","Choose a subject, plan composition, block colors");
        const todo2 = appController.manageTodo("Sketch composition ideas","Explore multiple thumbnail sketches","2026-01-18","medium","");
        const todo3 = appController.manageTodo("Buy new brushes","","2026-01-20", "low", "Flat and round brushes for acrylic and oil");
        const todo4 = appController.manageTodo("Study color theory", "Understand complementary and analogous colors", "2026-01-25", "medium", "Focus on warm vs cool contrasts");
        const todo5 = appController.manageTodo("Finish background layer", "", "2026-01-22", "high", "");

        const project1 = appController.controlProject("Art", "Project for all art related things");
        appController.moveTodo(todo1, project1);
        appController.moveTodo(todo2, project1);
        appController.moveTodo(todo3, project1);
        appController.moveTodo(todo4, project1);
        appController.moveTodo(todo5, project1);

        const todo6 = appController.manageTodo("Complete DSA assignment", "Finish all remaining problems", "2026-01-19", "high", "Pay attention to time complexity");
        const todo7 = appController.manageTodo("Revise sorting algorithms", "", "2026-01-21", "medium", "Quick sort, merge sort, and use cases");
        const todo8 = appController.manageTodo("Prepare for math quiz", "Revise key formulas and practice problems", "2026-01-24", "high", "Focus on integration");
        const todo9 = appController.manageTodo("Organize lecture notes", "", "2026-01-17", "low", "");
        
        const project2 = appController.controlProject("College / Studies", "To keep track of assignments and prepare for exams");
        appController.moveTodo(todo6, project2);
        appController.moveTodo(todo7, project2);
        appController.moveTodo(todo8, project2);
        appController.moveTodo(todo9, project2);

        const todo10 = appController.manageTodo("Clean room", "", "", "low", "");
        const todo11 = appController.manageTodo("Plan weekly schedule", "", "2026-01-17", "medium", "");
        const todo12 = appController.manageTodo("Read for 30 minutes", "", "", "low", "");

        const project3 = appController.controlProject("Personal", "Daily life and routines");
        appController.moveTodo(todo10, project3);
        appController.moveTodo(todo11, project3);
        appController.moveTodo(todo12, project3);

        return {project1, project2, project3};
    }

    return {projectData};
})();

const content = document.querySelector("#content");

const displayProject = projectUI.displayProjectUI(data.projectData());
content.append(displayProject);

export {data};