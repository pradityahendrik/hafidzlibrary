$(document).ready(async function () {
    try {
        const images = await slider();
        images.data.forEach(row => {
            $('#homeSlider').append(`
                <div class="carousel-item ${(row.IsHighlight === 1) ? 'active' : ''}">
                    <img class="d-block w-100" src='${row.File}' alt=${row.Id}/> 
                </div>
            `);
        });
    } catch (error) {
        console.log(error);
    }

    $('.carousel').carousel({
        interval: 3000
    })
})