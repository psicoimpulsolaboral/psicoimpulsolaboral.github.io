// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^="#"]");
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', function () {
            // Alterna la clase 'active' en el menú para mostrarlo/ocultarlo
            navMenu.classList.toggle('active');

            // Opcional: Cambia el ícono de hamburguesa a una 'X'
            if (navMenu.classList.contains('active')) {
                mobileNavToggle.innerHTML = '✕';
            } else {
                mobileNavToggle.innerHTML = '☰';
            }
        });
    }
});
