const letters = document.querySelector(".letters")

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
for(let e in alphabet){
  const letterBox = document.createElement('div')
  letterBox.id = alphabet[e]
  letterBox.className ='box'
  letterBox.textContent = `${letterBox.id}`
  letters.appendChild(letterBox)
}
const form = document.createElement('form')
form.id = "form_id"
form.style.display = 'none'
letters.appendChild(form)
const input = document.createElement('input')
const button = document.createElement('button')
form.appendChild(input)
form.appendChild(button)


function whichAlphabet(e){
  let oneAlphabet = e.target.id
  const inputReady = document.querySelector('input')
  inputReady.name = "clickedAlpha"
  inputReady.value = oneAlphabet
  document.getElementById('form_id').submit()
}
document.addEventListener('click', whichAlphabet)
