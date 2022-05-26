

// https://www.omdbapi.com/?apikey=c8123887&t=antman

async function getMovie(){
    // omdb url = http://www.omdbapi.com/?apikey=[yourkey]&;
    let movie = document.getElementById("search_movie").value;
    const url =`https://www.omdbapi.com/?apikey=c8123887&t=${movie}`
   
    try{
       
        let res = await fetch(url);
        let movieData = await res.json();
        console.log(movieData);
        append(movieData)
      
    }catch(err){
        console.log("err",err);
    }
}
function append(data){
    let container =document.getElementById('container');
    container.innerHTML = null;

    let div =document.createElement("div");

    let img = document.createElement("img");
    img.src = data.Poster;

    let h2 = document.createElement("h2");
    h2.innerText = data.Title;
    h2.style.color = "white"

    div.append(img, h2);
    container.append(div);
}