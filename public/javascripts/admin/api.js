let endpoint = 'http://localhost:3000';
if (window) {
  endpoint = window.location.origin;
}

const login = async data => {
  return await $.ajax({
    method: 'POST',
    url: `${endpoint}/api/user/login`,
    data,
    success: res => res,
    error: err => err,
  });
}

const me = async () => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/user/get-user`,
    beforeSend: function(req) {
      const token = localStorage.getItem('token');
      req.setRequestHeader("Authorization", `Bearer ${token}`);
    },
    success: res => res,
    error: err => err,
  });
}

const listCategory = async (data) => {
  return await $.ajax({
    method: 'GET',
    url: `${endpoint}/api/category/getlist`,
    data,
    beforeSend: function(req) {
      const token = localStorage.getItem('token');
      req.setRequestHeader("Authorization", `Bearer ${token}`);
    },
    success: res => res,
    error: err => err,
  });
}