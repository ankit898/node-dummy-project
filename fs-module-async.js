const { readFile, writeFile} = require('fs');

console.log("start task");

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-asynsc.txt', 
        `this includes both: ${first} & ${second}`,
        (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log("finished with the task");
        })
    })
});

console.log("starting with the next task");