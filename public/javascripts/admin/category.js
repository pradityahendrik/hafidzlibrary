$(document).ready(async function () {
    try {
        const query = {
            page: 1,
            limit: 10
        }
        const list = await listCategory(query);
        console.log(list);
    } catch (error) {
        console.log(error);
    }
})