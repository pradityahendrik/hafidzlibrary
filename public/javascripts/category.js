$(document).ready(async function () {
    try {
        const category = await categoryList();
        const package = await packageList();

        $('#listCategoryLoader').remove();
        category.data.forEach(row => {
            $('#listCategory').append(`
                <a href="">
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        ${row.name}
                        <span class="badge badge-secondary badge-pill">${row.total}</span>
                    </li>
                </a>
            `);
        });

        package.data.forEach(row => {
            $('.listPackage').append(`
                <div class="col mb-4">
                    <a class="text-dark package-card" href="">
                        <div class="card">
                            <input type="hidden" value="${row.Id}"/>
                            <img class="img-fluid img-thumbnail card-img-top" src="images/card-book.png" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center">${row.Name}</h5>
                            </div>
                        </div>
                    </a>
                </div>
            `);
        });
    } catch (error) {
        console.log(error);
    }

    $('.package-card').click(async function(e) {
        e.preventDefault();
        // const data = await packageDetail();
    });
})