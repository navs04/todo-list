import { createProject } from "./create";
import { projectManager } from "./project";

const projectUI = (function(){
    const displayProjectUI = (projects) => {
        const containerProjects = document.createElement("div");

        for(let i=0; i<projects.length ;i++){
            const project1UI = createProject(projects[i]);
            containerProjects.append(project1UI);
        }

        return containerProjects;
    }

    const renderProjectDropdown = () => {
        const select = document.querySelector("#todoAdd");
        select.innerHTML = "";
        
        const projectArray = projectManager.returnProjects();
        projectArray.forEach(project => {
            const option = document.createElement('option');
            option.value = project.id;
            option.textContent = project.title;
            select.appendChild(option);
        })
    }
    
    return {displayProjectUI, renderProjectDropdown};
})();

export {projectUI};