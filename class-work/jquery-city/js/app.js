// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

/*
$("#first").click(first)

  function first() {
    $("#bigimage").attr("src", "img/1.jpg")
}


$("#second").click(second)
 
  function second() {
    $("#bigimage").attr("src", "img/2.jpg")
}

$("#third").click(third)

  function third() {
    $("#bigimage").attr("src", "img/3.jpg")
}


$("#fourth").click(fourth)

 function fourth() {
    $("#bigimage").attr("src", "img/4.jpg")
}
*/



function changeImage() {
  console.log(this)
  var src = $(this).attr("src")
  $("#bigimage").attr("src", src)
}

$(".thumb").click(changeImage)

