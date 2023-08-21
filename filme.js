// 2) faça uma página de cadastramento de filmes onde o usuario possa salvar um filme e suas informações como nome, descrição,data, diretor e categoria e liste ela de alguma forma em algum elemento HTML!
var inputFilme = document.querySelector("#nomeFilme");
var inputAnoLancamento = document.querySelector("#anoLancamento");
var inputDiretor = document.querySelector("#diretor");
var inputGenero = document.querySelector("#genero");
var inputSinopse = document.querySelector("#sinopse");
var btnCadastrar = document.querySelector("#btnCadastrar");
var btnVerFilmes = document.querySelector("#btnVerFilmes");


//Contrutor(mode) pré definido para criação de OBJETOS
class Filme{
    constructor(nomeFilme,anoLancamento,diretor,genero,sinopse){
        this.nomeFilme = nomeFilme;
        this.anoLancamento = anoLancamento;
        this.diretor = diretor;
        this.genero = genero;
        this.sinopse = sinopse; 
    }
}

//Criando ARRAY de filmes
var filmes = [
    new Filme("Poderoso chefão","1972","Francis Ford Coppola","Drama","O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante."),
    new Filme("O jogo da imitação","2014","Morten Tyldum","Drama","Durante a segunda guerra mundial, um inglês gênio da matemática tenta decifrar o código alemão Enigma com a ajuda de seus colegas."),
    new Filme("Snowden: Herói ou Traidor","2016","Oliver Stone","Biografia","As técnicas ilegais da vigilância do NSA são filtradas ao público por um empregado deles, Edward Snowden, em forma de documentos classificados e dados a prensa.")
];

btnCadastrar.addEventListener("click",()=>{

        // Validando para que nenhum campo vazio seja enviado para o array
        if(inputFilme.value == "" || inputFilme.value == undefined || inputFilme.value == null){
            alert("Por favor digite o nome do filme");
        }else if(inputAnoLancamento.value == "" || inputAnoLancamento.value == null || inputAnoLancamento.value == undefined){
            alert("Por favor digite a data de lancamento")
        }else if(inputDiretor.value == "" || inputDiretor.value == undefined || inputDiretor.value == null){
            alert("Por favor digite o nome do diretor");
        }else if(inputGenero.value == "" || inputGenero.value == undefined || inputGenero.value == null){
            alert("Por favor digite o gênero");
        }else if(inputSinopse.value == "" || inputSinopse.value == undefined || inputSinopse.value == null){
            alert("Por favor insira a sinopse"); 
    
        }else{
            alert("Tem certeza que todas as informações estão corretas?")
            //Caso todos campos estejam preenchidos empurrar o OBJETO no ARRAY
            let nomeFilme = inputFilme.value;
            let anoFilme = inputAnoLancamento.value;
            let nomeDiretor = inputDiretor.value;
            let genero = inputGenero.value;
            let sinopse = inputSinopse.value;
            filmes.push(new Filme(nomeFilme,anoFilme,nomeDiretor,genero,sinopse));
        
            alert("Filme cadastrado com sucesso!");
            //Após o filme ser cadastrado, apagar todos os campos para inserção de novo filme
            function apagarCampos(){
                inputFilme.value = "";
                inputAnoLancamento.value = "";
                inputDiretor.value = "";
                inputGenero.value = "";
                inputSinopse.value = "";
            }
        apagarCampos();
        
    }
})

var filmeCadastrado = document.querySelector("#filmeCadastrado");

btnVerFilmes.addEventListener("click",()=>{
    window.location.href = "file:///C:/Users/Aluno%20Manh%C3%A3/Desktop/PL/js/objetos/cadastrar-filmes-js/home.html";
    filmeCadastrado.innerHTML = `Nome: ${inputFilme.value}`
    
})

console.log(filmes);






