// 2) faça uma página de cadastramento de filmes onde o usuario possa salvar um filme e suas informações como nome, descrição,data, diretor e categoria e liste ela de alguma forma em algum elemento HTML!
var inputFilme = document.querySelector("#nomeFilme");
var inputDtLancamento = document.querySelector("#dtLancamento");
var inputDiretor = document.querySelector("#diretor");
var inputGenero = document.querySelector("#genero");
var inputSinopse = document.querySelector("#sinopse");
var btnCadastrar = document.querySelector("#btnCadastrar");

var filmes = [];
class Filme{
    constructor(nomeFilme,dtLancamento,diretor,genero,sinopse){
        this.nomeFilme = nomeFilme;
        this.dtLancamento = dtLancamento;
        this.diretor = diretor;
        this.genero = genero;
        this.sinopse = sinopse; 
    }
}

btnCadastrar.addEventListener("click",cadastrarFilme)

function cadastrarFilme(){
    if(inputFilme.value == "" || inputFilme.value == undefined || inputFilme.value == null){
        alert("Por favor digite o nome do filme");
    }else if(inputDtLancamento.value == "" || inputDtLancamento == null || inputDtLancamento == undefined){
        alert("Por favor digite a data de lancamento")
    }else if(inputDiretor.value == "" || inputDiretor.value == undefined || inputDiretor.value == null){
        alert("Por favor digite o nome do diretor");
    }else if(inputGenero.value == "" || inputGenero.value == undefined || inputGenero.value == null){
        alert("Por favor digite o gênero");
    }else if(inputSinopse.value == "" || inputSinopse.value == undefined || inputSinopse.value == null){
        alert("Por favor insira a sinopse"); 

    }else{
        filmes.push(new Filme(inputFilme.value,inputDtLancamento.value,inputDiretor.value,inputGenero.value,inputSinopse.value));
        console.log(filmes);
        alert("Filme cadastrado com sucesso!");

        function apagarCampos(){
            inputFilme.value = "";
            inputDtLancamento.value = "";
            inputDiretor.value = "";
            inputGenero.value = "";
            inputSinopse.value = "";
        }

        apagarCampos();
    
    }
}





