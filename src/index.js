import "./styles.css";
import {todo} from "./todo";
import { projectManager } from "./project";
import { projectUI } from "./ui";

let editingTodo = null;
let editingProject = null;

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

    const moveTodoProject = (todo, project) => {
        if(project.trim()){
            moveTodo(todo, project);
        }
        else{
            moveTodo(todo, "Default Project");
        }
    }

    return {manageTodo, controlProject, moveTodo, moveTodoProject};
})();

const data = (function(){
    const projectData = () => {
        const todo1 = appController.manageTodo("Oil Painting", "Create a complete oil painting from start to finish", "2026-01-23", "low","Choose a subject, plan composition, block colors");
        const todo2 = appController.manageTodo("Sketch composition ideas","Explore multiple thumbnail sketches","2026-01-18","medium","");
        const todo3 = appController.manageTodo("Buy new brushes","","2026-01-20", "low", "Flat and round brushes for acrylic and oil");
        const todo4 = appController.manageTodo("Study color theory", "Understand complementary and analogous colors", "2026-01-25", "medium", "Focus on warm vs cool contrasts");
        const todo5 = appController.manageTodo("Finish background layer", "", "2026-01-22", "high", "");

        appController.controlProject("Art", "Project for all art related things");
        appController.moveTodo(todo1, "Art");
        appController.moveTodo(todo2, "Art");
        appController.moveTodo(todo3, "Art");
        appController.moveTodo(todo4, "Art");
        appController.moveTodo(todo5, "Art");
    }

    return {projectData};
})();

data.projectData();


const content = document.querySelector("#content");

function render(){
    content.innerHTML = "";
    const displayProject = projectUI.displayProjectUI(projectManager.returnProjects());
    content.append(displayProject);
}

render();


const todoForm = document.querySelector("#todoForm");

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleTodo = document.querySelector("#todoTitle").value;
    const descriptionTodo = document.querySelector("#todoDescription").value;
    const dueDateTodo = document.querySelector("#todoDueDate").value;
    const priorityTodo = document.querySelector("#todoPriority").value;
    const notesTodo = document.querySelector("#todoNotes").value;
    const todoAdd = document.querySelector("#todoAdd").value;

    if(editingTodo){
        editingTodo.title = titleTodo;
        editingTodo.description = descriptionTodo;
        editingTodo.dueDate = dueDateTodo;
        editingTodo.priority = priorityTodo;
        editingTodo.notes = notesTodo;

        if(todoAdd != editingProject.title){
            editingProject.projectStorage = editingProject.projectStorage.filter(t => t !== editingTodo);
            appController.moveTodoProject(editingTodo, todoAdd);
        }

        editingTodo = null;
        editingProject = null;
    }
    else{
        const createdTodo = appController.manageTodo(titleTodo, descriptionTodo, dueDateTodo, priorityTodo, notesTodo);
        appController.moveTodoProject(createdTodo, todoAdd);
    }

    render();
    todoForm.reset();
})

const openDialog= document.querySelector("#openDialog");
const formDialog = document.querySelector("#formDialog");
const closeDialog = document.querySelector("#closeDialog");

openDialog.addEventListener('click', () => {
    formDialog.showModal();
})

closeDialog.addEventListener('click', () => {
    formDialog.close();
})

function editTodo(project, todo){
    editingTodo = todo;
    editingProject = project;

    document.querySelector("#todoTitle").value = todo.title;
    document.querySelector("#todoDescription").value = todo.description;
    document.querySelector("#todoDueDate").value = todo.dueDate;
    document.querySelector("#todoPriority").value = todo.priority;
    document.querySelector("#todoNotes").value = todo.notes;
    document.querySelector("#todoAdd").value= project.title;

    formDialog.showModal();
}

const projectForm = document.querySelector("#projectForm");

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleProject = document.querySelector("#projectTitle").value;
    const descriptionProject = document.querySelector("#projectDescription").value;

    appController.controlProject(titleProject, descriptionProject);
    render();

    projectForm.reset();
})

const openDialogProject = document.querySelector("#openDialogProject");
const formDialogProject = document.querySelector("#formDialogProject");
const closeDialogProject = document.querySelector("#closeDialogProject");

openDialogProject.addEventListener('click', () => {
    formDialogProject.showModal();
})

closeDialogProject.addEventListener('click', () => {
    formDialogProject.close();
})

export {data, editTodo, render};