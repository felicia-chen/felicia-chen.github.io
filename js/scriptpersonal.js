//Responsive Menu


//Page Transition Fades Script
// window.addEventListener("beforeunload", function () {
//   document.body.classList.add("animate-out");
// });

//masonry
$(document).ready(function() {
    $(function(){
        var $container = $('.masonry');
        $container.imagesLoaded( function(){
            $container.masonry({
                itemSelector : '.item'
            });
        });
    });
//	var scroll_start = 0;
//   	var startchange = $('#introduction');
//   	var offset = startchange.offset();
//    if (startchange.length){
//   		$(document).scroll(function() {
//      		scroll_start = $(this).scrollTop();
//      		if(scroll_start > offset.top - 0) {
//         		 $("#nav").css('background-color', 'rgba(255, 255, 255, 0.9)');
//         		 $(".list").css('color', 'black');
//     		} else {
//         		 $("#nav").css('background-color', 'transparent');
//         		 $(".list").css('color', 'white');
//       		}
// 		 });
//   	}

});

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
