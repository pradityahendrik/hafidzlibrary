$(document).ready(function(){
  const token = localStorage.getItem('token');
  if (token) window.location = './admin';
  
  $("#login").submit(async function(e){
    e.preventDefault();
    const data = $(this).serialize();
    try {
      const res = await login(data);
      localStorage.setItem('token', res.data.token);
      window.location = './admin';
    } catch (error) {
      swal('Gagal Masuk!', error.responseJSON.message, 'error');
    }
  })
})
  