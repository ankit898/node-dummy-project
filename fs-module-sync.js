const {readFileSync, writeFileSync} = require('fs');
console.log("started with the task");

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

 writeFileSync('./content/result-syn.txt', `this includes both: ${first} & ${second}`, {flag: 'a'});

 console.log("finished with the task");