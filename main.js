const cks = document.querySelectorAll(".opcao")
const b = document.querySelector("#bt")
const size = document.querySelector('#length')

b.addEventListener('click', (e) => {
    e.preventDefault();
    if (validacao()) {
        const checked_boxes = restricao()
        console.log(criaSenha(size.value, checked_boxes))
    }
})

function restricao() {
    const list = []
    cks.forEach((ck) => {
        if (ck.checked === true) {
            list.push(ck.parentElement.innerText)
        }
    })
    return list
}

function validacao() {

    if (size.value > 0 || size.value < 30) {
        return true
    } else {
        alert('a senha tem que estar entre 0 e 30 caracteres')
        return false
    }

}

function criaSenha(size1, checked_boxes) {


    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const especiais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', ';', ':', '<', '>', ',', '.', '?', '/'];
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const hash_map = {
        'Letra maiuscula': ABC,
        'Letra minuscula': abc,
        'Caracter especial': especiais,
        'Numero': numeros
    }

    const geral = checked_boxes

    const random = (arrSize) => Math.floor(Math.random() * arrSize);// gera um num do tamanho da array

    let contador = 0
    let senha = ''
    while (contador < size1) {
        const choosen_arr = geral[random(geral.length)]
        const arr = hash_map[choosen_arr]

        senha = senha + arr[random(arr.length)]

        contador++
    }

    return senha
}