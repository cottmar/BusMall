//data: global vars for DOM
//      total clicks <25
//      array

'use strict';

//array to store the ojbects
var productNames = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'dog-duck', 'dragon', 'greenmonster', 'pen', 'pet-sweep', 'r2d2bag', 'scissors', 'shark', 'sweep', 'tauntaun', 'toiletstand', 'unicorn', 'usb', 'water-can', 'wine-glass'];

ProductImage.allProductImages = [];
var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');

//make an object
function ProductImage(imageName) {
  this.imageName = imageName;
  this.filepath = 'img/' + imageName + '.jpg';
  this.pickClickCount = 0;
  this.numPickClick = 0;
  ProductImage.allProductImages.push(this);
}

//make new Image instances //how do we make a new object out of a constructor function
for (var i = 0; i < productNames.length; i++) {
  new ProductImage(productNames[i]);
}



//write a function to randomly display images
function randomImage() {
  var randomIndex = [];
  for (i = 0; i < 3; i++) {
    var randomPick = Math.floor(Math.random() * ProductImage.allProductImages.length);
    randomIndex.push(randomPick);
  }
  console.log(randomIndex);

  img1.src= ProductImage.allProductImages[randomIndex[0]].filepath;
  img1.alt= ProductImage.allProductImages[randomIndex[0]].imageName;
  img1.title= ProductImage.allProductImages[randomIndex[0]].imageName;

  img2.src= ProductImage.allProductImages[randomIndex[1]].filepath;
  img2.alt= ProductImage.allProductImages[randomIndex[1]].imageName;
  img2.title= ProductImage.allProductImages[randomIndex[1]].imageName;

  img3.src= ProductImage.allProductImages[randomIndex[2]].filepath;
  img3.alt= ProductImage.allProductImages[randomIndex[2]].imageName;
  img3.title= ProductImage.allProductImages[randomIndex[2]].imageName;
}

function noRepeatImages() {
  var doNotRepeatImages = [];
  while (doNotRepeatImages[0] === doNotRepeatImages[1] || doNotRepeatImages[1] === doNotRepeatImages[2] || doNotRepeatImages[2] === doNotRepeatImages[0]) {
    doNotRepeatImages = [];
    for (i = 0; i < 3; i++) {
      var randomPick = Math.floor(Math.random() * ProductImage.allProductImages.length);
      doNotRepeatImages.push(randomPick);
    }
  }
  noRepeatImages();

  //write a function that will generate a random number between 0 and 19 -- needs to give 3 different numbers between
  randomImage();

  img1.addEventListener('click', randomImage);
  img2.addEventListener('click', randomImage);
  img3.addEventListener('click', randomImage);
}