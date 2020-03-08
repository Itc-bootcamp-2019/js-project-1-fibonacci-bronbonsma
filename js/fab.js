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

// function fibfunction() {
//   let x = document.getElementById("inputval").value;
//   console.log(x);
//   const loader = '<div class="spinner-border" role="status"></div>';
//   document.getElementById("loaderplacement").innerHTML = loader;
//   fetch(`http://localhost:5050/fibonacci/${x}`)
//     .then(resp => resp.json()) // Transform the data into json
//     .then(function(data) {
//       let y = data.result;
//       document.getElementById("demo").innerText = y;
//       const loaderhidden = '<div class="spinner-border:after" role="status"></div>';
//       document.getElementById("loaderplacement").innerHTML = loaderhidden;
//     });
// }

function fibfunction() {
  let x = document.getElementById("inputval").value;
  document.getElementById("demo").innerText = "";
  if (x > 50) {
    document.getElementById("error").classList.remove("gone");
    document.getElementById("inputval").classList.add("inputerror");
  } else {
    document.getElementById("error").classList.add("gone");
    document.getElementById("inputval").classList.remove("inputerror");
    document.getElementById("spinner").classList.remove("loaded");

    fetch(`http://localhost:5050/fibonacci/${x}`)
      .then(response => {
        if (response.ok) {
          document.getElementById("redError").classList.add("loaded")
          return response.json();
        } else {
          document.getElementById("redError").classList.remove("loaded")
          throw response;
        }
      })
      .then(function(data) {
        let y = data.result;
        document.getElementById("spinner").classList.add("loaded");
        document.getElementById("demo").innerText = y;
      })

      .catch(error => error.text())
      .then(serverError => {
        console.log(serverError);
        document.getElementById("spinner").classList.add("loaded")
        document.getElementById("redError").innerText = serverError;
      
      });
  }
}
