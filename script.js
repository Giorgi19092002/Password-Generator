let pwEl = document.getElementById('pw')
let copyEl = document.getElementById('copy')
let lenEl = document.getElementById('passw')
let upperEl = document.getElementById('upper')
let lowerEl = document.getElementById('lower')
let numberEl = document.getElementById('number')
let symbolEl = document.getElementById('symbol')
let generateEl = document.getElementById('generate')


const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuwxyz'
const numbers = '1234567890'
const symbols = '!@#$%^&*()<>,.?/{]}[|+-=_~'


let getLowerCase = () => {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}


let getUpperCase = () => {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}


let getNumber = () => {
    return numbers[Math.floor(Math.random() * numbers.length)]
}


let getSymbol = () => {
    return symbols[Math.floor(Math.random() * symbols.length)]
}


let generatePassword = () => {
    const len = lenEl.value

    let password = ''

    if(upperEl.checked){
        password += getUpperCase()
    }
    if(lowerEl.checked){
        password += getLowerCase()
    }
    if(numberEl.checked){
        password += getNumber()
    }
    if(symbolEl.checked){
        password += getSymbol()
    }

    for(let i = 0 ; i < len ; i++){
        const x = generateX()
        password += x
    }

    pwEl.innerText = password
}

let generateX = () => {
    let xs =[]

    if(upperEl.checked){
        xs.push(getUpperCase())
    }
    if(lowerEl.checked){
        xs.push(getLowerCase())
    }
    if(numberEl.checked){
        xs.push(getNumber())
    }
    if(symbolEl.checked){
        xs.push(getSymbol())
    }

    if(xs.length === 0) return ''

    return xs[Math.floor(Math.random() * xs.length)]
}


generateEl.addEventListener('click',generatePassword)