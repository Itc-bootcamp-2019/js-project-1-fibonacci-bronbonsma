function fib(x) {
  let a = 0;
  let b = 1;
  let y = 0;
  for (let i = 2; i <= x; i++) {
    y = a + b;
    a = b;
    b = y;
  }
  return y;
}

function fibfunction() {
  var x = document.getElementById("inputval").value;
  document.getElementById("demo").innerText = fib(x);
} 
