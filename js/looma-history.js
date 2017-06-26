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
    //POPUP STUFF
    $('body').click(function(e) {

        var target = $(e.target);

        if (target.is('.dropbtn'))
        {
            var historypopup = function(msg, notTransparent){


            if (!notTransparent) LOOMA.makeTransparent();
            $(document.body).append("<div class= 'popup'>" +
            "<button class='popup-button' id='dismiss-popup'><b>X</b></button>"+ msg +
            LOOMA.translatableSpans("OK", "ठिक छ") + "</button></div>").hide().fadeIn(1000);

            LOOMA.makeActivityButton($(target).attr("data-id1"), $(".popup"));
            LOOMA.makeActivityButton($(target).attr("data-id2"), $(".popup"));


             $('#dismiss-popup').click(function() {
             // $("#close-popup").off('click');
             //$("#dismiss-popup").off('click');
             LOOMA.closePopup();
            });
 /*   $('#dismiss-popup').click(function() {
        LOOMA.closePopup()
    });
*/
            };  //end alert()
            historypopup("The territory of Nepal has a recorded history since the Neolithic age. The name 'Nepal' is first recorded in texts from the Vedic Age, the era which founded Hinduism, the predominant religion of the country. In the middle of the first millennium BCE, Gautama Buddha, the founder of Buddhism, was born in southern Nepal. Parts of northern Nepal were intertwined with the culture of Tibet. ", false);
        }

    })




