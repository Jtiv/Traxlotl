let body = document.querySelector(".body");
let container = document.querySelector(".container");
let base = document.querySelector(".base");

let imageFetcher = () => {
    return listOImages[Math.floor(Math.random()*listOImages.length)];
}

let removeHandler = (e) => {
    e.target.remove();
}

let clickHandler = (e) => {
     fetch("https://tronalddump.io/random/quote")
        .then(response => {       
        return response.json();
     })
     .then(data => {
         let elMod = document.createElement('div');
         elMod.classList.add("modal");
         elMod.textContent = `${data.value}`;
         elMod.style.backgroundImage = `url(${e.target.src})`; 
         elMod.addEventListener("click", removeHandler);
         e.target.parentElement.parentElement.appendChild(elMod);
         
         });
}

class DerpyImage{
    constructor(src, parentEl){
     let img = document.createElement('img');
        img.src = `${src}`;
        img.width = 300;
        img.height = 300;
        img.classList.add('img');
        img.addEventListener("click", clickHandler);
        parentEl.appendChild(img);
        this.img = img;
    }
}


for(let i=0; i < 9; i++){
    let newImage = new DerpyImage(imageFetcher(), container);
}



