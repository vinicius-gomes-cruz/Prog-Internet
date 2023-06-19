const frm = document.querySelector("form")
const palavra = document.querySelector("inPalavra")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (event) => {
    event.preventDefault()
    let a = 0
    let e = 0
    let i = 0
    let o = 0
    let u = 0

    let resposta = ""
    const texto1 = (frm.inPalavra.value)
    let texto = texto1.toLowerCase()
    let vetor = texto.split(" ")
    let tam = vetor.length

    if (tam >= 4){
        for (let index = 0; index < texto.length; index++) {
            if (texto[index] == "a"){
                a += 1
            }
            if (texto[index] == "e"){
                e += 1
            }
            if (texto[index] == "i"){
                i += 1
            }
            if (texto[index] == "o"){
                o += 1
            }
            if (texto[index] == "u"){
                u += 1
            }
        }
        resposta += "A = " + a + "\n"
        resposta += "E = " + e + "\n"
        resposta += "I = " + i + "\n"
        resposta += "O = " + o + "\n"
        resposta += "U = " + u + "\n"
        resp.innerText = resposta
    }else{
        resp.innerText = "Precisa de 4 palavras"
    }
})