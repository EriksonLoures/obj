// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'False' // contexto léxico 2
}

// Objeto sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Mogno',
        numero: 260

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)