import * as fs from 'fs';

function main(args: string): void {
  const str: Array<string> = args.split(' ');
  const a: number = parseInt(str[0]);
  const b: number = parseInt(str[1]);
  if ((a * b) % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

main(fs.readFileSync('/dev/stdin', 'utf8'));