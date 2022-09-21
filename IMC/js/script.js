function calculaIMC (){
    event.preventDefault()
    //Criando as variáveis do projeto
    var altura=document.getElementById('altura').value
    var peso=document.getElementById('peso').value
    //alert(`O peso é ${peso} e a altura é ${altura}`)
    var imc= peso / (altura*altura)
    var resultado = ""
    if (imc < 18.5) {
        resultado ='Abaixo do peso!'
    }else if (imc >=18.5 && imc <=24.9){
        resultado ='Dentro do peso'
    }else if (imc >=25 && imc <=29.9){
        resultado='Sobrepeso'
    }else if(imc >=30){
        resultado ='Obesidade'
    }
    document.getElementById('resultado').value = resultado
}