const firstblock = document.querySelector('.block-1')
firstblock.innerText = 'block-1'
firstblock.style = 'background: green; width: 300px; height: 50px'

const secondblock = document.createElement('div')
document.body.append(secondblock)
secondblock.classList.add('.block-2')
secondblock.innerText = 'block-2'
secondblock.style = 'background: blue; opacity:0.5; font-size:25px; hight: 50px'

const thirdblock = document.createElement('div')
document.body.append(thirdblock)
thirdblock.classList.add('.block-3')
thirdblock.innerHTML = '<b>block-3</b>'
