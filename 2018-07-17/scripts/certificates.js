const certificatesElem = document.querySelector(".certificates")

const certificates = [
    {
        title: "M101JS: MongoDB for Node.js Developers",
        url: "https://university.mongodb.com/course_completion/713e289f-3c92-436d-bd78-89f75a68",
        tags: ["MongoDB", "NoSQL", "Node.js", "Express.js"]
    },
    {
        title: "M001: MongoDB Basics",
        url: "http://university.mongodb.com/course_completion/0034ee3a-2fcf-4a62-8bef-072fcab3",
        tags: ["MongoDB", "NoSQL"]
    },
    {
        title: "The Web Developer Bootcamp",
        url: "https://www.udemy.com/certificate/UC-HJ4EL1JB/",
        tags: [ "html", "CSS", "Bootstrap", "Javascript", "jQuery", "REST", "Node.js", "Express.js",
                "MongoDB", "Mongoose", "Authentication", "Heroku",]
    },
    {
        title: "Python Mega Course - Build 10 Real World Applications",
        url: "https://www.udemy.com/certificate/UC-OMTQ3PME/",
        tags: ["Python", "Regex", "Web Scraping", "GUI Automation", "Heroku"]
    },
    {
        title: "Microsoft Virtual Academy - C# Fundamentals for Absolute Beginners",
        url: "img/c-sharp-fundamentals.png",
        tags: ["C#"]
    },
    {
        title: "The Ultimate MySQL Bootcamp - Go from SQL Beginner to Expert",
        url: "https://www.udemy.com/certificate/UC-SPQZ2JNC/",
        tags: ["SQL", "MySQL"]
    },
    {
        title: "Automate the Boring Stuff with Python Programming",
        url: "https://www.udemy.com/certificate/UC-8P0XFHDY/",
        tags: [ "Python", "Web Scraping", "Data Visualization", "Pandas", "Flask", "GUI", "tkinter",
                "SQLite", "postgreSQL" ]
    },
]

certificates.forEach(function(certificate){
    html = `
        <div class="cert-container">
            <h3>${certificate.title}</h3>
            <div class="tags">`
        certificate.tags.forEach(function(tag){
            html += `<div class="tag">${tag}</div>`
        })
    html += `
            </div>
            <a href="${certificate.url}" target="_blank">View Certificate</a>
        </div>`

    certificatesElem.insertAdjacentHTML("beforeend", html);
})
