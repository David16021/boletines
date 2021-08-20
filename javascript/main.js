//obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function (link) {
  //Agregar un evento click a cada uno de ellos
  link.addEventListener("click", function () {
    console.log(":)");
  });
});
