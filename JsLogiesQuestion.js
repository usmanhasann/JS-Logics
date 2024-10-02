// //01- Adiing two arrays using spread operator
// const array1 = ["Alice", "Bob", "Charlie"];
// const array2 = ["David", "Eve", "Frank"];
// const newarr = [...array1, ...array2];  //icma spread operator orignal array ki shallow copy bna rha hein mtlb sary sary ka items ko new arr ma show krwa rha hein
// console.log(newarr); //ye array1 and array2 ko combine kr ka dy daiti hein

//Having an array of objects  and we want to display only those items having the similar properties matchh
let electronicDevices = [
  { type: "TV", brand: "Samsung", model: "QLED 4K" },
  { type: "Laptop", brand: "Dell", model: "XPS 13" },
  { type: "TV", brand: "LG", model: "OLED 4K" },
  { type: "Smartphone", brand: "Apple", model: "iPhone 13" },
  { type: "Laptop", brand: "HP", model: "Envy x360" },
  { type: "Tablet", brand: "Amazon", model: "Kindle Fire HD" },
  { type: "TV", brand: "Sony", model: "Bravia 4K" },
  { type: "Smartphone", brand: "Samsung", model: "Galaxy S22" },
  { type: "Laptop", brand: "Lenovo", model: "ThinkPad X1" },
];
const prdct = electronicDevices.filter((item) => {
  return item.type === "Laptop";
});
console.log(prdct);
