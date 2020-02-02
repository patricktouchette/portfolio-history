const workElement = document.querySelector(".work");

const myWork = [
    {
        title: "CRUD App",
        image: "img/crud-app.png",
        github: "https://github.com/patricktouchette/crud-app",
        website: "https://crud-app-83333.herokuapp.com/",
        tags: ["html", "CSS", "Javascript", "Node.js", "Express.js", "MongoDB", "MongoDB Node.js Driver"],
        description:
                    `This very originally named project is a basic CRUD web-app running on node and mongoDB.
                    Uses the ejs template engine. This app let's you create, read, update and delete movies
                    within a database.`
    },{
        title: "YelpCamp",
        image: "img/yelpcamp.png",
        github: "https://github.com/patricktouchette/web-dev-courses/tree/master/The%20Web%20Developer%20Bootcamp/YelpCamp/V12%20-%20DEPLOYED",
        website: "https://yelpcamp-83333.herokuapp.com/campgrounds",
        tags: ["html", "CSS", "Bootstrap", "Javascript", "REST", "Node.js", "Express.js", "MongoDB", "Mongoose"],
        description:
                    `Fullstack web-app running on node and mongoDB backend created while following the web developper bootcamp course.
                     Users can sign-up, add and remove campgrounds with pictures, descriptions, etc...
                     Users can leave comments. `
    },{
        title: "Youtube Coding Feed",
        image: "img/youtube-coding-feed.png",
        github: "https://github.com/patricktouchette/youtube-specialized-feed",
        website: "https://patricktouchette.github.io/youtube-specialized-feed/",
        tags: ["html", "CSS", "Javascript" , "jQuery", "Youtube Data API"],
        description:
                    `Quickly see if your favorite youtube channels have uploaded a new video.
                     You will only see the 5 latest videos, by channel, and nothing more.
                     Data is pulled from from the Youtube Data API using jQuery.`

    },{
        title: "ERP Prototype ",
        image: "img/erp-prototype.png",
        github: "https://github.com/patricktouchette/ERP-prototype",
        website: "",
        tags: ["python", "tkinter", "GUI"],
        description: `
                    This is a simple ERP (Enterprise resource planning) software prototype,
                    built in python and Tkinter. Reportlab is also used to create reports
                    and matplotlib is used to create charts. Parts as well as a part
                    process sheets can be created.`
    },{
        title: "C# Hangman ",
        image: "img/hangman.png",
        github: "https://github.com/patricktouchette/hangman",
        website: "",
        tags: ["C#", "Hangman"],
        description: `
                    Short project to play the hangman game. Give it a try!`
    },{
        title: "Interlinear Text Creator ",
        image: "img/interlinear-text.png",
        github: "https://github.com/patricktouchette/interlinear-text-creator",
        website: "",
        tags: ["Python", "HTML"],
        description: `
                    A few years ago, instead of actually spending time learning Russian,
                    I learned Python and created this app to better learn Russian.
                    Creates an interlinear book from a Russian text. The English
                    translation is displayed above the Russian word in HTML ruby notation.
                    Uses python 3.6`
    },,{
        title: "Webscraping ",
        image: "img/pokedex-scraper.png",
        github: "https://github.com/patricktouchette/web-scraping",
        website: "",
        tags: ["Python", "Jupyter", "pandas", "tkiner"],
        description: `
                    Here are a few webscraping projects, where I gathered data from websites
                    such as duproprio.com and pokemondb.net . Data was exported to a pandas
                    dataframe. A python GUI was also created to visualize and search the data.`
    },
]


myWork.forEach(function(project){
    html = `
        <div class="project">`

    if (project.website.length > 0) {
        html += `<a href="${project.website}" target="_blank">`
    } else {
        html += `<a href="${project.github}" target="_blank">`
    }
    html += `
            <img src="${project.image}" alt=""></a>
        <h3>${project.title} </h3>

        <div class="project-links">`
        if (project.website.length > 0) {
            html += `<a href="${project.website}" target="_blank">GO TO WEBSITE</a>`
        }
    html += `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GITHUB</a>
        </div>

        <div class="tags">`
        project.tags.forEach(function(tag){
            html += '<div class="tag">'+tag+'</div>'
        })
    html += `
        </div>
        <p>${project.description}</p>
        </div>`

    workElement.insertAdjacentHTML('beforeend', html)

})
