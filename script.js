var a = 0;
var e = 0;



function adicao(){
    var n1 = parseInt(document.getElementById("n1").innerHTML);
    var n2 = parseInt(document.getElementById("n2").innerHTML);
    var resultado = parseInt(document.getElementById("resultado").value);
    var result = n1 + n2;
    
    if(result == resultado){
        alert('Você acertou!');
        a++;
        document.getElementById("acerto").innerHTML = a;
        document.getElementById("setaAcerto").innerHTML = "Acertou!!!";
        document.getElementById("setaErro").innerHTML = "";
    } else {
        alert('Você errou');
        e++;
        document.getElementById("erro").innerHTML = e;
        document.getElementById("result").innerHTML = "O resultado correto para a operação " + n1 + " + " + n2 + " é: " + result;
        document.getElementById("setaAcerto").innerHTML = "";
        document.getElementById("setaErro").innerHTML = "Errou!";
    }
    resetar();
}

function subtracao(){
    var n1 = parseInt(document.getElementById("n1").innerHTML);
    var n2 = parseInt(document.getElementById("n2").innerHTML);
    var resultado = parseInt(document.getElementById("resultado").value);
    var result = n1 - n2;
    
    if(result == resultado){
        alert('Você acertou!');
        a++;
        document.getElementById("acerto").innerHTML = a;
    } else {
        alert('Você errou');
        e++;
        document.getElementById("erro").innerHTML = e;
        document.getElementById("result").innerHTML = "O resultado correto para a operação " + n1 + " - " + n2 + " é: " + result;
    }
    resetar();
}

function multiplicacao(){
    var n1 = parseInt(document.getElementById("n1").innerHTML);
    var n2 = parseInt(document.getElementById("n2").innerHTML);
    var resultado = parseInt(document.getElementById("resultado").value);
    var result = n1 * n2;
    
    if(result == resultado){
        alert('Você acertou!');
        a++;
        document.getElementById("acerto").innerHTML = a;
    } else {
        alert('Você errou');
        e++;
        document.getElementById("erro").innerHTML = e;
        document.getElementById("result").innerHTML = "O resultado correto para a operação " + n1 + " x " + n2 + " é: " + result;
    }
    resetar();
}

function divisao(){
    var n1 = parseInt(document.getElementById("n1").innerHTML);
    var n2 = parseInt(document.getElementById("n2").innerHTML);
    var resultado = parseInt(document.getElementById("resultado").value);
    var result = n1 / n2;
    
    if(result == resultado){
        alert('Você acertou!');
        a++;
        document.getElementById("acerto").innerHTML = a;
    } else {
        alert('Você errou');
        e++;
        document.getElementById("erro").innerHTML = e;
        document.getElementById("result").innerHTML = "O resultado correto para a operação " + n1 + " / " + n2 + " é: " + result;
    }
    resetar();
}

function resetar(){
    document.getElementById("resultado").value = "";
    
    var r1 = Math.floor(Math.random()*100);
    document.getElementById("n1").innerHTML = r1;
    
    var r2 = Math.floor(Math.random()*100);
    document.getElementById("n2").innerHTML = r2;
    
    document.getElementById('resultado').focus();
}

function comecar(){
    document.getElementById("resultado").value = "";
    
    var r1 = Math.floor(Math.random()*100);
    document.getElementById("n1").innerHTML = r1;
    
    var r2 = Math.floor(Math.random()*100);
    document.getElementById("n2").innerHTML = r2;
    
    document.getElementById('resultado').focus();
    
    var operacao = document.getElementById("operacao1");
    var itemselecionado = operacao.options[operacao.selectedIndex].value;
    var mudar = document.getElementById("verificar");
    
    
    if (itemselecionado == 1){
        mudar.setAttribute('onclick', 'adicao()');
        document.getElementById("operacao").innerHTML = "+";
    }else if (itemselecionado == 2){    
        mudar.setAttribute('onclick', 'subtracao()');
        document.getElementById("operacao").innerHTML = "-";
    }else if (itemselecionado == 3){
        mudar.setAttribute('onclick', 'multiplicacao()');
        document.getElementById("operacao").innerHTML = "x";
    }else if (itemselecionado == 4){
        mudar.setAttribute('onclick', 'divisao()');
        document.getElementById("operacao").innerHTML = "/";
    }
}