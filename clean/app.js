document.getElementById('playButton').addEventListener('click', function () {
	let cursor = document.querySelector('.cursor')
	cursor.classList.remove('animate')
	void cursor.offsetWidth
	cursor.classList.add('animate')
})
// const state = document.querySelectorAll('.start_art')
// const controls = document.querySelectorAll('.controls')

// let stateIndex = 0 // 🔹 Добавил объявление переменной

// function show(Index) {
// 	state[stateIndex].classList.remove('active')
// 	state[Index].classList.add('active')
// 	stateIndex = Index
// }

// controls.forEach(button => {
// 	button.addEventListener('click', event => {
// 		let Index = stateIndex

// 		if (event.target.classList.contains('Vectorl')) {
// 			// ✅ Убрал `.`
// 			Index = stateIndex - 1
// 			if (Index < 0) {
// 				Index = state.length - 1
// 			}
// 		} else if (event.target.classList.contains('Vectort')) {
// 			// ✅ Убрал `.`
// 			Index = stateIndex + 1
// 			if (Index >= state.length) {
// 				// ✅ Исправил `stateIndex.length` → `state.length`
// 				Index = 0
// 			}
// 		}

// 		show(Index)
// 	})
// })

// // Запускаем показ первого элемента
// show(stateIndex)

document.addEventListener('DOMContentLoaded', function () {
	if (typeof Swiper === 'undefined') {
		console.error('Swiper не загружен! Проверь подключение.')
		return
	}

	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
})
