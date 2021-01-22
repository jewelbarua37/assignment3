// https://github.com/jewelbarua37/assignment3

// kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var meter = kilometerToMeter(150);

//console.log(meter);


// budgetCalculator

function budgetCalculator(watch, mobile, laptop){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice= laptop * 500;
    var totalBudget = watchPrice + mobilePrice + laptopPrice;
    return totalBudget;
}

var totalBudget = budgetCalculator(2, 5, 7);

//console.log(totalBudget);


 var friends = ["Amit", "Borhan", "Fozlu", "Kashmir"];
 var longName = friends[0];

    for (var i=0; i < friends.length; i++){
       if(friends[i].length>longName.length){
             longName = friends[i];
      }
   }

//console.log(longName);