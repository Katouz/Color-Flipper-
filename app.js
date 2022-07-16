const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const color2 = document.querySelector(".color2");
generateHex();
btn.addEventListener("click", generateHex);
function generateHex(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = `linear-gradient(to right, #${randomColor}, #${randomColor2})`;
    color.textContent = "#"+randomColor;
    color2.textContent = "#"+randomColor2;
}