const divs = document.querySelectorAll('div>div');
const btn = document.querySelector('button');

function changeColor() {
    this.classList.toggle('black');
}

divs.forEach(function (div) {
    div.addEventListener('click', changeColor);
})

btn.addEventListener('click', function () {
    divs.forEach(function (div) {
        div.classList.remove('black')
    })
})