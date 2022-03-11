let body = document.querySelector(".body");
let para = document.querySelector(".para");
console.log(body);
console.log(para);
const url = "https://tronalddump.io/random/quote"

let imageFetcher = () => {
    return listOImages[Math.floor(Math.random()*listOImages.length)]
}

console.log(imageFetcher());

let fetching = fetch(url)
    .then(response => {
        console.log(response);
        return response.json();})
    .then(data => {
        para.innerText = data.value;     
    });


