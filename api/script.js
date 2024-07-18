const apiUrl = "https://rickandmortyapi.com/api/character";
let btn = document.getElementById('ObtApi');

async function getCharacters (){
    try{
        const response = await fetch(apiUrl);
        const resultApi = await response.json(); 
        console.log(resultApi);
    }
    catch(error){
        console.error(error)
    }

    

}

btn.addEventListener('click', ()=>{
    return getCharacters();
})