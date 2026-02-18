import { todo } from "./todo";
import { render } from ".";

const project = (function(){
    const createProject = (title, description) => {
        const projectStorage = [];
        const id = crypto.randomUUID();

        const addTodo = (todo) => {
            projectStorage.push(todo);
        }
        
        return {title, description, projectStorage, addTodo, id};
    }

    return {createProject};
})();

const projectManager = (function(){
    const projectList = [];

    const manageProject = (title, description) => {
        const manageProjectObj = project.createProject(title, description);
        projectList.push(manageProjectObj);
        saveProjects();

        return manageProjectObj;
    }

    const deleteProject = (projectId) => {
        const index = projectList.findIndex(p => p.id === projectId);
        if (index !== -1) {
            projectList.splice(index, 1);
        }
        saveProjects();
        render();
    }

    const findProject = (projectId) => {
        return projectList.find(p => p.id === projectId);
    }

    const returnProjects = () => {
        return projectList;
    }

    const saveProjects = () => {
        localStorage.setItem("projects", JSON.stringify(projectList));
    }

    const loadProjects = () => {
        const stored = localStorage.getItem("projects");

        if(stored){
            const parsedProjects = JSON.parse(stored);
            projectList.length = 0;

            parsedProjects.forEach(storedProject => {
                const newProject = project.createProject(storedProject.title, storedProject.description);

                if(storedProject.projectStorage){
                    storedProject.projectStorage.forEach(storedTodo => {
                    const newTodo = todo.createTodo(storedTodo.title, storedTodo.description, storedTodo.dueDate, storedTodo.priority, storedTodo.notes);
                    newTodo.completed = storedTodo.completed;
                    newProject.addTodo(newTodo);
                });
                }
                projectList.push(newProject);
            });

            return true;
        }
        else{
            return false;
        }
    }

    return { manageProject, findProject, returnProjects, saveProjects, loadProjects, deleteProject};
})();

export {project, projectManager};