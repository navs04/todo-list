import { createProject } from "./create";

const projectUI = (function(){
    const displayProjectUI = (projects) => {
        const containerProjects = document.createElement("div");

        for(let i=0; i<projects.length ;i++){
            const project1UI = createProject(projects[i]);
            containerProjects.append(project1UI);
        }

        return containerProjects;
    }
    
    return {displayProjectUI};
})();

export {projectUI};