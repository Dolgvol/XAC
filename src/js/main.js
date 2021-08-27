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

// Поломка слика -->
// document.body.style.display = 'none'
// setTimeout(() => document.body.style.display = 'block', 200)


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

// на сервер отправить последнее значение (0-4) starNumberSave при нажатии кнопки подтвердить
let starNumberSave = (MODAL_STARS.length - 1)
let starNumber = (MODAL_STARS.length - 1)

for (let blockStar of MODAL_STARS) {
    blockStar.addEventListener('click', () => {
        chooseStars(blockStar, true)
    })

    blockStar.addEventListener('mouseover', () => {
        chooseStars(blockStar, false)
    })

    blockStar.addEventListener('mouseout', () => {
        makeStars(STARS, starNumberSave, 'remLastStars')
        makeStars(STARS, starNumberSave, 'addFirstStars')
    })
}

function chooseStars(elementOfArray, save) {

    if (save === true) {
        starNumberSave = MODAL_STARS.indexOf(elementOfArray)

        makeStars(STARS, starNumberSave, 'remLastStars')
        makeStars(STARS, starNumberSave, 'addFirstStars')

    } else
        if (save === false) {
            starNumber = MODAL_STARS.indexOf(elementOfArray)

            makeStars(STARS, starNumber, 'remLastStars')
            makeStars(STARS, starNumber, 'addFirstStars')
        }
}

function makeStars(inputArray, inputIndex, action) {
    if (action == 'addFirstStars') {
        const NEW_STARS_ADD = inputArray.slice(0, (inputIndex + 1))
        for (let elementStar of NEW_STARS_ADD) {
            elementStar.style.display = 'block'
        }
    }
    if (action == 'remLastStars') {
        const NEW_STARS_REM = inputArray.slice((inputIndex + 1))
        for (let elementStar of NEW_STARS_REM) {
            elementStar.style.display = 'none'
        }
    }
}




// // создание массива анимированных при скролле элементов
// const animItems = document.querySelectorAll('._anim_items')

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll())
//     function animOnScroll() {
//         // цикл проходит по всем элементам массива аналог for/of
//         for (let index = 0; index < animItems.length; index++) {

//             // назначение переменной с соответствующим индексом из коллекции (хранит блок)
//             const animItem = animItems[index]
//             // хранит высоту блока
//             const animItemHeight = animItem.offsetHeight
//             // коэффициент для вычисления части от высоты блока
//             const animStart = 2
//             // вычисляет и хранит расстояние от верха страницы до блока
//             const animItemOffset = offset(animItem).top

//             // расстояние от начала окна до блока выехавшого на нужное расстояние
//             let animItemPoint = window.innerHeight - animItemHeight / animStart
//             // Сравнивает расстояние на которое прокрутилась страница по вертикали с положением блока (насколько он выехал)
//             // Положение блока не задается явно через animItemHeight / animStart , так как если страница уже прокручена, 
//             // то в pageYOffset уже заложена некая константа, которую необходимо вычесть
//             if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('._anim_active')
//             } else {
//                 animItem.classList.remove('._anim_active')
//             }

//         }
//         // находит расстояние от верха страницы
//         function offset(el) {
//             // возвращает набор координат относительно текущего положения окна браузера
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//         }
//     }
// }


// Шапка 
const firstHead = document.querySelector('.first_head')
const secondHead = document.querySelector('.second_head')

window.addEventListener('scroll', changeHeaderOnScroll)
window.onload = changeHeaderOnScroll
function changeHeaderOnScroll() {

    const firstHeadHeight = firstHead.offsetHeight
    // const secondHeadHeight = secondHead.offsetHeight

    if (window.pageYOffset > (firstHeadHeight / 2)) {
        firstHead.classList.add('_head1_active')
        secondHead.classList.add('_head2_active')
    } else {
        firstHead.classList.remove('_head1_active')
        secondHead.classList.remove('_head2_active')
    }
}


// Куки
// повесить еще один листнер на кнопку со страницы cookie.html; на данной странице модальное окно не отображать
const COOKIE_ACCEPT_BTN1 = document.querySelector('.cookie_accept_btn')
const COOKIE_BLOCK = document.querySelector('.block_modal_cookie')

removeCookieWarning()
function removeCookieWarning() {
    // !(localStorage.getItem('cookieBtn'))
    if ((localStorage.getItem('cookieBtn')) === null) {

        COOKIE_BLOCK.style.display = 'block'

        COOKIE_ACCEPT_BTN1.addEventListener('click', () => {
            COOKIE_BLOCK.style.display = 'none'
            localStorage.setItem('cookieBtn', 1)
        })
    }
}


//Счетчик товаров общий
let itemsInBasket = document.getElementsByClassName('korzina_item')
let basketInHead = document.getElementsByClassName('basket-number-block-in-head')

countItemsInBasket()
function countItemsInBasket() {
    let itemInBasketAmount = itemsInBasket.length

    for (let elementBasket of basketInHead) {
        elementBasket.innerText = itemInBasketAmount
    }
}


// Счетчик в корзине


// Удаление из корзины
const TRASH_BUTTON = document.querySelectorAll('.mainbox_trash')

for (let elementTrash of TRASH_BUTTON) {
    elementTrash.addEventListener('click', deleteByTrashButton)
}

function deleteByTrashButton() {
    const ITEM_IN_BASKET = elementTrash.closest('korzina_item')

}



// Блоки на странице заказа


// Меню бургер
