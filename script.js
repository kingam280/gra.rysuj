const divs = document.querySelectorAll('.wrapper>div');
const btn = document.querySelector('.clear');
const colors = document.querySelectorAll('div>button')
const redBtn = document.querySelector('.red')
const yellowBtn = document.querySelector('.yellow')

//rysowanie różnymi kolorami
colors.forEach(function (div) {
    div.addEventListener('click', function () {
        let color = this.classList;
        divs.forEach(function (div) {
            div.addEventListener('click', function () {
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
function modal() {
    document.querySelector('.modal-wrapper').classList.toggle('active');
    document.querySelector('.all').classList.toggle('blur');
}

document.querySelector('.instruction').addEventListener('click', modal)
document.querySelector('.close').addEventListener('click', modal)