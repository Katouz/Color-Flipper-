const btn = document.getElementById("btn");
const color = document.querySelector(".color");
generateHex();
btn.addEventListener("click", () => {
    generateHex();
});
function generateHex(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+randomColor;
    color.textContent = "#"+randomColor;
}