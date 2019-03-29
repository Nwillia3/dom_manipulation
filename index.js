let black = document.getElementById("black").addEventListener("click", clicked);
let blue = document.getElementById("blue").addEventListener("click", clicked);

let yellow = document
  .getElementById("yellow")
  .addEventListener("click", clicked);
let red = document.getElementById("red").addEventListener("click", clicked);
let green = document.getElementById("green").addEventListener("click", clicked);
let grey = document.getElementById("grey").addEventListener("click", clicked);

function clicked(e) {
  const { id } = e.path[1];
  console.log(id);
  document.body.style.backgroundColor = id;
}
