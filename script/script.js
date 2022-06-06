let index = 0 
const addressbtn = document.querySelector('#address-form')
const addressbtn1 = document.querySelector('#address-close')
// console.log(addressbtn)

addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex"
})


addressbtn1.addEventListener("click", function() {
    document.querySelector('.address-form').style.display = "none"
})

const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNubertwo = document.querySelector('.slider-product-one-content-items')
leftbtntwo.addEventListener("click", function(){
    index = index-1
    if(index<=-1) {
        index=imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"

})


rightbtntwo.addEventListener("click", function(){
    index = index+1
    if(index>imgNubertwo.length-1) {
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
 })

