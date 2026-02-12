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
        const todoDescription = document.createElement('p');
        const todoDueDate = document.createElement('p');
        const todoNotes = document.createElement('p');

        todoDescription.classList.add("todo-description");
        todoNotes.classList.add("todo-notes");

        todoTitle.textContent = todoArray[i].title;
        todoDueDate.textContent = todoArray[i].dueDate;

        if(todoArray[i].priority == "low"){
            todoContainer.classList.add("low");
        }
        else if (todoArray[i].priority == "medium"){
            todoContainer.classList.add("medium");
        }
        else if (todoArray[i].priority == "high"){
            todoContainer.classList.add("high");
        }

        todoContainer.addEventListener('click', () => {    
            todoContainer.classList.add("expanded");
                
            todoDescription.textContent = todoArray[i].description;
            todoNotes.textContent = todoArray[i].notes;

        })

        todoContainer.append(todoTitle, todoDescription, todoDueDate, todoNotes);
        projectTodos.append(todoContainer);
    }

    projectContainer.append(projectTitle, projectDescription, projectTodos);

    return projectContainer;
}

export {createProject};