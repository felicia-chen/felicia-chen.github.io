
//click on mobile navigation drawer
$(document).ready(function() {
    //expand nav
    $("#icon").click(function () {
        if ($(".mobile-nav").css('display') == "none") {
            $(".mobile-nav").css('display', 'inline');
        }
        else {
            $(".mobile-nav").css('display', 'none');
        }
    });
    //expand art
    $(".mobile-dropbtn").click(function () {
        if ($(".mobile-dropdown-content").css('display') === "none") {
            $(".mobile-dropdown-content").css('display', 'block');
        }
        else {
            $(".mobile-dropdown-content").css('display', 'none');
        }
    });
    //click on intro
    $("#intro").click(function () {
            $(".mobile-nav").css('display', 'none');
    });
});



//MODAL SCRIPTS
//detect click outside of modal; if so, close modal
$(document).click(function(e){
    var clickElement = e.target;  // get the dom element clicked.
    var elementClassName = e.target.className;  // get the classname of the element clicked
    myModal = document.getElementById("myModal");
    opacity = window.getComputedStyle(myModal).getPropertyValue("opacity"); //check visibility of modal

    //if clicked on modal or image (not next/prev buttons) and the modal is visible, close modal
    if (elementClassName == "slide" && opacity==1) {
      closeModal();
    }
    else if (elementClassName == "modal" && opacity==1) {
      closeModal();
    };
    //alert(elementClassName); check class name
});
//arrow keys simulate next and prev
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //left
            plusSlides(-1);
            break;
        case 38:
            //up
            break;
        case 39:
            //right
            plusSlides(1);
            break;
        case 40:
            //down
            break;
        case 27:
            //esc
            closeModal();
            break;
    }
  };

  function onClick(element) {
     $("#myModal").fadeIn(300);
  }

  function closeModal() {
      $("#myModal").fadeOut(300);
  }

  var slideIndex = 1;
  showSlides(slideIndex, false);

  function plusSlides(n) {
    showSlides(slideIndex += n, false);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n, true);
  }

  function showSlides(n, plus) {
    var bool = plus;
    var i;
    var slides =  $(".mySlides");
    var dots = $(".mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        if (bool)
   {
       slides[i].style.display = 'none';
   }    else {$(slides[i]).fadeOut(200)};
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    $(slides[slideIndex-1]).fadeIn(200);
    dots[slideIndex-1].className += " active";
  }
