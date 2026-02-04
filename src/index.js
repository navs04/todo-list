const todo = (function(){
    const createTodo = (title, description, dueDate, priority, notes, status) => {
        const todoStorage = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            notes: notes,
            status: status,
            id: crypto.randomUUID(),
        };

        return todoStorage;
    }

    return {createTodo};
})();

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