  const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
  console.log(fruits_seasonal);  


console.warn("===============log first and last element===============");
console.log(`First element:${fruits_seasonal[0]}`);
console.log(`Last element:${fruits_seasonal[fruits_seasonal.length-1]}`);

console.warn("====================add papaya element before banana===========");
//fruits_seasonal = ["Banana", "Orange", "Apple", "Water Melon"];
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.warn("====================remove mango from array==================");
const remove = fruits_seasonal.splice(4,1);
console.log('fruits_seasonal',fruits_seasonal);
console.log('remove',remove);

console.warn("====================add pineapple at last positon================");
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.warn("======================insert dragon fruit before water melon===============");
//console.log(fruits_seasonal);
fruits_seasonal.splice(4, 0, 'Dragon fruit');
console.log(fruits_seasonal);

console.warn("======================replace orange with kiwi=================");
console.log(fruits_seasonal);
fruits_seasonal.splice(2,1,'Kiwi'); //will insert element 22 before index 2 0 means dont replaced
//console.log(splicedElement);
console.log(fruits_seasonal);

console.warn("==============log index 1 to 4===================");
//console.log(`index:${fruits_seasonal[0]}`);
//console.warn("==================last 3 element==============");
//const first4 = fruits_seasonal.slice(+4);
//console.log(last3);
//const first4Again = fruits_seasonal.slice(fruits_seasonal.length(1-4));
//console.log(first4Again);
//console.log(fruits_seasonal);
const middle_fruits = fruits_seasonal.slice(1,4);
console.log(middle_fruits);

console.warn("==================last 3 element==============");
const last3 = fruits_seasonal.slice(-3);
//console.log(last3);
const last3Again = fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(last3Again);
//console.log(fruits_seasonal);