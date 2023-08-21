async function API() {
    const banda = document.getElementById("banda").value
    const url = `https://www.vagalume.com.br/${banda}/index.js`
    const dados = await fetch(url);
    console.log(dados);
    const musicas = await dados.json();
    console.log(musicas);
    let albuns = document.getElementById("albuns")
    let album = document.createElement("h2")
    let generos = document.createElement("h2")
    generos.innerText = "Generos"
    album.innerText = "Albuns"
    albuns.appendChild(album)
    albuns.appendChild(generos)

    for (let i = 0;i < musicas.artist.albums.item.length;i++){  
        let li = document.createElement('li')
        li.innerText = musicas.artist.albums.item[i].desc
        albuns.appendChild(li)
    }
    for (let i = 0;i < musicas.artist.genre.length;i++){  
        let li = document.createElement('li')
        li.innerText = musicas.artist.albums.genre[i].name
        albuns.appendChild(li)
    }
}