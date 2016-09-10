var prompt = require('prompt');

prompt.start();

console.log("Available Functions:");

//do an fs read on the fn folder

prompt.get(['program'], function(err, result) {
  if (err) {
    return onErr(err);
  }
  console.log(result.program);
});

function onErr(err) {
  console.log(err);
  return 1;
}
