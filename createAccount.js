$(window).load(function() {

    //Reallocate top margin of input menu to scale based off of page size.
    //body height is the length of the top margin for this.
    function checkHeight() {
        var bookingMarginTop = $("body").height();
        bookingMarginTop += 50;
        $("#bookingFormContainer").css("margin-top", bookingMarginTop);
    }
    checkHeight();
    $(window).resize(checkHeight);

    //Check email address, username, password and repeat password.
    var validForm = true;

    function validateForm() {
        if (createAccountForm.elements[0].value === "") {
            alert("Please enter an email address!");
            validForm = false;
        }
        if (createAccountForm.elements[1].value === "") {
            alert("Please enter a username!");
            validForm = false;
        }
        if (createAccountForm.elements[2].value === "") {
            alert("Please enter a password!");
            validForm = false;
        }
        if (createAccountForm.elements[3].value === "") {
            alert("Please repeat your password!");
            validForm = false;
        }
        var password = createAccountForm.elements[2].value;
        var repeatPassword = createAccountForm.elements[3].value;
        if (password != repeatPassword) {
            alert("Please make sure your passwords are matching!");
            validForm = false;
        }

    }


    //Now for the Members login form logic.
    $("#submitAccount").click(function() {
        validateForm();

        if (validForm === true) {
            alert("Thanks for creating your account!");
            window.location.replace("members.html");
            //Stop jquery script execution.
            return false;
        } else {
            location.reload();
        }
    });


});
