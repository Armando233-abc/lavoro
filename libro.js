function mostra(img) {

      const contenitore = document.querySelector("#mostra_img")
      const image = document.querySelector("#img")

      contenitore.style.display = "block"
      image.src = img
}

function rimuovi() {
      const contenitore = document.querySelector("#mostra_img")
      contenitore.style.display = "none"
}