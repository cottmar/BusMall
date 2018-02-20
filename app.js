'use strict';

var productNames = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'dog-duck', 'dragon', 'greenmonster', 'pen', 'pet-sweep', 'r2d2bag', 'scissors', 'shark', 'sweep', 'tauntaun', 'toiletstand', 'unicorn', 'usb', 'water-can', 'wine-glass'];

ProductImage.allProductImages = [];
ProductImage.viewed = [];
ProductImage.totalClicks = 0;

//DOM access
ProductImage.container = document.getElementById('image_container');
ProductImage.pics = [document.getElementById('img-1'), document.getElementById('img-2'), document.getElementById('img-3')];
ProductImage.list = document.getElementById('productlist');

//make an object constructor
function ProductImage(imageName) {
  this.imageName = imageName;
  this.filepath = 'img/' + imageName + '.jpg';
  this.votes = 0;
  this.views = 0;
  ProductImage.allProductImages.push(this);
}

//make new Image instances //how do we make a new object out of a constructor function
for (var i = 0; i < productNames.length; i++) {
  new ProductImage(productNames[i]);
}



//write a function to randomly display images
function makeRandom() {
  return Math.floor(Math.random() * productNames.length);
}

function randomImages() {
  while (ProductImage.viewed.length < 6) {
    var rando = makeRandom();
    while (!ProductImage.viewed.includes(rando)) {
      ProductImage.viewed.push(rando);
    }
  }

  for (var i = 0; i < 3; i++) {
    var temp = ProductImage.viewed.shift();
    ProductImage.pics[i].src = ProductImage.allProductImages[temp].filepath;
    ProductImage.pics[i].alt = ProductImage.allProductImages[temp].imageName;
    ProductImage.pics[i].title = ProductImage.allProductImages[temp].imageName;
    ProductImage.allProductImages[temp].views += 1;
  }
}

function handleClick(event) {
  if (event.target === ProductImage.container) {
    return alert('Please click on an image.');
  }

  ProductImage.totalClicks += 1;
  if (ProductImage.totalClicks > 24) {
    ProductImage.container.removeEventListener('click', handleClick);
    ProductImage.container.style.display = 'none';
    showList();
  }

  for (var i = 0; i < ProductImage.allProductImages.length; i++) {
    if (event.target.alt === ProductImage.allProductImages[i].imageName) {
      ProductImage.allProductImages[i].votes += 1;
      console.log(event.target.alt + ' has ' + ProductImage.allProductImages[i].votes + ' votes in ' + ProductImage.allProductImages[i].views + ' views ');
    }
  }
  randomImages();
}

function showList() {
  for (var i = 0; i < ProductImage.allProductImages.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = ProductImage.allProductImages[i].imageName + ' has ' + ProductImage.allProductImages[i].votes + ' votes in ' + ProductImage.allProductImages[i].views + ' views.';

    ProductImage.list.appendChild(liEl);
  }
}

randomImages();
ProductImage.container.addEventListener('click', handleClick);