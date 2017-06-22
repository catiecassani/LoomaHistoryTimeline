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

    /* NOTE on LOOMA popups: nested calls to popups dont work
 *      fix this sometime?
 */
/**
 * This function creates a popup message box that can be dismissed by the user.
 * @param msg - The message the user is presented.
 * @param time (optional)- a delay in seconds after which the popup is automatically closed
 * */
//var popupInterval;

$(".dropbtn").click(function(){historypopup(false);});

historypopup = function(notTransparent){
    LOOMA.closePopup();
    if (!notTransparent) LOOMA.makeTransparent();
    $(document.body).append("<div class= 'popup'>" +
        "<button class='popup-button' id='dismiss-popup'><b>X</b></button>"+
        LOOMA.translatableSpans("OK", "ठिक छ") + "</button></div>").hide().fadeIn(1000);

    LOOMA.makeActivityButton("58fd32b7cc33e63103d63af2", $(".popup"));
    LOOMA.makeActivityButton("58fd32b7cc33e63103d63af2", $(".popup"));
    LOOMA.makeActivityButton("58fd32b7cc33e63103d63af2", $(".popup"));



    $('#dismiss-popup').click(function() {
       // $("#close-popup").off('click');
        //$("#dismiss-popup").off('click');
        LOOMA.closePopup();
    });
 /*   $('#dismiss-popup').click(function() {
        LOOMA.closePopup();
    });
*/
};  //end historypopup()
