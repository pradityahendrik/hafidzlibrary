$(document).ready(function () {
    setInterval(async function() {
        const trx = await getTrx();
        toastr["info"](`${trx.data.Name} membeli ${trx.data.PackageName}`)
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-bottom-full-width",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    }, 60 * 1000); // 60 * 1000 milsec
})