window.addEventListener('DOMContentLoaded', () => {

// sticky head
window.onscroll = function() {myFunction()};
var header = document.getElementById("stickyHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let owl= $('.owl-carousel');
console.log(owl);
    owl.owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        center: true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            }
        },
    })

})