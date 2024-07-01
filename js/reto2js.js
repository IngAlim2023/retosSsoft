let valor = 0;
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tre = document.getElementById("tre");
let cua = document.getElementById("cua");
let cin = document.getElementById("cin");
let boton = document.getElementById("btn-btn");
let calif = document.getElementById("calificacion");
let mod = document.getElementById("modal");
let closeer = document.getElementById("clo")

uno.addEventListener('click', ()=>{
    valor = 1;
    uno.style = "background-color: white";
}
)
dos.addEventListener('click', ()=>{
    valor = 2;
    dos.style = "background-color: white";
}
)
tre.addEventListener('click', ()=>{
    valor = 3;
    tre.style = "background-color: white";
}
)
cua.addEventListener('click', ()=>{
    valor = 4;
    cua.style = "background-color: white";
}
)
cin.addEventListener('click', ()=>{
    valor = 5;
    cin.style = "background-color: white";
}
)
boton.addEventListener('click', ()=>{
    calif.textContent = valor;
    mod.showModal();
})
closeer.addEventListener('click', ()=>{
    mod.close();
})