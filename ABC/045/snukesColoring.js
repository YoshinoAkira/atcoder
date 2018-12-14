const input = require("fs").readFileSync("/dev/stdin","UTF-8").trim().split("\n");
const line1 = input[0].split(" ");
const H = Number(line1[0]);
const W = Number(line1[1]);
const N = Number(line1[2]);

const rest = input.slice(1);
const array = Array.from(new Array(H), () => new Array(W).fill(0));

rest.forEach((line) => {
  const nums = line.split(" ").map((nl) => Number(nl));
  array[nums[0]-1][nums[1]-1] = 1;
})
