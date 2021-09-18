import {Modal} from 'bootstrap'

$(() => {

    // Слайдер 1 main
    $('.items_prod').slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 10,
        waitForAnimate: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                initialSlide: 0,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false,
              }
            },
        ]
    });

    // Слайдер 2 main
    $('.items_review').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 10,
        waitForAnimate: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
              }
            },
        ]
    });

    // Слайдер 3 catalogue & product
    $('.items_mini').slick({
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchThreshold: 10,
        waitForAnimate: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false,
              }
            },
        ]
    });

    // Слайдер 4 product
    $('.add_prod').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        waitForAnimate: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        draggable: false,
        // centerMode: true,

        asNavFor: ".main_prod",

        responsive: [
            {
              breakpoint: 1200,
              settings: {
              }
            },
            {
              breakpoint: 992,
              settings: {
              }
            },
            {
              breakpoint: 768,
              settings: {
                vertical: false,
                verticalSwiping: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                vertical: false,
                verticalSwiping: false,
              }
            },
        ]
    });

    $('.main_prod').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        waitForAnimate: false,
        vertical: true,
        verticalSwiping: true,
        // centerMode: true,
        // draggable: false,

        // fade: true,
        asNavFor: ".add_prod",

        responsive: [
            {
              breakpoint: 1200,
              settings: {
              }
            },
            {
              breakpoint: 992,
              settings: {
              }
            },
            {
              breakpoint: 768,
              settings: {
                vertical: false,
                verticalSwiping: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                vertical: false,
                verticalSwiping: false,
              }
            },
        ]
    });


    // $("#oderPost1").select2({
    //     minimumResultsForSearch: Infinity
    // });
});



// Сворачивание текста
const btn1 = document.getElementById('block4Btn1')
const block1 = document.getElementById('block4Invisible')
const block2 = document.getElementById('block4Invisible_mob')
const myCollapsible = document.getElementById('collapseText1')

collapseText()
function collapseText() {
    if (myCollapsible) {
        myCollapsible.addEventListener('show.bs.collapse', () => {
            btn1.innerText = 'Скрыть'
            block1.style.display = 'none'
            block2.style.display = 'none'
        })

        myCollapsible.addEventListener('hide.bs.collapse', () => {
            btn1.innerText = 'Читать полностью'
        })
        myCollapsible.addEventListener('hidden.bs.collapse', () => {
            block1.style.display = 'block'
            block2.style.display = 'block'
        })
    }
}



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


// Кнопка в окне отзывов
const reviewCheckBox = document.getElementById('reviewCheckBox1')
const reviewBottomButton = document.getElementById('reviewButton1')
const reviewBottomButtonDisabled = document.getElementById('reviewButton2')

changeCheckBox()
function changeCheckBox() {
    if (reviewCheckBox) {
        reviewCheckBox.checked = false

        reviewCheckBox.addEventListener("change", () => {
            if (reviewCheckBox.checked) {
                reviewBottomButton.style.display = 'block'
                reviewBottomButtonDisabled.style.display = 'none'
            }
            else {
                reviewBottomButton.style.display = 'none'
                reviewBottomButtonDisabled.style.display = 'block'
            }
        })
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


// Категории (передвижение на странице каталога)



//Счетчик товаров общий
const itemsInBasket = document.getElementsByClassName('korzina_item')
const basketInHead = document.getElementsByClassName('basket-number-block-in-head')

countItemsInBasket()
function countItemsInBasket() {
    for (let elementBasket of basketInHead) {
        elementBasket.innerText = itemsInBasket.length
    }
}


// Удаление из корзины
const TRASH_BUTTON = document.querySelectorAll('.mainbox_trash')
const BASKET_MAIN_BLOCK = document.querySelector('.block_modal_korzina')

let elementTrash
for (elementTrash of TRASH_BUTTON) {
    const ITEM_IN_BASKET = elementTrash.closest('.korzina_item')
    elementTrash.addEventListener('click', event => {
        event.stopPropagation()
        ITEM_IN_BASKET.remove()
        countItemsInBasket()
    })
}



// Счетчик в корзине
const MINUS_BUTTONS = document.querySelectorAll('.amount_minus')
const PLUS_BUTTONS = document.querySelectorAll('.amount_plus')

for (let minusButton of MINUS_BUTTONS) {
    minusButton.addEventListener('click', () => {
        let amuontMinus = minusButton.nextElementSibling.textContent
        if (Number(amuontMinus) > 1) {
            minusButton.nextElementSibling.textContent = +amuontMinus - 1
        }
    })
}

for (let plusButton of PLUS_BUTTONS) {
    plusButton.addEventListener('click', () => {
        let amuontPlus = plusButton.previousElementSibling.textContent
        plusButton.previousElementSibling.textContent = +amuontPlus + 1
    })
}
const ITEMS_COUNTERS = document.querySelectorAll('.amount-for-order')



// Блоки на странице заказа
const infoPickup = document.getElementById('deliveryInfoPickup')
const infoDelivery = document.getElementById('deliveryInfoDelivery')
const AddinfoBlock1 = document.getElementById('deliveryAddinfoBlock1')
const AddinfoBlock2 = document.getElementById('deliveryAddinfoBlock2')

choosePickupOrDelivery()
function choosePickupOrDelivery() {
    if (infoPickup) {
        infoPickup.checked = false

        infoPickup.addEventListener("change", () => {
            if (infoPickup.checked) {
                AddinfoBlock1.style.display = 'block'
                AddinfoBlock2.style.display = 'none'
            }
        })
    }

    if (infoDelivery) {
        infoDelivery.checked = false

        infoDelivery.addEventListener("change", () => {
            if (infoDelivery.checked) {
                AddinfoBlock1.style.display = 'none'
                AddinfoBlock2.style.display = 'block'
            }
        })
    }
}



// Всплывающие окна

// Всплывающее отзыв
const modalReview = new Modal(document.getElementById('Modal7'))

if (reviewBottomButton) {
    reviewBottomButton.addEventListener("click", () => {
        function disableModal () {
            modalReview.hide()
        }
        setTimeout( disableModal, 1000)
    })
}

// Всплывающее добавление в корзину
const modalGoodsInCart = new Modal(document.getElementById('Modal6'))
const btnsGoodsInCart1 = Array.from(document.getElementsByClassName('buy_btn'))
const btnsGoodsInCart2 = Array.from(document.getElementsByClassName('buy_btn_mini'))
const btnsGoodsInCart3 = Array.from(document.getElementsByClassName('maininfo_btn'))
const btnsGoodsInCart = btnsGoodsInCart1.concat(btnsGoodsInCart2, btnsGoodsInCart3)

// console.log(btnsGoodsInCart);

if (btnsGoodsInCart) {
    for (const btnGoods of btnsGoodsInCart) {
        btnGoods.addEventListener("click", () => {
            function disableModal () {
                modalGoodsInCart.hide()
            }
            setTimeout( disableModal, 1000)
        })
    }    
}

// Всплывающее уведомление о заказе
const modalOrderSent = new Modal(document.getElementById('Modal5'))
const btnOrderSent = document.getElementById('orderAcceptBtn1')

if (btnOrderSent) {
    btnOrderSent.addEventListener("click", () => {
        function disableModal () {
            modalOrderSent.hide()
        }
        setTimeout( disableModal, 1000)
    })
}


// Куки
const COOKIE_ACCEPT_BTN = document.querySelectorAll('.cookie_accept_btn')
const COOKIE_BLOCK = document.querySelector('.block_modal_cookie')

removeCookieWarning()
function removeCookieWarning() {
    // !(localStorage.getItem('cookieBtn'))
    if ((localStorage.getItem('cookieBtn')) === null) {

        if (COOKIE_BLOCK) {
            COOKIE_BLOCK.style.display = 'block'
        }

        for (let elementBtn of COOKIE_ACCEPT_BTN) {
            elementBtn.addEventListener('click', () => {
                localStorage.setItem('cookieBtn', 1)
                COOKIE_BLOCK.style.display = 'none'
            })
        }
    }
}



// Стрелки в блоке категорий
const COLLAPSE_CONTENTS = document.getElementsByClassName('items_group_body')

if (COLLAPSE_CONTENTS) {
    for (const collapseContent of COLLAPSE_CONTENTS) {
        collapseContent.addEventListener("show.bs.collapse", () => {
            collapseContent.previousElementSibling.firstElementChild.lastElementChild.classList.add('svg_rotate')   
        })
        collapseContent.addEventListener("hide.bs.collapse", () => {
            collapseContent.previousElementSibling.firstElementChild.lastElementChild.classList.remove('svg_rotate')   
        })  
    } 
}
  


// Блок категорий в мобильной версии
const MAIN_WRAPPER = document.querySelector('#mainWrapper1')
const MOB_WRAPPER = document.querySelector('#mobWrapper2')

const btnsMainWrapper = document.querySelectorAll('.forward_btn_cat')
const btnMobWrapper = document.querySelector('#backBtnCat1')

if (btnsMainWrapper) {
    for (const btnMainWrapper of btnsMainWrapper) {
        btnMainWrapper.addEventListener("click", () => {
            MAIN_WRAPPER.style.display = 'none'
            MOB_WRAPPER.style.display = 'block'
        })
    }
}

if (btnMobWrapper) {
    btnMobWrapper.addEventListener("click", () => {
        MAIN_WRAPPER.style.display = 'block'
        MOB_WRAPPER.style.display = 'none'
    })
}


// Смена языка
const langButtonDropdown = document.getElementById('dropdownMenuButtonLang')
const langItem1 = document.getElementById('langItem1')
const langItem2 = document.getElementById('langItem2')

if (langItem1) {
    langItem1.addEventListener("click", () => {
        langButtonDropdown.innerText = langItem1.innerText
    })
}

if (langItem2) {
    langItem2.addEventListener("click", () => {
        langButtonDropdown.innerText = langItem2.innerText
    })
}


