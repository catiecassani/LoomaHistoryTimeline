  var myHilitor;


  document.addEventListener("DOMContentLoaded", function() {
    myHilitor = new Hilitor2("playground");
    myHilitor.setMatchType("left");
  }, false);

  document.getElementById("keywords").addEventListener("keyup", function() {
    myHilitor.apply(this.value);
  }, false);


    function scrollLeft() {
        //window.scrollBy(0,-100);
        $('#playground').animate({scrollLeft: '-=300px'}, 700);
    }

    function scrollRight() {
        //window.scrollBy(0,100);
        $('#playground').animate({scrollLeft: '+=300px'}, 700);
    }

    $('#playground').scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });

    $('.scrollButtonLeft').click(scrollLeft);
    $('.scrollButtonRight').click(scrollRight);

    $('.returnToLeftmost').click(function() {      // When arrow is clicked
        $('#playground').animate({
            scrollLeft : 0                       // Scroll to top of body
        }, 1000);
});