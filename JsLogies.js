// const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];

// const newlist = names.forEach(function (value) {
//   //   console.log(value) Return all the array values;

//   //TODO: Remove any array values (Charlie)
//   if (value === "Charlie") {
//   } else {
//     console.log(value);
//   }
// });

// //TODO: Map Methods

// //FIXME: We want ky hum hr array item ma names ka last pa ji lga dayinn

// const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
// const itm = names.map((name) => {
//   return name + " ji ";
// });
// console.log(itm);

// //TODO: Filter Methods

// //FIXME: We want ky hum hr array item ma sirf onn names ko display krwayin jnka name A sa shoro hota hein

// const names = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "Diana",
//   "Eve",
//   "Azlan",
//   "Amir",
//   "Afaq",
//   "Frank",
// ];
// const itm = names.filter((name) => {
//   if (name.startsWith("A")) {
//     return true;
//   }
// });
// console.log(itm);

//TODO: Spread and Rest operator

// //Spread Operator
// const names = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "Diana",
//   "Eve",
//   "Azlan",
//   "Amir",
//   "Afaq",
//   "Frank",
// ];
// const copynames = [...names];
// console.log(copynames);

//Rest Operator
function sum(...a) // , b, c,
// ...res
{
  console.log(
    // res
    a
  );
  return;
  //  a + b + " " + c;
}
//TODO:icma ju element hmna pass kyin hei  wo sabb combine hu jaty hein ju ko co
let newdata = sum(2, 3, "usman", 2, 3, 4, 2, 4, 2);
console.log(newdata);
