const skills = document.querySelector(".skills")

const mySkills = [
    {
        category: "Languages",
        skillList: ["HTML", "CSS", "Javascript", "Python", "C#"]
    },{
        category: "Other Languages",
        skillList: ["French (native)", "English (native)", "Russian (Intermediate)"]
    },{
        category: "Frameworks / <br>Librairies",
        skillList: ["jQuery", "Node.js", "Express.js", "NPM"]
    },{
        category: "Databases",
        skillList: ["SQL", "noSQL", "MySQL", "MongoDB"]
    },{
        category: "Services",
        skillList: ["Heroku", "Mlab", "Cloud9"]
    },{
        category: "Source Control",
        skillList: ["Git", "Github"]
    },{
        category: "APIs",
        skillList: ["Youtube Data API", "Gmail API"]
    }
]


mySkills.forEach(function(category){
    html = ''
    html += '<ul><h3>'+category.category+'</h3>'
    category.skillList.forEach(function(skill){
        html += '<li><a href="">'+skill+'</a></li>'
    })
    html += '</ul>'
    skills.insertAdjacentHTML('beforeend', html)
})
