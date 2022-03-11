let body = document.querySelector(".body");
let container = document.querySelector(".container");
console.log(body);

let imageFetcher = () => {
    return listOImages[Math.floor(Math.random()*listOImages.length)];
}

let clickHandler = (e) => {
     fetch("https://tronalddump.io/random/quote")
        .then(response => {       
        return response.json();
     })
     .then(data => {
      //e.target.element.innerText = data.value;
         console.log(data.value);
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



