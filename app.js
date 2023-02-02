function mostra(img, str) {
      
      const contenitore = document.querySelector("#mostra_img")
      const image = document.querySelector("#img")
      const text = document.querySelector("#text")
      
      contenitore.style.display = "block"
      image.src = img
      text.innerHTML = str
}


function rimuovi(){
      const contenitore = document.querySelector("#mostra_img")
      contenitore.style.display = "none"
}