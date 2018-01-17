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
  console.log(arr_parse)
  //if (arr_parse !== nil){
    for (let num in arr_parse){
      const selectedLine = document.querySelector(`[id='${arr_parse[num]}']`)
      const font = document.createElement('h2')
      font.textContent = letter
      selectedLine.appendChild(font)
      console.log(selectedLine.textContent)
      console.log(letter)
    }
  //}
}
