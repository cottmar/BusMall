//data: global vars for DOM
//      contructor
//      instances
//      total clicks <25
//      array

'use strict';

//array to store the ojbects
var productNames = ['banana', 'boots', 'breakfast', 'bubblegum', 'chair', 'dog-duck', 'dragon', 'greenmonster', 'pen', 'pet-sweep', 'r2d2bag', 'scissors', 'shark', 'sweep', 'tauntaun', 'toiletstand', 'unicorn', 'usb', 'water-can', 'wine-glass'];
ProductImage.allProductImages = [];

//make an object
function ProductImage(imageName) {
  this.imageName = imageName;
  this.filepath = 'img/' + imageName + '.jpg';
  ProductImage.allProductImages.push(this);
}

//make new Image instances //how do we make a new object out of a constructor function
for (var i = 0; i < productNames.length; i++) {
  new ProductImage(productNames[i]);
}

//write a function to randomly display images
function randomImage() {
  var randomImage = Math.floor(Math.random() * ProductImage.allProductImages.length);
  console.log(ProductImage.allProductImages[randomImage]);
}
randomImage();
//we need to access the img element in the dom

//console.log thefunction --- refer to demo

//assign the src, alt, and title attributes to the img element

//make sure we have a listener event for lick and on what image