$(function () {
    $('.imgHover').hover(function () {
        $(this).toggleClass('imgHover_after')
        $(this).toggleClass('pHover')
    })
    $('.imgHover').click(function () {
        $(this).toggleClass('imgHover_after')
        $(this).toggleClass('pHover')
    })
})