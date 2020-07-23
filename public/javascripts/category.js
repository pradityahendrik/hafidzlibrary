$(document).ready(async function () {
    try {
        const data = await categoryList();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})