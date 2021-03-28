
// $(".botn").click(function(){ 
//   $(".botn").css("background-color","");
//   $(this).css("background-color"," rgb(176, 172, 172)");
//   $(this).css("color","#000")
// });

$(document).on('click', 'ul li', function(){
  $(this).addClass('active').siblings().removeClass('active')
})

const btns= document.querySelectorAll(".botn");
const storeProducts = document.querySelectorAll(".store-product");

for(i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", (e)=>{

    e.preventDefault();

    const filter = e.target.dataset.filter;
    storeProducts.forEach((product)=> {
      if(filter=="all"){
        product.style.display= "block"
      }
      else{
        if(product.classList.contains(filter)){
          product.style.display= "block"
        } else{
          product.style.display= "none"
        }
      }
    })
  } )
}

// SEARCH FILTER

const search = document.getElementById("search");
const searchButton = document.getElementById("searchbtn");

searchButton.addEventListener("click",(e)=>{
  e.preventDefault();
  const searchValue = search.value.toLowerCase().trim();

  for(i = 0; i< storeProducts.length; i++)
  {
    if(storeProducts[i].classList.contains(searchValue)){
      storeProducts[i].style.display="block";
    }else if(searchValue ==""){
      storeProducts[i].style.display="block";
    }else{
      storeProducts[i].style.display="none";
    }
  }
})
