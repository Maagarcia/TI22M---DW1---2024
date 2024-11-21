        // JavaScript para abrir e fechar o menu
        document.addEventListener("DOMContentLoaded", function() {
            const hamburgerIcon = document.getElementById("hamburgerIcon");
            const menu = document.getElementById("menu");

            hamburgerIcon.addEventListener("click", function(event) {
                event.preventDefault();
                menu.classList.toggle("showMenu"); // Alterna entre mostrar/esconder o menu
            });
        });
