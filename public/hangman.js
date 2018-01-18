const word = document.querySelector('#word_input')
word.style.display = 'none'
const lines = document.querySelector('.play')
let wordLength = word.value - 1
for (let i = 0; i <= wordLength; i++){
  let line = document.createElement('div')
  line.classList.add('line')
  line.id = i
  lines.appendChild(line)

}

const letters = document.querySelector(".letters")
//creating alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
for(let e in alphabet){
  const letterBox = document.createElement('div')
  letterBox.id = alphabet[e]
  letterBox.className ='box'
  letterBox.textContent = `${letterBox.id}`
  letters.appendChild(letterBox)
}
//creating hidden form
const form = document.createElement('form')
form.id = "form_id"
form.style.display = 'none'
form.method = "post"
letters.appendChild(form)
const input = document.createElement('input')
input.id = "letter_input"
const button = document.createElement('button')
form.appendChild(input)
form.appendChild(button)


//selecting alphabet
function whichAlphabet(e){
  let oneAlphabet = e.target.id
  const inputReady = document.querySelector('#letter_input')
  inputReady.name = "clickedAlpha"
  inputReady.value = oneAlphabet
  document.getElementById('form_id').submit()
}
document.addEventListener('click', whichAlphabet)


const arr = document.querySelector('#arr')
arr.style.display = 'none'

matchingIndex()

function matchingIndex(){
  let letter = arr.name
  let arr_parse = JSON.parse(arr.value)
  //if (arr_parse !== nil){
  let keys = Object.keys(arr_parse)
    keys.forEach(function(k){
      arr_parse[k].forEach(function(v){
        const selectedLine = document.querySelector(`[id='${v}']`)
        const font = document.createElement('h2')
        font.textContent = k
        selectedLine.appendChild(font)
        console.log(selectedLine.textContent)
        // console.log(letter)
      })
    })
  //}
}

//building stick figure
const guessNum = document.querySelector('#guess')
guessNum.style.display = 'none'
const stick = document.querySelector('.stick')
const pole = document.createElement('div')
pole.setAttribute('style','float: left; width: 300px; height: 400px; margin-top: 200px; border-right: 1px solid black')
const hr = document.createElement('hr')
hr.setAttribute('style','transform: rotate(150deg) translateX(0px) translateY(-18px); width: 100px; float:right')
const head = document.createElement('div')
head.setAttribute('style','float: right; transform: translateX(40px) translateY(53px);width: 60px; height: 60px; border-radius: 40px; border: 1px solid black')
const bod = document.createElement('hr')
bod.setAttribute('style', 'width: 100px; transform: rotate(90deg) translateX(154px) translateY(-140px)')
const armLeft = document.createElement('hr')
armLeft.setAttribute('style','transform: rotate(130deg) translateX(12px) translateY(-173px); width: 50px;')
const armRight = document.createElement('hr')
armRight.setAttribute('style','transform: rotate(50deg) translateX(185px) translateY(-50px); width: 50px;')
const legLeft = document.createElement('hr')
legLeft.setAttribute('style','transform: rotate(130deg) translateX(75px) translateY(-220px); width: 60px;')
const legRight = document.createElement('hr')
legRight.setAttribute('style','transform: rotate(50deg) translateX(247px) translateY(0px); width: 60px;')
const base = document.createElement('hr')
base.setAttribute('style','width: 200px; transform: translateX(0px) translateY(610px); border: 1px solid black;')
switch(guessNum.value){
  case '0':
    stick.appendChild(base)
    break
  case '1':
    stick.appendChild(base)
    stick.appendChild(pole)
    break
  case '2':
    stick.appendChild(base)
    stick.appendChild(pole)
    pole.appendChild(hr)
    break
  case '3':
    stick.appendChild(base)
    stick.appendChild(pole)
    pole.appendChild(hr)
    pole.appendChild(head)
    break
  case '4':
    stick.appendChild(base)
    stick.appendChild(pole)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    break
  case '5':
    stick.appendChild(base)
    stick.appendChild(pole)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    pole.appendChild(armLeft)
    break
  case '6':
    stick.appendChild(base)
    stick.appendChild(pole)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    pole.appendChild(armLeft)
    pole.appendChild(armRight)
    break
  case '7':
    stick.appendChild(base)
    stick.appendChild(pole)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    pole.appendChild(armLeft)
    pole.appendChild(armRight)
    pole.appendChild(legLeft)
    break
  case '8':
    stick.appendChild(base)
    stick.appendChild(pole)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    pole.appendChild(armLeft)
    pole.appendChild(armRight)
    pole.appendChild(legLeft)
    pole.appendChild(legRight)
    break
}
