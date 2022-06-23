$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('show')
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('show')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

function Redirect(){
    window.location.href="/Admin/html/Admin.html";
}
function Redirect2(){
    window.location.href="/Guest/html/home.html";
}


function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  localStorage.setItem('username', 'admin')
  localStorage.setItem('password', '123456')

   if (
    username == localStorage.getItem('username') &&
    password == localStorage.getItem('password')
  ) {
    window.location.href = "Admin.html";
  } else {
    alert("dang nhap that bai");
  }
}