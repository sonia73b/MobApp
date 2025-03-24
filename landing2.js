$(document).ready(function () {
    // Hamburger Menu Toggle
    $(".menu-toggle").click(function () {
        $("nav").toggleClass("show");
        $("body").toggleClass("menu-open"); // Add class to body to hide "Shop Now" button
    });

    // Fade-in and Fade-out effect on "Shop Now" button
    function animateButton() {
        $("#shopNowBtn").fadeOut(1000).fadeIn(1000, animateButton);
    }

    animateButton(); // Start animation loop

    // Function when clicking the "Shop Now" button
    $("#shopNowBtn").click(function () {
        $("#outputs").html("Welcome to the latest trends!");
    });
});
 