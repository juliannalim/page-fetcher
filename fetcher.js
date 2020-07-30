const request = require('request');
const { writeFileSync, statSync } = require('fs');

// request with environment varible form user input at index [0]
// get a call back to do something which is a function 
// this function will use the file system library to use writeFileSync() 
// to write the file location from the environment var. at index[1]

request(process.argv[2], function (error, result, body) {
  writeFileSync(process.argv[3], body);
  const file = statSync(process.argv[3]);
  console.log(`Downloaded and saved ${file.size} bytes to ${process.argv[3]}`);
});
