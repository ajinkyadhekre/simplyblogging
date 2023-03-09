function getBlogData(){
 
    let promise = new Promise(function(resolve,reject){
        var blogData = new Array();
        blogData = JSON.parse(sessionStorage.getItem("blogData") || "[]");

        if(blogData.length !=0){
            resolve(blogData);
        }
        else{
            reject("No data found");
        }
    });

    return promise;
}
function showCard(blogData){
    const main = document.getElementById('allposts-container');        
        
          let output = ''
        // loop over the array      
          // set first row
          output += `<div class="container-lg border my-5">
            <div class="row">`     
            blogData.forEach(item => {  
             output += `   
             <div class="col-md-4 col-lg-3 col-sm-6 g-4 h-25">        
             <div class="card h-100 shadow mt-2 mb-2">
             
              <img src=${item.image} class="card-img-top col-sm flex-row" alt="...">
              <div class="card-body col-sm">
                <h5 class="card-title">${item.blogTitle}</h5>
                <p class="card-text">${item.blogContent}</p>
              </div>
              </div>
            </div>`
          })
          // close the row
          output += '</div></div>'
        main.innerHTML = output;

}
getBlogData().then(showCard).catch(error => { 
    const main = document.getElementById('allposts-container');   
    let output = '';
    output += `
    <div class="container mt-5">
    <h1>${error}</h1></div>`
    console.log(error);
    main.innerHTML = output;

});




