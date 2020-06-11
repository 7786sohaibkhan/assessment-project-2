var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); 
    }




    document.getElementById("1").addEventListener("click",function()
    {
      var xhr = new XMLHttpRequest();
      var url = 'phone.json' ;
      xhr.open('GET', url, true);
      xhr.onload = function () {
          if (this.status == 200) {
              var products = JSON.parse(this.responseText);
  console.log(products)
          }
      }
      xhr.send();
  })


