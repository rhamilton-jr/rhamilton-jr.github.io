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

/* const cats = [
  "../img/drainweb.png",
  "../img/deerweb.png"
]

const node = document.getElementById("firstheroslider");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.style.backgroundImage = `url(${image})`  
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(cats, node, 1000) */