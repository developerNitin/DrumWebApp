
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[].addEventListner("click", function() {
    alert("I got clicked!");

  })
}
