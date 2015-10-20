console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});

//Question 1.
var avg;
var totalPrice = 0;
var itemsPrice = items.forEach(function(currElem, idx, arr){
     totalPrice += currElem.price;
     console.log(totalPrice);
   });
avg = Math.round(totalPrice / items.length);
console.log(avg);
$('#answer1').text(avg);



//Question 2.
var cost = items.filter(function(currElem, idx, arr){
    return currElem.price >= 14 && currElem.price <= 18;
});
var titleAndPrice = cost.map(function(currElem){
    return currElem.title + "<br>";
});

$('#answer2').append(titleAndPrice);


//Question 3.
var currencyCode = items.filter(function(currElem){
  return currElem.currency_code === 'GBP';
});

var myString = " ";
_.each(currencyCode, function(currElem, idx, arr){
  myString += currElem.title +" - $"+ currElem.price;
});

$('#answer3').text(myString);


//Question 4.
var materialWood = items.filter(function(currElem, idx, arr){
   return _.contains(currElem.materials,"wood");
});

var woodMap = materialWood.map(function(currElem){
  return [currElem.title];

});


$('#answer4').text(woodMap);


//Question 5.
var eightMat = items.filter(function(currElem,idx,arr){
  return currElem.materials.length >=8;
});
var eightMap = eightMat.map(function(currElem){
  return currElem.titles + currElem.materials + currElem.materials.length + "<br>";
});

$('#answer5').append(eightMap);



//Question 6
var homeMade = items.filter(function(currElem){
  return currElem.who_made === 'i_did';
});

var numOf = homeMade.length

$('#answer6').text(numOf);
