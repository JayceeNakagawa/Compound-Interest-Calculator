const principalBox = document.querySelector("#principal")
const interestBox = document.querySelector("#interest")
const compoundBox = document.querySelector("#compound")
const yearBox = document.querySelector("#year")
const amountBox = document.querySelector("#amount")
const occuredBox = document.querySelector("#occured")

function computeInterest() {
  const principal = principalBox.value
  const interest = interestBox.value
  const compound = compoundBox.value
  const year = yearBox.value
  const amount = principal * (1 + interest / compound)**(compound * year)
  const occured = amount - principal
  amountBox.textContent = amount
  occuredBox.textContent = occured
}

principalBox.addEventListener('input',computeInterest)
interestBox.addEventListener('input',computeInterest)
compoundBox.addEventListener('input',computeInterest)
yearBox.addEventListener('input',computeInterest)
