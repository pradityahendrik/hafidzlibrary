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

const packageList = async (data) => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/package/get-list`,
    data,
    success: res => res,
    error: err => err,
  });
}

const packageDetail = async (id) => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/package/get-byid/${id}`,
    success: res => res,
    error: err => err,
  });
}

const slider = async () => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/slider/get-all`,
    success: res => res,
    error: err => err,
  });
};

const getFaq = async () => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/faq/get-all`,
    success: res => res,
    error: err => err,
  });
};

const getTestimoni = async () => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/transaction/get-allTestimony`,
    success: res => res,
    error: err => err,
  });
};