// const firstNum = document.querySelector('.FirstNum')
// const secondNum = document.querySelector('.secondNum')
// const btns = document.querySelectorAll('.btn')
// const result = document.querySelector('.result')

const FirstNum = document.querySelector('.FirstNum')
const secondNum = document.querySelector('.secondNum')
const btns = document.querySelectorAll('.btn')
const result = document.querySelector('.result')

// function calculate(operation) {
// 	if (operation === 'plus') {
// 		result.innerText = +FirstNum.value + +secondNum.value
// 	} else if (operation === 'minus') {
// 		result.innerText = +FirstNum.value - +secondNum.value
// 	} else if (operation === 'multiply') {
// 		result.innerText = +FirstNum.value * +secondNum.value
// 	} else if (operation === 'degree') {
// 		result.innerText = +FirstNum.value % +secondNum.value
// 	} else if (operation === 'residues') {
// 		result.innerText = FirstNum.value ** secondNum.value
// 	} else if (operation === 'root') {
// 		result.innerText = Math.pow(FirstNum.value, 1 / secondNum.value)
// 	} else {
// 		result.innerText = +FirstNum.value / +secondNum.value
// 	}
// }

function calculate(operation) {
	switch (operation) {
		case 'plus':
			result.innerText = +FirstNum.value + +secondNum.value
			break
		case 'minus':
			result.innerText = +FirstNum.value - +secondNum.value
			break
		case 'multiply':
			result.innerText = +FirstNum.value * +secondNum.value
			break
		case 'degree':
			result.innerText = FirstNum.value ** secondNum.value
			break
		case 'residues':
			result.innerText = +FirstNum.value % +secondNum.value
			break
		case 'root':
			result.innerText = Math.pow(FirstNum.value, 1 / secondNum.value)
			break

		default:
			result.innerText = +FirstNum.value / +secondNum.value
			break
	}
}
btns.forEach(function (btn) {
	btn.addEventListener('click', function () {
		const action = this.getAttribute('operator')
		calculate(action)
	})
})
