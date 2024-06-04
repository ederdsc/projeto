function togglemode() {
  const html = document.documentElement

  // if(html.classList.contains("light")){
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }
  // COMANDO ABAIXO REALIZA TODAS FUNÇÕES DO CÓDIGO ACIMA!!!! //

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiveer light mode, adicionar a imagem light
    img.setAttribute("src", "/assets/avatar-light.png")
  } 
  else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
