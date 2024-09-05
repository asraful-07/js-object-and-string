const person = {
    firstName: "John",
    lastName: "Doe",
    // professon: Devoloper,
    age: 50,
    eyeColor: "blue",
    'fav plce': ['nanarbari', 'khalarbari', 'mamarbari']
  };

// console.log(person);
person.age = 26;
console.log(person.age);
console.log(person.eyeColor)
console.log(person['fav plce']);
person['fav plce'] = ['maldives', 'canada', 'america'];
// const job = professon;
// person[job] = 'devops'
console.log(person)


// 1st
// console.log(person['fav plce']);

// 2nd 
// const boyes = person['fav plce'];
// console.log(boyes);
