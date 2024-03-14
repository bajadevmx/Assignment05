let inum

//STEP 1
function main() {
     inum= prompt("Enter a number:")
    halfNumber(inum)
    console.log(`Half of ${inum}  is: ${result} `)
}

function halfNumber(inum) {
let result= inum / 2
return result
}

//STEP 2
function main() {
     inum= prompt("Enter a number:")
    squareNumber(inum)
    console.log(`The result of squaring the number ${inum}  is: ${result} `)
}

function squareNumber(inum) {
let result= inum ** 2
return result
}

//STEP 3
function main() {
    inum= prompt("Enter a number:")
    let inum2= prompt("Enter a second number: ")

     percentOf(inum, inum2)
    console.log(`${inum}  is ${result} of ${inum2}`)
}

function percentOf(inum, inum2) {
let result= ((inum2-inum)/ (inum)) * 100
return result
}

//STEP 4
function main() {
    inum= parseInt(prompt("Enter a number:"))
    let inum2= parseInt(prompt("Enter a second number: "))

     findModulus(inum, inum2)
    console.log(`${result}  is the modulus of ${inum} and ${inum2}`)
}

function findModulus(inum, inum2) {
let result= (inum % inum2)
return result
}
