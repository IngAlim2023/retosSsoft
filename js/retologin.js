let foto = document.getElementById("foto");
let inp = document.getElementById("name-f");
let inp2 = document.getElementById("name-s");
let boton = document.getElementById("btn-n");
let mod = document.querySelector("#modal");
let cierro = document.getElementById("close-modal");

foto.addEventListener('mouseover', ()=>{ 
    document.getElementById("foto").src="./assets/img/login/fotoH.jpg"    
});
foto.addEventListener('mouseleave', ()=>{ 
    document.getElementById("foto").src="./assets/img/login/fotoM.jpg"    
});


inp.addEventListener('mouseover', ()=>{ 
    document.getElementById("name-f").style="border-color: black; border-width: 5px; color: white; background-color: hsl(217, 54%, 11%) ;"    
});
inp.addEventListener('mouseleave', ()=>{ 
    document.getElementById("name-f").style ="background-color: white ; color: grey;"    
});

inp2.addEventListener('mouseover', ()=>{ 
    document.getElementById("name-s").style="border-color: black; border-width: 5px; color: white; background-color: hsl(217, 54%, 11%) ;"    
});
inp2.addEventListener('mouseleave', ()=>{ 
    document.getElementById("name-s").style ="background-color: white ; color: grey;"    
});

boton.addEventListener('mouseover', ()=>{ 
    document.getElementById("btn-n").style ="background-color: hsl(217, 54%, 11%) ; color: hsl(215, 51%, 70%);"    
});
boton.addEventListener('mouseleave', ()=>{ 
    document.getElementById("btn-n").style ="background-color: hsl(215, 51%, 70%); color: hsl(217, 54%, 11%);"    
});

boton.addEventListener('click', ()=>{ 
    let uno = inp.value;
    let dos = inp2.value;
    document.getElementById("campos").innerHTML = "<p id='nombre'></p> <p id='apellido'></p>"
    
    document.getElementById("nombre").textContent = uno;
    document.getElementById("apellido").textContent = dos;
    mod.showModal();
    
});

cierro.addEventListener('click', ()=>{
    mod.close();
})