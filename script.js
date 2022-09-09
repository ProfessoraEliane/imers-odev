function Converter() {
 var valorElemento = document.getElementById("valor");
 var valor = valorElemento.value;
 var valorEmRealNumerico = parseFloat(valor);
 var valorEmBitcoin = valorEmRealNumerico / 100689;
 console.log(valorEmBitcoin);
 var elementoValorConvertido = document.getElementById("valorConvertido");
 var valorConvertido = "Seus Reais valem " + valorEmBitcoin;
 elementoValorConvertido.innerHTML = valorConvertido;
}