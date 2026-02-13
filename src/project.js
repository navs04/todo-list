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
    const defaultProjectObj = project.createProject("Default Project", "Tasks that haven't been assigned to a specific project.");
    
    const projectList = [];
    projectList.push(defaultProjectObj);

    const manageProject = (title, description) => {
        const manageProjectObj = project.createProject(title, description);
        projectList.push(manageProjectObj);

        return manageProjectObj;
    }

    const findProject = (project) => {
        for(let i=0; i<projectList.length; i++){
            if(project == projectList[i].title){
                return projectList[i];
            }
        }
    }

    const returnProjects = () => {
        return projectList;
    }

    return { manageProject, findProject, returnProjects};
})();

export {project, projectManager};