const projSect = $("#projects-section")
const projects = [];

class Project{
    constructor(obj){
        this.name=obj.name;
        this.description=obj.description;
        this.image=null;
        this.codeURL=obj.html_url;
        this.siteURL=`https://joechristianson.github.io/${obj.name}/`;
        this.screenshot = `${this.siteURL}screenshot.png`;
        if (this.description?.includes("*P*")) projects.push(this);
    }
}


const url = "https://api.github.com/users/JoeChristianson/repos"
const pull = async (url)=>{
    const response = await fetch(url);
    const data = await response.json()
    for (let datum of data){
        new Project(datum);
    }
    return projects
}


async function loadProjects(){
    const projects = await pull(url);
    for(let project of projects){
        console.log(project);
        const tile = $("<div>");
        tile.addClass("project-tile");
        tile.on("click",()=>{
            window.location.href = project.siteURL;
        })
        const title = $("<h3>");
        title.text(project.name);
        const img = $("<img>");
        img.attr("src",project.screenshot);
        const overlay = $("<div>");
        overlay.addClass("project-tile-overlay");
        projSect.append(tile);
        [title,img,overlay].forEach(el=>{
            tile.append(el);
            console.log(tile)
        })
    }
}
loadProjects()


// `<div class="project-tile" onclick="window.location.href='https://www.ponggame.org'">
// <h3>Pong</h3>
// <img class="project-screenshot" src="https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2008/04/16/Pong460x276.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=29de82b73dca1aba1d923bd736d288a1">
// <div class="project-tile-overlay"></div>
// </div>`