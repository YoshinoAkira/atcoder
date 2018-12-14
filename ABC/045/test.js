const array = [];
array[0] = [];
array[0][3] = 1;
array[3] = [];
array[3][2] = 4;
console.log(array);
const input = Array.from(new Array(3), () => new Array(3).fill(0));
console.log(input);
