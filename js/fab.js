// function fib(x) {
//   let a = 0;
//   let b = 1;
//   let result = 0;
//   for (let i = 2; i <= x; i++) {
//     result = a + b;
//     a = b;
//     b = result;
//   }
//   return result;
// }

//  recursive thinking 

function fib(x){
    if(x <= 2 ) return 1;
    return fib(x -1) + fib(x-2);
}

function fibfunction() {
  var x = document.getElementById("inputval").value;
  document.getElementById("demo").innerText = fib(x);
}
