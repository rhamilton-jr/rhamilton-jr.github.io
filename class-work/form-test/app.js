

$("#myForm").submit(handleSubmit)

function handleSubmit(event) {
  var dataOutput = $("#name-input").val()
  console.log(event)
  event.preventDefault()
  $("#name-input").val()
  $("#target").html(dataOutput)

}