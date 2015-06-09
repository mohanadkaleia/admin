var isCollpse = false;

$( document ).ready(function() {
    $("#collapse-button").click(function() {
        if (!isCollpse) {
            // Minimize
            minimizeNav();
            isCollpse = true;
        } else {
            // Maximize
            maximizeNav();
            isCollpse = false;
        }
    });
});

function minimizeNav() {
    // Hide the header title
    $("#tool_bar ul.title li h1").hide();

    // Modify the class to be col-md-1 instead of 2 in user-menu
    $("#tool_bar ul.title").removeClass("col-md-2");
    $("#tool_bar ul.title").addClass("col-md-1");
    $("#tool_bar user-menu").removeClass("col-md-10");
    $("#tool_bar user-menu").addClass("col-md-11");

    // Modify the class to be col-md-1 instead of 2
    $("#main nav").removeClass("col-md-2");
    $("#main nav").addClass("col-md-1");
    $("#main #content").removeClass("col-md-10");
    $("#tool_bar user-menu").addClass("col-md-11");

    // Hide all title of nav items
    $("#main nav .item-title").hide();
    $("#main nav .badge").hide();
}

function maximizeNav() {
    // Hide the header title
    $("#tool_bar ul.title li h1").show();

    // Modify the class to be col-md-1 instead of 2 in user-menu
    $("#tool_bar ul.title").removeClass("col-md-1");
    $("#tool_bar ul.title").addClass("col-md-2");
    $("#tool_bar user-menu").removeClass("col-md-11");
    $("#tool_bar user-menu").addClass("col-md-10");

    // Modify the class to be col-md-1 instead of 2
    $("#main nav").removeClass("col-md-1");
    $("#main nav").addClass("col-md-2");
    $("#main #content").removeClass("col-md-11");
    $("#tool_bar user-menu").addClass("col-md-10");

    // Show all title of nav items
    $("#main nav .item-title").show();
    $("#main nav .badge").show();
}
