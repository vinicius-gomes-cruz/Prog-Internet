const triang = document.querySelector("form")
const resp = document.querySelector("h3")

triang.addEventListener("submit", (e) => {
    e.preventDefault();

    const lad1 = Number(triang.lado1.value);
    const lad2 = Number(triang.lado2.value);
    const lad3 = Number(triang.lado3.value);
    

    if (lad1 <= lad2 + lad3 || lad2 <= lad1 + lad3 || lad3 <= lad1 + lad2){
        if (lad1 == lad2 && lad2 == lad3) {
            resp.innerText = "Equilátero"
            resp.style.color = "red"
        }else if(lad1 == lad2 || lad1 == lad3 || lad2 == lad3){
            resp.innerText = "Isóceles"
            resp.style.color = "blue"
        }else{
            resp.innerText = "Escaleno"
            resp.style.color = "green"
        }
    }
})  