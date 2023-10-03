let num1 = document.getElementById("num1") 
let operador = document.getElementById("operador")
let num2 = document.getElementById("num2")
let btnCalcular = document.getElementById("calcular")
let divRes = document.getElementById("resultado")

function operator(){
    if (operador.value == "-"){
        resultado = parseInt(num1.value) - parseInt(num2.value)
    }
    else if (operador.value == "*"){
    resultado = parseInt(num1.value) * parseInt(num2.value)
    }
    else if (operador.value == "/"){
    resultado = parseInt(num1.value) / parseInt(num2.value)
    }
    else if (operador.value == "+"){
     resultado = parseInt(num1.value) + parseInt(num2.value)
    }
    else{
        alert("Inicialice correctamente la calculadora")
    }
}

btnCalcular.addEventListener("click", function(){
 
if (num1.value.length == 0 || num2.value.length == 0){
    alert("Inicialice la calculadora correctamente")
}
else {
    operator()
    divRes.innerHTML = `<h2> El resultado es: ${resultado} </h2>`
}
})
  
