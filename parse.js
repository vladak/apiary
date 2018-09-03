var drafter = require('drafter');
var fs = require('fs');

try {
    var data = fs.readFileSync('apiary.apib', 'utf8');

    drafter.parse(data, function(error, result) {
        if (error) {
          console.log(error);
          exit(1);
        } else {
	  for (x in result.content) {
	      var d = result.content[x];
	      // console.log(d);
	      if (d['element'] != 'category') {
	          console.log('Error:\n', d);
		  process.exit(1);
	      }
	  }
        }
    });
} catch(e) {
    console.log('Error:', e.stack);
    process.exit(1);
}
