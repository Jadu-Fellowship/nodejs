function printSomething() {
  console.log("This code executes after 5 seconds");
}

setTimeout(printSomething, 0);
setTimeout(printSomething, 0);
setTimeout(printSomething, 0);
console.log("Hello");
console.log("Hello2");

// setInterval

/* Queue =>  [1]
// Stack                        // C++ API
                                setTimeout(printSomething, 0);
 

2
1


*/

// Event Loop
async function printS() {
  const apiResult = await fetch();

  console.log(apiResult);
}
/*
console.log
console.log

*/

module.exports = printSomething;
