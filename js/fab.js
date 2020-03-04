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

// function fib(x){
//     if (x==0) return 0;
//     if(x <= 2 ) return 1;
//     return fib(x -1) + fib(x-2);
// }

function fibfunction() {
  let x = document.getElementById("inputval").value;

  fetch(`http://localhost:5050/fibonacci/${x}`)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      let y = data.result;
      document.getElementById("demo").innerText = y;
    //   console.log(y);
    });
}
