function gerar() {
var numero=document.getElementById('txtn')
var tabuada=document.getElementById('txttab')
if (numero.value.length == 0) {
    window.alert('[ERRO] verifique seus dados e tente novamente')
    tabuada.innerHTML=''
} else {
    var number=Number(numero.value)
    tabuada.innerHTML=''
    for ( var operacao= 1; operacao<=10; ++operacao) {
        var item=document.createElement('option')
        item.text =`${number} X ${operacao} = ${number*operacao}`
        tabuada.appendChild(item)
    }
}
}