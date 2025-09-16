console.log("Hello World");

let testA = "hallo world"

console.log(testA);

testA = 98;

console.log(testA);

function increament() {
  let testA = 9
  let testB = 8
  console.log(testA + testB);
}

function rating(score) {
  let grade = ""
  if (score < 3) {
    grade = "cukup"
  } else if (score >= 3 && score < 3.5) {
    grade = "baik"
  } else {
    grade = "sangat baik"
  }
  return grade
}

console.log(rating(3));

let array = [32, "fariz", true, null, undefined]
console.log(array[2])

const object = {
  name: "fariz",
  age: 30
}

console.log(object.age);

const arrayObj = [
  {
    name: "fariz",
    age: 30
  },
  {
    name: 'rizky',
    address: 'bonjer'
  }
]

console.log(arrayObj[1].address);
console.log(arrayObj[0].age + '8');

let score = 3.1
let b = '9'
console.log(score >=3.5 ? 'sangat baik' : score >=3 ? 'baik' : 'cukup');

function hitungFaktorial(number) {
  if (number === 0 || number === 1) {
    return 1
  } else {
    return number * hitungFaktorial(number - 1)
  }
}

console.log(hitungFaktorial(120));