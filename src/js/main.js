$(() => {

    // Слайдер 1 main
    $('.items_prod').slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 10,
        waitForAnimate: false,
    });

    // Слайдер 2 main
    $('.items_review').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 10,
        waitForAnimate: false,
    });

    // Слайдер 3 catalogue

    // Слайдер 4 product

    // Слайдер 5 product


    $('.select2-enable').select2();
});


// Сворачивание текста
const btn1 = document.getElementById('block4Btn1')
const block1 = document.getElementById('block4Invisible')
const myCollapsible = document.getElementById('collapseText1')

myCollapsible.addEventListener('show.bs.collapse', () => {
    btn1.innerText = 'Скрыть'
    block1.style.display = 'none'
})

myCollapsible.addEventListener('hide.bs.collapse', () => {
    btn1.innerText = 'Читать полностью'
})
myCollapsible.addEventListener('hidden.bs.collapse', () => {
    block1.style.display = 'block'
})


// Звезды 
const STARS = Array.from(document.querySelectorAll('.star'))
const MODAL_STARS = Array.from(document.querySelectorAll('.modal_star'))

let starNumber
// на сервер отправить последнее значение starNumber при нажатии кнопки подтвердить
let oldStarNumber = MODAL_STARS.length

for (let blockStar of MODAL_STARS) {
    blockStar.addEventListener('click', () => {

        chooseStars(blockStar)
    })

}

function chooseStars(elementOfArray) {

    starNumber = MODAL_STARS.indexOf(elementOfArray)
    // console.log(starNumber)
    // console.log(oldStarNumber)

    if (starNumber <= oldStarNumber) {
        const NEW_STARS_REM = STARS.slice((starNumber + 1))
        for (let elementStarRem of NEW_STARS_REM) {
            elementStarRem.style.display = 'none'
        }
    }
    if (starNumber > oldStarNumber) {
        const NEW_STARS_ADD = STARS.slice(0, (starNumber + 1))
        for (let elementStarAdd of NEW_STARS_ADD) {
            elementStarAdd.style.display = 'block'
        }
    }

    oldStarNumber = starNumber
}
