$(document).ready(async function () {
    $('a[href="#howToOrder"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);

        return false;
    });
})