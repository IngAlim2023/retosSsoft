const apiUrl = "https://rickandmortyapi.com/api/character";
let btn = document.getElementById('ObtApi');
let cuerp = document.getElementById('cuerpo');

async function getCharacters (){
    try{
        const response = await fetch(apiUrl);
        const resultApi = await response.json(); 
        console.log(resultApi);
        contruir(resultApi);
    }
    catch(error){
        console.error(error)
    }

    

}

btn.addEventListener('click', ()=>{
    return getCharacters();
});

function contruir (resultApi){
    const longitud = resultApi.results.length;

    for (let i=0; i<longitud; i++){
        
        let headhtml = document.createElement('h1');
        headhtml.innerText = resultApi.results[i].name;
        cuerp.appendChild(headhtml);
        let imagenes = document.createElement('img');
        imagenes.src = resultApi.results[i].image;
        cuerp.appendChild(imagenes);
    }
    
}