const word = document.querySelector('#word_input')
word.style.display = 'none'
//creating blank lines
const lines = document.querySelector('.play')
let wordLength = word.value - 1
for (let i = 0; i <= wordLength; i++){
  let line = document.createElement('div')
  line.classList.add('line')
  line.id = i
  lines.appendChild(line)
}

//selecting alphabet
function whichAlphabet(e){
  if (e.keyCode >= 65 && e.keyCode <= 90){
    $.post("/hangman", {clickedAlpha: e.key}).done(function(){
      location.reload()
    })
  }
}

document.addEventListener('keydown', whichAlphabet)

const arr = document.querySelector('#arr')
arr.style.display = 'none'
let letter = arr.name
let arr_parse = JSON.parse(arr.value)

matchingIndex()

function matchingIndex(){
  let keys = Object.keys(arr_parse)
    keys.forEach(function(k){
      arr_parse[k].forEach(function(v){
        const selectedLine = document.querySelector(`[id='${v}']`)
        const font = document.createElement('p')
        font.textContent = k
        selectedLine.appendChild(font)
      })
    })
}


//building stick figure
const guessNum = document.querySelector('#guess')
guessNum.style.display = 'none'
const stick = document.querySelector('.stick')
const pole = document.createElement('div')
pole.setAttribute('style','float: left; width: 100%; height: 400px; margin-top: 20px')
const poleLine = document.createElement('hr')
poleLine.setAttribute('style','width: 350px; transform: rotate(90deg) translateX(195px) translateY(-70px)')
const hr = document.createElement('hr')
hr.setAttribute('style','transform: rotate(150deg) translateX(-10px) translateY(-50px); width: 80px;')
const head = document.createElement('div')
head.setAttribute('style','transform: translateX(200px) translateY(53px);width: 60px; height: 60px; border-radius: 40px; border: 1px solid black')
const bod = document.createElement('hr')
bod.setAttribute('style', 'width: 100px; transform: rotate(90deg) translateX(92px) translateY(0px)')
const armLeft = document.createElement('hr')
armLeft.setAttribute('style','transform: rotate(130deg) translateX(50px) translateY(-20px); width: 50px;')
const armRight = document.createElement('hr')
armRight.setAttribute('style','transform: rotate(50deg) translateX(40px) translateY(15px); width: 50px;')
const legLeft = document.createElement('hr')
legLeft.setAttribute('style','transform: rotate(130deg) translateX(117px) translateY(-73px); width: 60px;')
const legRight = document.createElement('hr')
legRight.setAttribute('style','transform: rotate(50deg) translateX(107px) translateY(65px); width: 60px;')
const base = document.createElement('hr')
base.setAttribute('style','width: 200px; transform: translateX(70px) translateY(380px); border: 1px solid black;')
switch(guessNum.value){
  case '1':
    stick.appendChild(pole)
    pole.appendChild(base)
    break
  case '2':
    stick.appendChild(pole)
    pole.appendChild(base)
    pole.appendChild(poleLine)
    break
  case '3':
    stick.appendChild(pole)
    pole.appendChild(base)
    pole.appendChild(poleLine)
    pole.appendChild(hr)
    break
  case '4':
    stick.appendChild(pole)
    pole.appendChild(base)
    pole.appendChild(poleLine)
    pole.appendChild(hr)
    pole.appendChild(head)
    break
  case '5':
    stick.appendChild(pole)
    pole.appendChild(base)
    pole.appendChild(poleLine)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    break
  case '6':
    stick.appendChild(pole)
    pole.appendChild(base)
    pole.appendChild(poleLine)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    pole.appendChild(armLeft)
    break
  case '7':
    stick.appendChild(pole)
    pole.appendChild(base)
    pole.appendChild(poleLine)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    pole.appendChild(armLeft)
    pole.appendChild(armRight)
    break
  case '8':
    stick.appendChild(pole)
    pole.appendChild(base)
    pole.appendChild(poleLine)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    pole.appendChild(armLeft)
    pole.appendChild(armRight)
    pole.appendChild(legLeft)
    break
  case '9':
    stick.appendChild(pole)
    pole.appendChild(base)
    pole.appendChild(poleLine)
    pole.appendChild(hr)
    pole.appendChild(head)
    pole.appendChild(bod)
    pole.appendChild(armLeft)
    pole.appendChild(armRight)
    pole.appendChild(legLeft)
    pole.appendChild(legRight)
    break
}
