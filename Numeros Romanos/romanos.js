const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero1 = frm.Numero.value
    let numero = numero1.toUpperCase()
    let conv = 0
    for (let index = 0; index < numero.length; index++) {
        if (numero[index].includes("I")){
            conv += 1
        }
        if (numero[index].includes("V")){
            if (numero[index-1].includes("I")){
                conv += 3
            }else{
                conv += 5
            }
        }
        if (numero[index].includes("X")){
            conv += 10
        }
        if (numero[index].includes("L")){
            conv += 50
        }
        if (numero[index].includes("C")){
            conv += 100
        }
        if (numero[index].includes("D")){
            conv += 500
        }
        if (numero[index].includes("M")){
            conv += 1000
        }
        
    }
    resp.innerText = conv
})