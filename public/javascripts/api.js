let endpoint = 'http://localhost:3000';
if (window) {
  endpoint = window.location.origin;
}

const categoryList = async () => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/category/get-all`,
    success: res => res,
    error: err => err,
  });
}