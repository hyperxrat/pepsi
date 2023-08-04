const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const main = document.querySelector(".coffee")
const circle = document.getElementById("green_cricle");

img1.onclick=change1;
function change1(){
    main.src="img5.png";
}

img2.onclick=change2;
function change2(){
    main.src="img6.png"
}

img3.onclick=change3;
function change3(){
    main.src="img7.png"
}