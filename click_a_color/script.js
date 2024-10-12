const colors = ['green', 'yellow', 'purple', 'blue', 'red']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//Ao clicar
btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] // Cor no background
    color.textContent = colors[randomColor]

})

//Gerar os números random
function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}