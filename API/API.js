async function API() {
    const banda = document.getElementById("banda").value
    const url = `https://www.vagalume.com.br/${banda}/index.js`
    const dados = await fetch(url);
    console.log(dados);
    const musicas = await dados.json();
    console.log(musicas);

    document.getElementById(albuns).value = musicas.artist.albums.item[0].desc

}