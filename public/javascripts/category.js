$(document).ready(async function () {
    let query = {
        "page": 1,
        "limit": 8,
        "search": "",
        "filter": "",
        "category": ""
    }

    try {
        const category = await categoryList();
        $('#listCategoryLoader').remove();
        category.data.forEach(row => {
            $('#listCategory').append(`
                <a class="category" id=${row.id}>
                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        ${row.name}
                        <span class="badge badge-secondary badge-pill">${row.total}</span>
                    </li>
                </a>
            `);
        });

        await fetchPackageList(query);
    } catch (error) {
        console.log(error);
    }

    $('.package-card').click(async function(e) {
        try {
            e.preventDefault();
            const detail = await packageDetail(this.id);
            $('#content').html(`
                <div class="modal-header">
                    <h5 class="modal-title">
                        ${detail.data.name} 
                        ${(detail.data.isBest === 1) ? '<span class="badge badge-danger">Unggulan</span>' : ''}
                        ${(detail.data.isSale === 1) ? '<span class="badge badge-warning">Obral</span>' : ''}
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner" id="detail-slider"></div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <br/>
                    <div class="alert alert-warning" role="alert">
                        <strong> Kategori </strong>
                        <span>${detail.data.categoryId}</span>
                        <br/>
                        <strong> Tag </strong>
                        <span>${detail.data.tag}</span>
                    </div>
                    <div class="alert alert-light" role="alert">
                        <strong> Deskripsi </strong>
                        <br/>
                        <span>${detail.data.description}</span>
                    </div>
                </div>
                <div class="modal-footer">
                    <a type="button" class="btn btn-success btn-lg" href="https://api.whatsapp.com/send?phone=6285711223674&text=hai%20saya%20mau%20beli%20paket%20buku%20${detail.data.name}", target="_blank">
                        <i class="fa fa-whatsapp"></i>
                        Chat via WhatsApp
                    </a>
                </div>
            `)
            
            detail.data.picture.forEach((row) => {
                $('#detail-slider').append(`
                    <div class="carousel-item ${(row.Sequence === 1) ? 'active' : ''}">
                        <img src=${row.PictureName} class="d-block w-100 h-50" alt=${row.Id}>
                    </div>
                `);
            });

            $('#detail').modal('show');
        } catch (error) {
            console.log(error);
        }
    });

    $('input[name="search"]').keydown(async function(e){
        const key = e.which;
        if (key === 13 || $(this).val() === '') {
            query.search = $(this).val() ? $(this).val() : '';
            fetchPackageList(query);
        }
    })

    $('.filter').change(async function(e) {
        query.filter = $('.filter').val();
        fetchPackageList(query);
    })

    $('.category').click(async function(e) {
        query.category = this.id;
        fetchPackageList(query);
    })
})

const fetchPackageList = async query => {
    try {
        const package = await packageList(query);
        let html = package.data.data.length > 0 ? package.data.data.map(row => {
            let str = `
                <div class="col mb-4">
                    <a class="text-dark package-card" id=${row.id} href="">
                        ${(row.isBest === 1) ? '<span class="best-seller-badge">Unggulan</span>' : ''}
                        ${(row.isSale === 1) ? '<span class="sale-badge">Obral</span>' : ''}
                        <div class="card">
                            <img class="img-fluid img-thumbnail card-img-top" src="images/card-book.png" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center">${row.name}</h5>
                            </div>
                        </div>
                    </a>
                </div>
            `;
      
            return str;
        }) : `
            <div class="col-md-12 mb-4">
                <div class='card border-danger'>
                    <div class='card-body text-center'>
                        <h1 class='mb-3'><i class='fa fa-times'></i></h1>
                        <h5>Tidak ada data</h5>
                    </div>
                </div>
            </div>
          `;
        $(".listPackage").html(html);
    } catch (error) {
        console.log(error);
    }
}