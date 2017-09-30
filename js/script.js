//Responsive Menu


//Page Transition Fades Script
window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

//Image Expansion Script
var modal = document.getElementById('myModal');
var slideIndex = 1;
function currentSlide(n) {
    slideIndex = n;
    var i = 'myImg' + n.toString();
    var img = (document.getElementById(i));
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = img.src;
       // captionText.innerHTML = img.alt;
            var height = img.width;
        //captionText.style.marginTop = height;

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
}
// Get the modal


//previous slide
function previousSlide() {
    currentSlide(slideIndex - 1);
}
    
//next slide
function nextSlide() {
    currentSlide(slideIndex + 1);
}
    

        
