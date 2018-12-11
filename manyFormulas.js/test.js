const str = "aiueo";
Array.prototype.forEach.call(str, (item, index) => {
  console.log(`${index}: ${item}`);
})


const sum = 10;
const str2 = "";
console.log(sum + Number(str2));
