$(document).ready(function() {
    // When the 'Find Card' button is clicked
    $("#FindButton").click(function() {
    // Get the selected card ID from the dropdown
    var selectedCard = $("#findingcar").val();
    
    // If a valid card is selected
    if (selectedCard) {
       // Scroll to the selected card smoothly
       $('html, body').animate({
           scrollTop: $("#" + selectedCard).offset().top
       }, 1000); // 1000ms for smooth scroll effect
    } else {
       alert("Please select a card first!");
    }
    });
    });