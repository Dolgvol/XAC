$(() => {
    $('.items_prod').slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 10,
        waitForAnimate: false,
    });


    $('.items_review').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 10,
        waitForAnimate: false,
    });


    $('.select2-enable').select2();
});


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