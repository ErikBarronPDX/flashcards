$(document).ready(function() {
  $(".JS-clickable").click(function() {
    $("#JS-term").toggle();
    $("#JS-definition").toggle();
  });
});

$(document).ready(function() {
  $(".Operator-clickable").click(function() {
    $("#Operator-definition").fadeToggle();
  });
});