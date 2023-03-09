const form = document.getElementById("loginform");

if(form != null){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    localStorage.setItem("userData", JSON.stringify(data));
    location.reload();
  });
}


//on page load
var userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);
document.addEventListener("DOMContentLoaded", function(event) { 
  if(userData.username && userData.password){
    const user = document.getElementById("loginbtn");
    
    user.innerHTML = '<button type="button" class="btn btn-primary" id="logoutbtn" onclick="logout()">Logout</button>';
    document.getElementById("addBlogLink").classList.remove("disabled");
  }
});


function logout(){
  localStorage.removeItem("userData");
  window.location.replace("index.html");
}

function clearStorage() {

  let session = sessionStorage.getItem('register');

  if (session == null) {
  
      localStorage.removeItem('remove');

  }
  sessionStorage.setItem('register', 1);
}
window.addEventListener('load', clearStorage);