$(document).ready(async function () {
    try {
        const faq = await getFaq();
        faq.data.forEach(row => {
            $('#accordion').append(`
                <div class="card">
                <div class="card-header" id="heading${row.Id}">
                        <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${row.Id}" aria-expanded="true" aria-controls="collapseOne">
                            ${row.Question}
                        </button>
                    </h5>
                    </div>
                
                    <div id="collapse${row.Id}" class="collapse show" aria-labelledby="heading${row.Id}" data-parent="#accordion">
                        <div class="card-body">
                            ${row.Answer}
                        </div>
                    </div>
                </div>
            `);
        });

        $('.collapse').collapse();
    } catch (error) {
        console.log(error);
    }
})