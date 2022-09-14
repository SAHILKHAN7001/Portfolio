let title = document.getElementById("title").innerHTML = `< Sahil Khan >`;

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener("click",function() {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach(link => {
    link.addEventListener("click",function() {
        document.body.classList.remove("nav-open")
    })
})

