$(document).ready(async function () {
    const query = {
        page: 1,
        limit: 10
    }

    const fetchCategory = async payload => {
        try {
            const category = await listCategory(payload);
            category.data.data.forEach((row, index) => {
                $('#listCategoryTable').append(`
                    <tr>
                        <td>${index+1}</td>
                        <td>${row.Name}</td>
                        <td>
                            <a href="/edit/${row.Id}" class="btn btn-success" style="color: white">
                                <span class="fa fa-edit"></span>
                            </a>
                            <a href="/delete/${row.Id}" class="btn btn-danger" style="color: white">
                                <span class="fa fa-trash"></span>
                            </a>
                        </td>
                    </tr>
                `);
            });
        } catch (error) {
          console.log(error);
        }
    }

    fetchCategory(query);
})