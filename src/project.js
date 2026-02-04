const project = (function(){
    const createProject = (title, description) => {
        const projectStorage = [];

        const addTodo = (todo) => {
            projectStorage.push(todo);
        }
        
        return {title, description, projectStorage, addTodo};
    }

    return {createProject};
})();

const projectManager = (function(){
    const defaultProjectObj = project.createProject("Default Project", "Todo items are added to this project by default.");
    
    const projectList = [];
    projectList.push(defaultProjectObj);

    const manageProject = (title, description) => {
        const manageProjectObj = project.createProject(title, description);
        projectList.push(manageProjectObj);

        return manageProjectObj;
    }

    const currentProject = () => {
        const currentProj = projectList[projectList.length - 1];
        return currentProj;
    }

    return {manageProject, currentProject};
})();

export {project, projectManager};