const addblogForm = document.getElementById("addblogform");
All_Data = new Array();

if (addblogForm != null) {
  addblogForm.addEventListener("submit", (e) => {
    //e.preventDefault();
    const formData = new FormData(addblogForm);
    const data = Object.fromEntries(formData);

    let thumbnail = document.getElementById("inputImages").files[0].name; 
 
    thumbnail = "images/" + thumbnail;
    data['image'] = thumbnail;
    //console.log(data);
    All_Data = JSON.parse(sessionStorage.getItem("blogData") || "[]");
    
    All_Data.push(data);
    console.log(All_Data);
    sessionStorage.setItem("blogData", JSON.stringify(All_Data));
    console.log(sessionStorage);
  });
}