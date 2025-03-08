let todos = []

function renderTodos() {
	const todoList = document.getElementById('todoList')
	todoList.innerHTML = '' // Очищаем перед перерисовкой

	todos.forEach((todo, index) => {
		const card = document.createElement('div')
		card.classList.add('todo-card')
		card.innerHTML = `<span>${todo}</span> 
                                  <button onclick="removeTodo(${index})">Удалить</button>`
		todoList.appendChild(card)
	})
}

function addTodo() {
	const input = document.getElementById('todoInput')
	const text = input.value.trim()
	if (text === '') return

	todos.push(text) // Добавляем в массив
	renderTodos() // Перерисовываем список
	input.value = ''
}

function addManyTodos() {
	for (let i = 1; i <= 10; i++) {
		todos.push(`Задача ${todos.length + 1}`)
	}
	renderTodos()
}

function removeTodo(index) {
	todos.splice(index, 1) // Удаляем по индексу
	renderTodos()
}
