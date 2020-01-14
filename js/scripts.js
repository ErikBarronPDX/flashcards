$(document).ready(function() {
  $(".clickable").click(function() {
    $(".term").toggle();
    $(".definition").toggle();
  });
});