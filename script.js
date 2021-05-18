const hero = document.querySelector('.hero')

hero.style.backgroundImage = 'url(img/animals.jpg)'

const imageFileNames = [
  'animals',
  'baby',
  'couple',
  'family',
  'food',
  'friends',
  'vacation-beach',
  'vacation-cold',
  'wedding',
].sort(() => 0.5 - Math.random())

function changeHeroBackgroundImage(fileName) {
  hero.style.backgroundImage = `url(img/${fileName}.jpg)`
}

function sliderAnimation(index) {
  if (index === imageFileNames.length) index = 0

  changeHeroBackgroundImage(imageFileNames[index])
  setTimeout(() => sliderAnimation(index + 1), 5000)
}

function preloadImage(fileName) {
  var img = new Image()
  img.src = `url(img/${fileName}.jpg)`
}

function preloadImages() {
  imageFileNames.forEach(fileName => preloadImage(fileName))
}

preloadImages()

$(window).on('load', function () {
  $('.loader').fadeOut('slow')
  sliderAnimation(0)
})
