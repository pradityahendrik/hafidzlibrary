$(document).ready(async function () {
    try {
        const testimoni = await getTestimoni();
        testimoni.data.forEach(row => {
            $('#testimoniSlider').append(`
                <!--First slide-->
                <div class="carousel-item ${(row.Id === 1) ? 'active' : ''}">
                    <div class="testimonial">
                        <!--Avatar-->
                        <div class="avatar mx-auto mb-4">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" class="rounded-circle img-fluid"
                            alt="First sample avatar image">
                        </div>
                        <!--Content-->
                        <p>
                        <i class="fa fa-quote-left"></i> ${row.Testimony}
                        </p>
                        <h4 class="font-weight-bold">${row.Name}</h4>
                        <h6 class="font-weight-bold my-3">Membeli ${row.PackageName} di hafidzlibrary</h6>
                    </div>
                </div>
                <!--First slide-->
            `);
        })
    } catch (error) {
        console.log(error);
    }

    $('.carousel').carousel({
        interval: 3000
    })
})