$(document).ready(async function(){
    const token = localStorage.getItem('token');
    if (!token) window.location = './login';

    $("#signout").click(function(e){
      e.preventDefault();
      localStorage.removeItem('token');
      window.location = './login';
    })

    const data = await me();
    console.log(data);
})
  