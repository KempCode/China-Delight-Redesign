//On the page load run all of these functions.
$(window).load(function() {

    //Desktop drop down on hover events.
    //Order online menu
    $(".orderOnlineButtonListItem").hover(function() {
        $(".desktopDropdown").toggle();
    });
    //Keeping the menu active while mouse over.
    $(".desktopDropdown").hover(function() {
        $(".desktopDropdown").toggle();
    });


    //Members portal menu
    $(".membersPortalButtonListItem").hover(function() {
        $(".desktopDropdownMembers").toggle();
    });
    //Keeping the menu active while mouse over.
    $(".desktopDropdownMembers").hover(function() {
        $(".desktopDropdownMembers").toggle();
    });

    //Contact Desktop dropdown menu
    $(".contactMenuButtonListItem").hover(function() {
        $(".desktopDropdownContact").toggle();
    });
    //Keeping the menu active while mouse over.
    $(".desktopDropdownContact").hover(function() {
        $(".desktopDropdownContact").toggle();
    });



    //Show hidden order online menu.
    $("#orderOnlineButton").click(function() {
        if ($(window).width() <= 1273) {
            $(".orderMenuContainer").fadeTo(0, 1000);
            $(".orderMenu").fadeTo(0, 1000);
        }
    });

    //Show hidden contact menu.
    $("#contactMenuButton").click(function() {
        if ($(window).width() <= 1273) {
            $(".contactMenuContainer").fadeTo(0, 1000);
            $(".contactMenu").fadeTo(0, 1000);
        }
    });

    //Show hidden members menu.
    $("#membersPortalButton").click(function() {
        if ($(window).width() <= 1273) {
            $(".membersMenuContainer").fadeTo(0, 1000);
            $(".membersMenu").fadeTo(0, 1000);
        }
    });


    //Mobile back menu functionality.
    //Hide the current menu.
    $(".backButtonMobile").click(function() {
        ////  $(".container").parent().fadeOut(1000);
        $(".backButtonMobile").parent().fadeOut("slow");
        ////$('.backButtonMobile').parent().css("display","none");

    });


    //Hide Mobile menu list items when page resize.
    function checkWidth() {
        var windowWidth = $(window).width();
        if (windowWidth >= 1273) {
            $("#down-arrow a").hide();
            $(".orderMenu").hide();
            $(".contactMenu").hide();
            $(".MembersMenu").hide();
            //Hide submenus on screen resize
            $(".orderMenuContainer").hide();
            $(".contactMenuContainer").hide();
            $(".membersMenuContainer").hide();

        }

    }
    checkWidth();
    $(window).resize(checkWidth);

    //On page rezise make sure the desktop drop down menus are aligned properly.
    //This is due to nav bar elements dynamically scaling width based on browser
    //width in css.
    function alignDropDownMenu() {
        var navButtonWidth = $(".orderOnlineButtonListItem a").outerWidth(true);
        var newMargin = navButtonWidth * 3 + (navButtonWidth - 160) / 2 + 2;
        $(".desktopDropdown").css("margin-left", newMargin);

        //responsive members dropdown alignment.
        var newMembersMargin = navButtonWidth * 4 + (navButtonWidth - 160) / 2 + 2;
        $(".desktopDropdownMembers").css("margin-left", newMembersMargin);

        //responsive contact menu dropdown alignment.
        var newContactMargin = navButtonWidth * 5 + (navButtonWidth - 160) / 2 + 2;
        $(".desktopDropdownContact").css("margin-left", newContactMargin);


    }
    //Run the function once on page load.
    alignDropDownMenu();
    $(window).resize(alignDropDownMenu);


});
