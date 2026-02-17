import { editTodo, render } from ".";

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
        const currentTodo = todoArray[i];

        if(currentTodo.completed){
            todoContainer.classList.add('completed');
        }

        const todoEdit = document.createElement('button');
        todoEdit.classList.add('editBtn');
        const todoDelete = document.createElement('button');
        todoDelete.classList.add('deleteBtn')
        const todoCheckbox = document.createElement('input');
        todoCheckbox.type = 'checkbox';
        todoCheckbox.checked = currentTodo.completed;

        const todoTitle = document.createElement('h2');
        const todoDescription = document.createElement('p');
        const todoDueDate = document.createElement('p');
        const todoNotes = document.createElement('p');

        todoDescription.classList.add("todo-description");
        todoNotes.classList.add("todo-notes");

        todoTitle.textContent = currentTodo.title;
        todoDueDate.textContent = currentTodo.dueDate;

        if(currentTodo.priority == "low"){
            todoContainer.classList.add("low");
        }
        else if (currentTodo.priority == "medium"){
            todoContainer.classList.add("medium");
        }
        else if (currentTodo.priority == "high"){
            todoContainer.classList.add("high");
        }

        todoContainer.addEventListener('click', () => {    
            todoContainer.classList.add("expanded");

            todoEdit.textContent = "Edit";
            todoDelete.textContent = "Delete";
                
            todoDescription.textContent = currentTodo.description;
            todoNotes.textContent = currentTodo.notes;
        })

        todoEdit.addEventListener('click', () => {
            editTodo(project, currentTodo);
        })

        todoDelete.addEventListener('click', () => {
            project.projectStorage = project.projectStorage.filter(t => t !== currentTodo);
            render();
        })

        todoCheckbox.addEventListener('click', (e) => {
            e.stopPropagation();
            currentTodo.completed = !currentTodo.completed;
            render();
        })

        todoContainer.append(todoCheckbox, todoTitle, todoDescription, todoDueDate, todoNotes, todoEdit, todoDelete);
        projectTodos.append(todoContainer);
    }

    projectContainer.append(projectTitle, projectDescription, projectTodos);

    return projectContainer;
}

export {createProject};