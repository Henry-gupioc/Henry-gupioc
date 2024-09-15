const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los enlaces con la clase 'sidebar-link'
  const links = document.querySelectorAll('.sidebar-link');
  
  // Selecciona el contenedor donde se mostrará el contenido
  const content = document.getElementById('content');
  
  // Contenido de cada sección
  const pages = {
      'aula-virtual': '<h1>Aula Virtual FIM</h1><p>Contenido sobre el aula virtual...</p>',
      'horario': '<h1>Mi Horario de Clases</h1><p>Tu horario aquí...</p>',
      'docente': '<h1>Informacion Docente</h1><p>Información sobre los docentes...</p>',
      // Agrega más secciones según necesites
  };
  
  // Asigna un evento de clic a cada enlace
  links.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const target = this.getAttribute('data-target');
          if (pages[target]) {
              // Cambia el contenido dinámicamente
              content.innerHTML = pages[target];
          } else {
              content.innerHTML = '<h1>Página no encontrada</h1>';
          }
      });
  });
});
