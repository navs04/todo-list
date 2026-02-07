function createProject(project){
    const projectContainer = document.createElement('div');
    projectContainer.classList.add("projects");

    const projectTitle = document.createElement('h1');
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    const projectTodos = document.createElement('div');
    projectTodos.classList.add("todos-container");

    const todoArray = project.projectStorage;

    for (let i=0; i < todoArray.length; i++){
        const todoContainer = document.createElement('div');
        todoContainer.classList.add("todos");

        const todoTitle = document.createElement('h2');
        const todoDueDate = document.createElement('p');

        todoTitle.textContent = todoArray[i].title;
        todoDueDate.textContent = todoArray[i].dueDate;
        
        todoContainer.append(todoTitle, todoDueDate);
        projectTodos.append(todoContainer);
    }

    projectContainer.append(projectTitle, projectDescription, projectTodos);

    return projectContainer;
}

export {createProject};