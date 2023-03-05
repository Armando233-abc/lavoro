if (localStorage.getItem("count")) {
      const count = parseInt(localStorage.getItem('count'));

      for (let i = 0; i < count; i++) {
            const sinistra = document.querySelectorAll("#sinistra > div");
            const destra = document.querySelectorAll("#destra > div");

            let id = sinistra.length <= destra.length ? "#sinistra" : "#destra";

            const div = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const div_corpo = document.querySelector(id)


            img.src = localStorage.getItem('img' + i);

            p.innerHTML = localStorage.getItem('text' + i);

            div.setAttribute('onclick', "mostra('" + img.src + "', '" + localStorage.getItem('text' + i) + "')")

            div.appendChild(img)
            div.appendChild(p)
            div_corpo.appendChild(div)

      }
}


function mostra(img, str) {

      const contenitore = document.querySelector("#mostra_img")
      const image = document.querySelector("#img")
      const text = document.querySelector("#text")

      contenitore.style.display = "block"
      image.src = img
      text.innerHTML = str
}


function rimuovi() {
      const contenitore = document.querySelector("#mostra_img")
      contenitore.style.display = "none"
}

function make_photo() {
      window.location.href = "make_photo.html";
}

function make_photo() {
      window.location.href = "make_photo.html";
}

function see_books() {
      window.location.href = "libro.html";
}

