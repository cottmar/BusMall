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
    // showList();
    makeChart();
  }

  for (var i = 0; i < ProductImage.allProductImages.length; i++) {
    if (event.target.alt === ProductImage.allProductImages[i].imageName) {
      ProductImage.allProductImages[i].votes += 1;
      console.log(event.target.alt + ' has ' + ProductImage.allProductImages[i].votes + ' votes in ' + ProductImage.allProductImages[i].views + ' views ');
    }
  }
  randomImages();
}

randomImages();
ProductImage.container.addEventListener('click', handleClick);

// ++++++++++++++++++++++++++++++++++++++++++++
// CHART STUFF
// Charts rendered using Chart JS v.2.7.1
// http://www.chartjs.org/
// ++++++++++++++++++++++++++++++++++++++++++++

function makeChart () {
  var votes = [];
  for (i = 0; i < ProductImage.allProductImages.length; i++) {
    votes[i] = ProductImage.allProductImages[i].votes;
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
makeChart();