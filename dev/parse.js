var drafter = require('drafter');
var fs = require('fs');

new Promise(function(resolve, reject) {
        fs.readFile('apiary.apib', 'utf8', (error, data) => {
            if (error) {
                reject(1);
            }

            resolve(data);
        });
    })
    .then(function(data) {
        return new Promise((resolve, reject) => {
            drafter.parse(data, function(error, result) {
                if (error) {
                    console.log(error);
                    resolve(1);
                } else {
                    for (x in result.content) {
                        var d = result.content[x];
                        // console.log(d);
                        if (d['element'] != 'category') {
                            console.log('Error:\n', d);
                            resolve(1);
                        }
                    }
                }

                resolve(0);
            });
        });
    })
    .then(process.exit);