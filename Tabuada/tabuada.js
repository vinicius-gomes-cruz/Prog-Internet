const frm = document.querySelector("form")
const num = document.querySelector("inNumero")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let resp1 = ""
    const num1 = Number(frm.inNumero.value)
    let soma = 0

    for (let index = 1; index <= 10; index++) {
        resp1 += num1 + " X " + index + " = " + num1*index + "\n"
        soma += num1*index
    }
    resp.innerText = resp1
    resp.innerText += "Soma Total : " + soma
})