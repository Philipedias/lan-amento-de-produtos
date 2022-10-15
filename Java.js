window.addEventListener("load", function(event) {
    carregaData();
  });

function carregaData(){
    const dateAtual = new Date();
    const day = dataAtual.getDate();
    const months = dataAtual.getMonth();
    const year = dateAtual.getFullYear();

    var dataOk = day + "/" + months + "/" + year;

    document.getElementById("produto").focus();

}
function salvar(){
    
    var produto = document.getElementById('produro').valeu;
    var data = document.getElementById("data").value;
    var qtdd = document.getElementById("qtdd").value;
    if(produto == "" || data == "" || qtdd == ""){
        alert("Existe campos em branco, favor verrificar!");
        return;
    }    

    alert("O produto" + produto + "Foi Salvo com a quantidade" + qtdd + "no dia" + data);

    document.getElementById("produto").focus();
    limpaCampo();
}
function limpaCampo(){
    document.getElementById("produto").value = "";
    document.getElementById("data").value = "";
    document.getElementById("qtdd").valeu = "";

    document.getElementById('produto').focus();
}    
