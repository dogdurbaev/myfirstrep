let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nums)

//reverse - переворачиает массив
nums.reverse()
console.log(nums)

//join - превращает массив в строку
nums.join(';')
console.log(nums.join(';'))

//split - превращает строку в массив
let string = 'a b c a d e f a n'
let newstring = string.split('a')
console.log(newstring)

//unshift - добавляет елемент в начало
//shift - удаляет елемент в начале

//push - добавляет елемент в конец
//pop - удаляет елемент в конце

//slice - вырезает часть массива
// nums.slice([3], [5])
// console.log(nums.slice([3], [5])

//map - цикл который возвращает новый массив
let arrForMap = [0, 1, 2, 3]
let newArrSquare = arrForMap.map(function (item, index, array) {
	console.log('item -' + item)
	console.log('index -' + index)
	console.log('array -' + array)
})

//sort - сортирует массив
let arrForSort = [100, 1, 102, 13, 0, -50, -500, Infinity]
arrForSort.sort()
console.log(arrForSort)

//filter - фильтрует по заданный параметрам
let arrForFilter = [100, 1, 102, 13, 0, -50, -500, Infinity]
let newArrayForFilter = arrForFilter.filter(function (el) {
	// return el > 0
	return el % 2 == 0 && el > 0
})
console.log(newArrayForFilter)

setInterval(() => {
	console.log('kolya')
}, 8000)

setTimeout(() => {
	console.log('islam')
}, 7000)
