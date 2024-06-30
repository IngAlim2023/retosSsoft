let img1 = document.getElementById("im-p");
let img2 = document.getElementById("im-s");
let parr1 = document.getElementById("parr-1");
let img3 = document.getElementById("im-t");
let img4 = document.getElementById("im-c");
let parr2 = document.getElementById("parr-2");
let img5 = document.getElementById("im-q");
let img6 =document.getElementById("im-si");
let parr3 = document.getElementById("parr-3");
let img7 = document.getElementById("im-se");
let img8 =document.getElementById("im-oc");
let parr4 = document.getElementById("parr-4");



img2.addEventListener('click', ()=>{
    img1.hidden=false;
    img2.hidden=true;
    parr1.hidden= false;

})
img1.addEventListener('click', ()=>{
    img2.hidden=false;
    img1.hidden=true;
    parr1.hidden= true;
})
img4.addEventListener('click', ()=>{
    img3.hidden=false;
    img4.hidden=true;
    parr2.hidden= false;

})
img3.addEventListener('click', ()=>{
    img4.hidden=false;
    img3.hidden=true;
    parr2.hidden= true;
})
img5.addEventListener('click', ()=>{
    img5.hidden = true;
    img6.hidden = false;
    parr3.hidden = false;
})
img6.addEventListener('click', ()=>{
    img5.hidden = false;
    img6.hidden = true;
    parr3.hidden = true;
})
img7.addEventListener('click', ()=>{
    img7.hidden = true;
    img8.hidden = false;
    parr4.hidden = false;
})
img8.addEventListener('click', ()=>{
    img7.hidden = false;
    img8.hidden = true;
    parr4.hidden = true;
})