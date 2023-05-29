///Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", handleKeyDown)

//Funções callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (
    inputNumber.value != "" &&
    Number(inputNumber.value) >= 0 &&
    Number(inputNumber.value) <= 10 &&
    Number.isInteger(Number(inputNumber.value))
  ) {
    //!= "Diferente de" - && "And" - isInteger = "Valor inteiro"

    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      screen2.querySelector(
        "h2"
      ).innerText = `acertou em ${xAttempts} tentativas!`
      randomNumber = Math.round(Math.random() * 10)
    } else {
      alert("Você não acertou, tente novamente")
    }

    inputNumber.value = ""
    xAttempts++
    // console.log(inputNumber.value) //lê o valor do input
  } else {
    return alert("Inválido, digite um número inteiro entre 0 e 10")
  }
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleKeyDown(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}