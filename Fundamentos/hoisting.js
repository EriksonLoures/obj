
// ou se colocar dentro de uma function o resultado vai ser o mesmo

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
console.log('a =', a)

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log()
