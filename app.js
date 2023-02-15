if (localStorage.getItem("count")) {
      const count = parseInt(localStorage.getItem('count'));

      for (let i = 0; i < count; i++) {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const div_corpo = document.querySelector("#contenitore_corpo")

            img.src = localStorage.getItem('img' + i);

            p.innerHTML = localStorage.getItem('text' + i);

            div.setAttribute('onclick', "mostra('" + img.src + "', '" + localStorage.getItem('text' + i) + "')")

            let randomInt;
            for (let i = 0; i < 10; i++) {
                  randomInt = Math.floor(Math.random() * (max - min) + min);
            }
            div_corpo.style.marginTop = randomInt + 'px'

            div.appendChild(img)
            div.appendChild(p)
            div_corpo.appendChild(div)
      }
}

/*
function reset() {
      localStorage.clear();
}

reset()
*/
function sflasato() {
      let divs = document.querySelectorAll('#contenitore_corpo > div')
      let max = 50, min = 10;
      let j = 0
      divs.forEach(function (div) {
            if (j < 2) {
                  j++;
            } else {
                  let randomInt;
                  for (let i = 0; i < 10; i++) {
                        randomInt = Math.floor(Math.random() * (max - min) + min);
                  }
                  div.style.marginTop = randomInt + 'px'
            }
      })
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


function visualizza() {
      const li = document.querySelectorAll("#contenitore_menu li")
      const contenitore_body = document.querySelector("#contenitore_body");
      const divs = document.querySelectorAll("#contenitore_menu div");

      contenitore_body.style.opacity = "0.5";
      divs.forEach((div) => {
            div.style.display = "block"
      })
      li.forEach((l) => {
            l.style.backgroundColor = "chartreuse"
      })
}

function togli() {
      const contenitore_body = document.querySelector("#contenitore_body");
      contenitore_body.style.opacity = "1";

      const li = document.querySelectorAll("#contenitore_menu li")
      li.forEach((l) => {
            l.style.backgroundColor = "DarkOrchid"
      })

      const divs = document.querySelectorAll("#contenitore_menu div");
      divs.forEach((div) => {
            div.style.display = "none"
      })
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

