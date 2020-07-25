$(document).ready(async function () {
    $('a[href="#home"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);

        return false;
    });

    $('a[href="#category"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);

        return false;
    });

    $('a[href="#shoppingInfo"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);

        return false;
    });
})