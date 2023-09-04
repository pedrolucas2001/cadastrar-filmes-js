// 2) faça uma página de cadastramento de filmes onde o usuario possa salvar um filme e suas informações como nome, descrição,data, diretor e categoria e liste ela de alguma forma em algum elemento HTML!
var inputFilme = document.querySelector("#tituloFilme");
var inputAnoLancamento = document.querySelector("#anoLancamento");
var inputDiretor = document.querySelector("#diretor");
var inputGenero = document.querySelector("#genero");
var inputSinopse = document.querySelector("#sinopse");
var btnAdicionar = document.querySelector("#btnAdicionar");



//Contrutor(mode) pré definido para criação de OBJETOS
class Filme{
    constructor(tituloFilme,anoLancamento,diretor,genero,sinopse){
        this.tituloFilme = tituloFilme;
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



function verListaDeFilmes(){
    let listaFilmes = document.querySelector("#lista-filmes");
    let novaLinha = document.createElement("tr");

   filmes.forEach(filme => {
        novaLinha = ` 
          <td>${filme.tituloFilme}</td>
          <td>${filme.diretor}</td>
          <td>${filme.anoLancamento}</td>
          <td>${filme.genero}</td>
          <td><a href='#' class='btn delete'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
            </svg>
            </a></td> 
        `;
        listaFilmes.innerHTML += novaLinha;
   }); 
}





// filmes.forEach(element => {
    
// });
// novaLinha.innerHTML  = 
// listaFilmes.appendChild(novaLinha);

btnAdicionar.addEventListener("click",()=>{

        // Validando para que nenhum campo vazio seja enviado para o array
        if(tituloFilme.value == "" || tituloFilme.value == undefined || tituloFilme.value == null){
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
            
            //Caso todos campos estejam preenchidos empurrar o OBJETO no ARRAY
            let tituloFilme = inputFilme.value;
            let anoFilme = inputAnoLancamento.value;
            let nomeDiretor = inputDiretor.value;
            let genero = inputGenero.value;
            let sinopse = inputSinopse.value;

            filmes.push(new Filme(tituloFilme,anoFilme,nomeDiretor,genero,sinopse));
        
            alert("Filme cadastrado com sucesso!");

            //Após o filme ser cadastrado, apagar todos os campos para inserção de novo filme
            function apagarCampos(){
                inputFilme.value = "";
                inputAnoLancamento.value = "";
                inputDiretor.value = "";
                inputGenero.value = "";
                inputSinopse.value = "";
            }
            
        

            verListaDeFilmes();
            apagarCampos();
            
    }
})









