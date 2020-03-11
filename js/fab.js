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




let x ;

function fib(x){
    if (x==0) return 0;
    if(x <= 2 ) return 1;
    return fib(x -1) + fib(x-2);
}



  function getX() {
   x = document.getElementById("inputval").value;
   console.log(x)
  document.getElementById("demo").innerText = "";
  if (x > 50 ) {
    document.getElementById("error").classList.remove("gone");
    document.getElementById("inputval").classList.add("inputerror");
  } else {
    console.log(x)
    checkbox()
   
  
  }
}


function fibfunction(){
    document.getElementById("error").classList.add("gone");
    document.getElementById("inputval").classList.remove("inputerror");
    document.getElementById("spinner").classList.remove("loaded");
    fetch(`http://localhost:5050/fibonacci/${x}`)

      .then(response => {
        if (response.ok) {
          document.getElementById("redError").classList.add("loaded");
          return response.json();
        } else {
          document.getElementById("redError").classList.remove("loaded");
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
        document.getElementById("spinner").classList.add("loaded");
        document.getElementById("redError").innerText = serverError;
        
      });
  }



function fibResults(){

fetch(`http://localhost:5050/getFibonacciResults`)
.then(response => {
  response.json()
.then(function(data){
  // let a = data;
  // document.getElementById("dataArray").innerText = a;
   console.log(data);

  for (let i = 0; i < data.results.length; i++) {
    let myDate= new Date (data.results[i].createdDate)
    

    // console.log(data.results[i])
    let element = document.getElementById("dataArray");
    let line = document.createElement("p");
    line.innerHTML +=  "The Fibonacci of <b> "  + data.results[i].number  +  " </b>  is <b>  " + data.results[i].result  +  " </b>. calculated at "  +  myDate;
    element.appendChild(line);
  }  
    document.getElementById("loader").classList.add("loaded")
    
   
  });
 
  })
}
document.addEventListener("DOMContentLoaded", fibResults)



function checkbox(){
  if (document.getElementById('checkbox').checked){
    fibfunction()
  } else {
    document.getElementById("demo").innerText = fib(x)
  }

}










