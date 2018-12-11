const str = "aiueo";
Array.prototype.forEach.call(str, (item, index) => {
  console.log(`${index}: ${item}`);
})
