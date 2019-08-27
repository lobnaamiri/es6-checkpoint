var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];

  //how to Convert the function to arrow functions

  let getAge = (pet) =>  new Date().getFullYear() - pet.bornOn
  /*
  var petsWithAge = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  }
  */

 //for loop to map
 var petsWithAge = pets.map( pet => pet.age == getAge(pet) );
  console.log(petsWithAge);

  /*
  var dogs = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.type === "dog") {
      dogs.push(pet);
    }
  }
  */
 //for loop to filter
  const dogs = pets.filter(pet => pet.type === "dog");
  console.log(dogs);

  /*
  var jasper;
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.name === "Jasper") {
      jasper = pet;
    }
  }
  */

 //for loop to find
var jasper;
var pet = pets.find(pet => pet.name === "Jasper");

  //Change the quotes to template literal quotes

  console.log(`Jasper is ${Jasper.age} years old`);
  