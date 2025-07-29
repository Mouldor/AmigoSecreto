let listaNome = [];

// armazena os nomes

function adicionarAmigo() { 
    let amigo = (document.querySelector('input').value);

    if (!validaEntrada(amigo)) { 
        listaNome.push(amigo);
        console.log(listaNome);
        mostraLista();
        document.querySelector('input').value = "";


    }


    //permitir digitar no campo o nome e ao apertar o botao inserir o nome no array
}
function mostraLista(){
    let listaNaTela = document.querySelector("#listaAmigos");
        listaNaTela.innerHTML = "";
        for (let nome of listaNome) {
            let mostraLista = document.createElement("li");
            mostraLista.textContent = nome;
            listaNaTela.appendChild(mostraLista);
        }
}

function validaEntrada(nome) {
    if (nome === "" || nome === null || nome.length === 0) {
        alert("Por favor, insira um nome");
        return true;
    }
    return false
}
function sortearAmigo() {
    if (listaNome.length === 0) {
    let texto = document.querySelector("#resultado");
    texto.innerHTML = "Não há amigos para sortear.";
    return;
}
    //pegar um indice do array aleatoriamente e printa o mesmo na tela
    let pegaNome = Math.floor(Math.random() * listaNome.length );
    let nomeSorteado = listaNome[pegaNome];
    let sorteado = document.querySelector("#resultado");
    sorteado.innerHTML = (nomeSorteado);

}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});