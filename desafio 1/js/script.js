function limparCampos() {
    const campoResultado = document.querySelector('#resultado')
    campoResultado.setAttribute('placeholder', '')
}

const botaoLimpar = document.querySelector('[botao-limpa]')
botaoLimpar.onclick = limparCampos

//retorna um objeto com as letras da string e o numero de ocorrencias de cada letra
function contador(string) {
    const ocorrencias = {}

    for (let i in string) {
        const caractere = string[i]
        if (!ocorrencias[caractere]) {
            ocorrencias[caractere] = 0
        }
        ocorrencias[caractere]++
    }

    return ocorrencias
}


var campo = document.getElementById('campo')
var resultado = document.getElementById('resultado')
const botaoConfirma = document.querySelector('[botao-confirma]')

botaoConfirma.addEventListener('click', function (e) {
    var arrayFinal = []
    const valor = campo.value //valor digitado no campo
    const objeto = contador(valor) //retorna um objeto com as letras da string e o numero de ocorrencias de cada letra

    const tamanho = campo.value.length
    if (tamanho < 2) {
        alert("Você precisa digitar pelo menos 2 letras")
        resultado.setAttribute('placeholder', '--')
    }


    //percorre o objeto e se o numero de ocorrencias de uma letra for par ela sera adicionada no arrayFinal
    Object.entries(objeto).forEach(([chave, valor]) => {
        if (valor % 2 === 0) {
            arrayFinal.push(chave)
        }
    })


    //se o arrayFinal só tiver uma letra então quer dizer que apenas uma letra apareceu um numero par de vezes
    if (arrayFinal.length == 1) {
        var letra = arrayFinal.pop(1)
        resultado.setAttribute('placeholder', letra)
    } else {
        resultado.setAttribute('placeholder', '--')
    }


});

function soLetras(e) {
    key = e.keyCode || e.wich

    teclado = String.fromCharCode(key)

    //letras aceitas
    letras = "abcdefghijklmnopqrstuvwxyz"

    //caracteres especiais aceitos: 8 = backspace; 37 e 39 = setas esquerda e direita e 46 = delete
    especiais = "8-37-39-46"

    tecladoEspecial = false

    for (let i in especiais) {
        if (key == especiais[i]) {
            tecladoEspecial = true
            break
        }
    }

    //testando se o que for capturado pelo teclado nao se encontra em letras e nem nas teclas especiais
    if (letras.indexOf(teclado) == -1 && !tecladoEspecial) {
        return false
    }

}

//fazer aparecer o cartao de descricao quando clica na foto redonda do topo
var imagemTopo = document.getElementById('imagem')

imagemTopo.addEventListener('click', function (e) {
    const classes = document.getElementById('cartao').classList

    if (classes.contains('cartao-none')) {
        classes.remove('cartao-none')
        classes.add('cartao-true')
    } else {
        classes.remove('cartao-true')
        classes.add('cartao-none')
    }

})
