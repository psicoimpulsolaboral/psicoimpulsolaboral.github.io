// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^='#']");
    
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

// Menú móvil
document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Alterna la clase 'active' en el menú para mostrarlo/ocultarlo
            navMenu.classList.toggle('active');

            // Cambia el ícono de hamburguesa a una 'X'
            if (navMenu.classList.contains('active')) {
                mobileNavToggle.innerHTML = '✕';
            } else {
                mobileNavToggle.innerHTML = '☰';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileNavToggle.innerHTML = '☰';
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileNavToggle.innerHTML = '☰';
            }
        });
    }
});

// Función para mostrar secciones (si la necesitas para navegación interna)
function showSection(sectionId) {
    // Si estás en la misma página, puedes hacer scroll
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        // Si no, navega a la página correspondiente
        window.location.href = '/' + sectionId + '/';
    }
}
