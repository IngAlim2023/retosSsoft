let sp = document.getElementById("d-splash");
let iniciar = document.getElementById("entrada");

window.addEventListener('load', ()=>{
    sp.showModal();
    iniciar.style.display= 'none';
    setTimeout(() => {
        sp.style.display = 'none';
        iniciar.style.display = 'block';
    }, 5000);

})