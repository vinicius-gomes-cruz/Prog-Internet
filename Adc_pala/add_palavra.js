const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let texto = (frm.Texto.value)
    let vetor_string = texto.split(";")
    let vetor = []

    for (let index2 = 0; index2 < vetor_string[0].length; index2++) {
        for (let index1 = 2; index1 < vetor_string.length; index1++) {
            let numero = Number(vetor_string[index1])
            if (index2 == numero){
                vetor.push(vetor_string[1] + " ")
            }
    }
    vetor.push(texto[index2])
        
    }

    resp.innerText = vetor.join("")
})