$(window).load(function() {
    //variable for time slots and other booking type being present for validation.
    var otherBookingDisplayed = false;
    var timeSlotDisplayed = false;


    //Logic for the Booking form.
    /*Hide the time slots until a date is selcted*/
    $(".date").datepicker({
        onSelect: function(dateText) {
            $("#timeslotContainer").css("display", "block");
            timeSlotDisplayed = true;
        }
    });

    //On selection of the other option in the booking form allowuser to specify.
    $('#bookingTypeSelection').change(function() {
        if ($(this).val() === '4') {
            $("#otherBooking").css("display", "block");
            otherBookingDisplayed = true;
        }
    });

    //check name input
    //email input
    //phone input .
    var validForm = true;
    function validateForm() {
        if (saveForm.elements[0].value === "") {
            alert("Please select a booking type");
            validForm = false;
        }

        if (otherBookingDisplayed === true && saveForm.elements[1].value === "") {
            alert("Please specify your booking type.");
            validForm = false;
        }

        if (saveForm.elements[2].value === "") {
            alert("Please enter your name");
            validForm = false;
        }
        if (saveForm.elements[3].value === "") {
            alert("Please enter your email address");
            validForm = false;
        }
        if (saveForm.elements[4].value === "") {
            alert("Please enter your phone number");
            validForm = false;
        }
        if (saveForm.elements[5].value === "") {
            alert("Please enter your number of guests");
            validForm = false;
        }

        if (saveForm.elements[6].value === "2021-04-01") {
            alert("Please enter a date for your booking");
            validForm = false;
        }

        if (timeSlotDisplayed === true && saveForm.elements[7].value === "") {
            alert("Please enter a time for your booking");
            validForm = false;
        }

    }


    $("#saveButton").click(function() {
        validateForm();

        if (validForm === true) {
            alert("Thank you for booking with China Delight!");
            location.reload();
        } else {
            location.reload();
        }
    });



    //Reallocate top margin of input menu to scale based off of page size.
    //body height is the length of the top margin for this.
    function checkHeight() {
        var bookingMarginTop = $("body").height();
        bookingMarginTop += 50;
        $("#bookingFormContainer").css("margin-top", bookingMarginTop);
    }
    checkHeight();
    $(window).resize(checkHeight);


    //Now for the Members login form logic.
    $("#createAccountButton").click(function() {
        window.location.replace("createAccount.html");
        //Stop jquery script execution.
        return false;
    });

    $("#loginButton").click(function() {
        var validLogin = true;
        if (loginForm.elements[0].value === "") {
            alert("Please enter a user name");
            validLogin = false;
        }
        if (loginForm.elements[1].value === "") {
            alert("Please enter a password");
            validLogin = false;
        }

        if (validLogin === true) {
            alert("Welcome to your China Delight Member's Portal");
            location.reload();
        }
    });

});
