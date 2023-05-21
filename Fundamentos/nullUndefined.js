let valor // nao inicializada
console.log(valor)

valor = null // ausencia de valor / ela nao aponta para nenhum obj na memoria, ela esta vazia
console.log(valor)

// console.log(valor.toString()) se for consultar um variavel com null vai retornar erro

const product = {}
console.log(product.preco)
console.log(product)

product.preco = 3.50
console.log(product)

product.preco = undefined // evitar usar undefined
console.log(!!product.preco)
// delete product.preto

product.preco = null // sem preco
console.log(!!product.preco)
console.log(product)