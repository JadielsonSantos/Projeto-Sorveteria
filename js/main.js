var mensagens = document.getElementById("mensagens");
var numero = document.getElementById("numero");
function gera() {
	var url = document.getElementById("url");
	var pronto = mensagens.value;
	var ulrpronta = pronto.replace(/ /g, '%20')
	var api =  `https://api.whatsapp.com/send?phone=55${numero.value}&text=${ulrpronta}`;
	url.href = api
	url.innerHTML = api;
}