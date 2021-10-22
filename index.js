
const input = document.getElementById('input')
const box = document.getElementById('box')
const text = document.getElementById('text')


input.addEventListener('keyup', function() {
    console.log(input.value)
    box.style.background = input.value
    text.innerHTML = input.value
}) 

