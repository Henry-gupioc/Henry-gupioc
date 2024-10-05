const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

  document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    const content = document.getElementById('content');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const target = this.getAttribute('data-target');
            switch(target) {
                case 'aula-virtual':
                    content.innerHTML = '<h1>Aula Virtual FIM</h1>';
                    break;
                case 'mi horario de clases':
                    content.innerHTML = '<h1>Mi Horario de Clases</h1>';
                    break;
                case 'informacion docente':
                    content.innerHTML = '<h1>Información Docente</h1>';
                    break;
                case 'mis cursos asignados':
                    content.innerHTML = '<h1>Mis Cursos Asignados</h1>';
                    break;
                case 'tutoria alumnos':
                     content.innerHTML = '<h1>Tutoria Alumnos</h1>';
                        break;
                case 'asistencia':
                    content.innerHTML = '<h1>Asistencia</h1>';
                            break;
                case 'mis cursos asignados':
                                content.innerHTML = '<h1>Mis Cursos Asignados</h1><p>Aquí puedes ver los cursos que tienes asignados...</p>';
                                break;
                default:
                    content.innerHTML = '<h1>Bienvenido</h1><p>Selecciona una opción del menú.</p>';
            }
        });
    });
});

