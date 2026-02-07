import { createProject } from "./create";

const projectUI = (function(){
    const containerProjects = document.createElement("div");

    const displayProjectUI = (projects) => {
        Object.keys(projects).forEach(key => {
            const project1UI = createProject(projects[key]);
            containerProjects.append(project1UI);
        })

        return containerProjects;
    }
    
    return {displayProjectUI};
})();

export {projectUI};