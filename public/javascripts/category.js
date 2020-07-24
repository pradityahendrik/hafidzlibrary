$(document).ready(async function () {
    try {
        const data = await categoryList();
        $('#listCategoryLoader').remove();
        data.data.forEach(row => {
            $('#listCategory').append(`
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">`+
                    row.name
                    +`<span class="badge badge-secondary badge-pill">`+row.total+`</span>
                </li>
            `);
            $('.list-data').text(row.name)
        });
    } catch (error) {
        console.log(error);
    }
})