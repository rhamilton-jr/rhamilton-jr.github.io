var header = 'off'

function showheaderhideheader() {
  if (header === 'off') {
    header = 'on'
    $('#navid').show();
  }else {
    header = 'off'
    $('#navid').hide();
  }
}

$('#hamburgermenu').click(showheaderhideheader)

/*var cats = [
  "img/drainweb.png",
  "img/deerweb.png"
]

var node = document.getElementById("deerwebid");

var cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        console.log(container)
        container.style.backgroundImage = `url(${image})`  
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(cats, node, 1000)*/