const divs = document.querySelectorAll('.wrapper>div');
const btn = document.querySelector('.clear');
const colors = document.querySelectorAll('.colors>button')
const redBtn = document.querySelector('.red')
const yellowBtn = document.querySelector('.yellow')

let drawActive = false;

//rysowanie różnymi kolorami
colors.forEach(function (color) {
    color.addEventListener('click', function () {
        let color = this.classList;
        divs.forEach(function (div) {
            div.addEventListener('mousedown', function () {
                this.className = color;
                drawActive = true;
            });
        })

        divs.forEach(function (div) {
            div.addEventListener('mousemove', function () {
                if (drawActive) {
                    this.className = color;
                }
            });
        })

        divs.forEach(function (div) {
            div.addEventListener('mouseup', function () {
                drawActive = false;
                this.className = color;
            });
        })
    });
})




//wymazywanie
divs.forEach(function (div) {
    div.addEventListener('dblclick', function () {
        this.removeAttribute('class');

    });
})

//czyszczenie tablicy
btn.addEventListener('click', function () {
    divs.forEach(function (div) {
        div.removeAttribute('class');
    })
})

//pop up
const modalElements = document.querySelector('.modal-wrapper');
const game = document.querySelector('.all');
const instruction = document.querySelector('.instruction');
const closeBtn = document.querySelector('.close');

function modal() {
    modalElements.classList.toggle('active');
    game.classList.toggle('blur');
}

instruction.addEventListener('click', modal)
closeBtn.addEventListener('click', modal)

window.setTimeout(modal, 1000)