import * as fs from 'fs';

const input: string = fs.readFileSync('/dev/stdin', "utf8")
const splitInput: Array<string> = input.split(/\s|\n/);
const sum: number = +splitInput[0] + +splitInput[1] + +splitInput[2];
const str: string = splitInput[3];
const output: string = sum.toString() + " " + str;
console.log(output)
