
    document.getElementById("rnt").onclick = function () {
        location.href = "./rentpg.html";
    };
    document.getElementById("by").onclick = function () {
      location.href = "./products-filter.html";
  };
  document.getElementById("sl").onclick = function () {
    location.href = "./products-filter.html";
};
//search
const search = document.getElementById("search");

search.addEventListener("keyup",(e)=>{
  e.preventDefault();
  // const searchValue = search.value.toLowerCase().trim();

    location.href = "./products-filter.html";
    // const storeProducts = document.querySelectorAll(".store-product");
    // for(i = 0; i< storeProducts.length; i++)
    // {
    //   if(storeProducts[i].classList.contains(searchValue)){
    //     storeProducts[i].style.display="block";
    //   }else if(searchValue ==""){
    //     storeProducts[i].style.display="block";
    //   }else{
    //     storeProducts[i].style.display="none";
    //   }
    // }
})
