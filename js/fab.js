function fib(x) {
  let prev1 = 1;
  let prev2 = 0;
  for (let i = 1; i < x + 1; i++) {
    y = prev1 + prev2;
    prev1 = prev2;
    prev2 = y;
  }
  return y;
}
x = 5;
console.log(fib(x));
y = fib(x);
document.getElementById("x").innerText = [x];
document.getElementById("y").innerText = [y];
