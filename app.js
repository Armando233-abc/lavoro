if (localStorage.getItem('img')) {
      const div = document.createElement('div');
      const img = document.createElement('img');
      const p = document.createElement('p');
      const div_corpo = document.querySelector("#contenitore_corpo")

      img.src = localStorage.getItem('img')
      localStorage.removeItem('img')

      p.innerHTML = localStorage.getItem('text')
      localStorage.removeItem('img')

      div.onclick = "mostra(" + img.src + ", ciao sono homer simp)";

      div.appendChild(img)
      div.appendChild(p)
      div_corpo.appendChild(div)
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


function visualizza(){
      const li = document.querySelectorAll("#contenitore_menu li")
      const contenitore_body = document.querySelector("#contenitore_body");
      const divs = document.querySelectorAll("#contenitore_menu div");

      contenitore_body.style.opacity = "0.5";
      divs.forEach((div) =>{
            div.style.display = "block"
      })
      li.forEach((l)=>{
            l.style.backgroundColor = "chartreuse"
      })
}

function togli(){
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

function make_photo(){
      window.location.href = "make_photo.html";
}

function make_photo() {
      window.location.href = "make_photo.html";
}

function see_books(){
      window.location.href = "libro.html";
}


// /-------------------------------------/
// let video = document.querySelector("#video");
// let click_button = document.querySelector("#click-photo");
// let canvas = document.querySelector("#canvas");

// async function mostra_camera() {
//       let stream = await navigator.mediaDevices.getUserMedia({
//             video: {
//                   width: {
//                         min: 1280,
//                         ideal: 1920,
//                         max: 2560,
//                   },
//                   height: {
//                         min: 720,
//                         ideal: 1080,
//                         max: 1440
//                   },
//                   facingMode: "environment"
//             }, audio: false
//       });
//       video.srcObject = stream;
// }
// mostra_camera()

// click_button.addEventListener('click', function () {
//       canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

//       video.style.display = 'none';
//       click_button.dyspplay = 'none';

//       const contenitore = document.querySelector('#contenitore');
//       contenitore.style.display = 'none';

//       const contenitore_img = document.querySelector('#contenitore_img');
//       contenitore_img.style.display = 'block';


//       const selezione = document.querySelector('#selezione');
//       selezione.style.display = 'grid';
// });


// function salva() {
//       const testo = document.querySelector('#descrizione')
//       const div = document.createElement('div');
//       const img = document.createElement('img');
//       const p = document.createElement('p');

//       img.src = canvas.toDataURL('image/png')
//       p.innerHTML = testo.value
//       div.onclick = "mostra(" + img.src + "," + testo.value + ")";

//       div.appendChild(img)
//       div.appendChild(p)

// }

/**
 * <div onclick="mostra('./img/prova2.png', 'ciao mondo, sono Homer Simpson')">
                    <img src="./img/prova2.png" alt="">
                    <p>ciao mondo, sono Homer Simpson</p>
                </div>
 */