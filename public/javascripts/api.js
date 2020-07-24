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

const packageList = async () => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/package/get-all`,
    success: res => res,
    error: err => err,
  });
}

const packageDetail = async () => {
  return await $.ajax({
    method: 'GET',
    // url: `${endpoint}/api/package/get-byid/${id}`,
    url: `${endpoint}/api/package/get-byid/2`,
    success: res => res,
    error: err => err,
  });
}