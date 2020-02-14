let add = document.getElementsByTagName("form")[0];

add.addEventListener("click", function(event) {
  let line = document.createElement("tr");

  let row = document.querySelector("NewRow NewCell").value;
  let cell = document.querySelector("NewRow NewCell").value;

  line.innerHTML = `NewRow NewCell`;

  let table = document.getElementById("products");
  table.append(line)})