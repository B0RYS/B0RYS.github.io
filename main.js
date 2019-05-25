const containers = document.getElementById("containers");
window.projectList = [
    {name: "borysdev.github.io", description: "A website that introduces me and my projects.", link: "https://borysdev.github.io"},
    {}
];

while (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("Please view this webpage on a desktop device");
    window.location = "about:blank";
}

function aboutme() {
    containers.innerHTML = "<div class='container'>\
    <h1 class='title'>About me</h1>\
    <div class='content'> <img class='image' src='https://avatars3.githubusercontent.com/u/36678225?s=460&v=4'\
            href='https://github.com/BorysDev'> I aim to develop technology that is usable for anyone. I'm 15 years\
        old and come from Poland, though i have lived in England for some time. </div>\
    </div>"
};

function projects() {
    containers.innerHTML = "";

    window.projectList.forEach(project => {
        if(!project.name || !project.description)return;
        containers.innerHTML += `<div class ='container'>\
        <h1 class='title'><a href='${project.link || ""}'>${project.name}</a></h1>
        <div class='content'>${project.description}</div>
        </div>`
    });
};


window.onload = aboutme();