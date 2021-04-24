/*
function soma (n1, n2){
return n1 + n2;
}
alert(soma(5,10));

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Amo Star Wars", "Star Wars", "Star Trek"));
*/

/*
//Diferenciando variáveis global
var validar = 0;
function validaIdade(idade){ 
//Usando a varíavel global
//validar;

//Usando a variável local
var validar;

if (idade >=18){
validar = true 
}else{
    validar = false
}
return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade)
	console.log(validar);
*/

/*
function clicou(){
//alert("Obrigado por clicar");
document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
//console.log(document.getElementById("agradecimento"));
}
*/

/*
//Redirecioando para um site
function redirecionar(){
//Abre em outra aba do navegador
window.open("https://digitalinnovation.one/");
//Abre na mesma janela do navegador
window.location.href = "https://globallabs.academy/";
}
*/

//Trocando elementos
//Primeira possibilidade
/*
function trocar(){
//alert("trocar texto");
document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
}

//Voltando com os elementos
function voltar() {
document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
   }
*/   


//Segunda possibilidade usando agora o elemento
function trocar(elemento){
elemento.innerHTML = "obrigado por passar o mouse";
}

function voltar(elemento) {
elemento.innerHTML = "passe o mouse aqui";
    }




//Chamar a função de página carregada
function load() {
    alert("pagina carregada");
}


//Mostrando opções na tela
function funcaoChange(elemento) {
    console.log(elemento.value);
}
