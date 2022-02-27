
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

// ---------------underline clicked nav item (NOT FOR GITHUB ONLY - SEE BELOW FOR GITHUB VERSION)--------------------------------
// $(document).ready(function() {
//
//   var url = window.location.href;
//   var path = window.location.pathname;
//   var page = path.split("/").pop();
//   var n = url.lastIndexOf('/');
//   var result = url.substring(n + 1);
//   if (result == "personal.html") {
//     document.getElementById("personalwork").style.color = '#83c0ef' ;
//   } else if (result == "spirituntamed.html") {
//     document.getElementById("spirituntamed").style.color = '#83c0ef' ;
//     document.getElementById("clientwork").style.color = '#83c0ef' ;
//   } else if (result == "code.html") {
//     document.getElementById("code").style.color = '#83c0ef' ;
//   } else if (result == "music.html") {
//     document.getElementById("music").style.color = '#83c0ef' ;
//   } else if (result == "index.html#introduction") { //to upload to github, change to index#introduction
//     document.getElementById("introductionabout").style.color = '#83c0ef' ;
//   }
//
//     $(".nav").click(function (event) {
//       var text = $(event.target).text();
//       if (text == "About") {
//           document.getElementById("introductionabout").style.color = '#83c0ef' ;
//       }
//     });
//     $(".bounce").click(function (event) {
//           document.getElementById("introductionabout").style.color = '#83c0ef' ;
//     });
// });


//------------------------------------github version only----------------------------------------------
$(document).ready(function() {

  var url = window.location.href;
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var n = url.lastIndexOf('/');
  var result = url.substring(n + 1);
  if (result == "personal") {
    document.getElementById("personalwork").style.color = '#83c0ef' ;
  } else if (result == "spirituntamed") {
    document.getElementById("spirituntamed").style.color = '#83c0ef' ;
    document.getElementById("clientwork").style.color = '#83c0ef' ;
  } else if (result == "code") {
    document.getElementById("code").style.color = '#83c0ef' ;
  } else if (result == "music") {
    document.getElementById("music").style.color = '#83c0ef' ;
  } else if (result == "index#introduction") { //to upload to github, change to index#introduction
    document.getElementById("introductionabout").style.color = '#83c0ef' ;
  }

    $(".nav").click(function (event) {
      var text = $(event.target).text();
      if (text == "About") {
          document.getElementById("introductionabout").style.color = '#83c0ef' ;
      }
    });
    $(".bounce").click(function (event) {
          document.getElementById("introductionabout").style.color = '#83c0ef' ;
    });
});



//------------------------------------MODAL SCRIPTS------------------------------------
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
