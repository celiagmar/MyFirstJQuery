//EJERCICIO 1:

/*let x=$(document);
x.ready(initialize);

function initialize() 
{
let x=$("#hi");
x.click(done);
}

function done() 
{
let x=$("#hi");
x.css("color", "green");
x.css("background-color", "yellow");
x.css("border", "solid 1px black");
}*/
//_____________________________


//EJERCICIO 2:

/*let x=$(document);
x.ready(highlight);

function highlight()
{
  let x=$("#button");
  x.click(highlightMe);
}

function highlightMe()
{
  let x=$(".primary");
  x.css("background-color", "yellow");
}*/
//___________________________________

//EJERCICIO 3:

/*let x=$(document);
x.ready(initialize);

function initialize() {
  let x=$("h2");
  x.click(press);
}

function press() {
  let x=$(this);
  x.css("font-size", "12px");
}*/
//_____________________________

//EJERCICIO 4:

/* let x=$(document);
x.ready(initialize);

function initialize() {
  let x=$("#button1");
  x.click(read);
  x=$("#button2");
  x.click(write);
}

function read() {
  let x=$("p");
  alert(x.text())
}

function write() {
  let x=$("p");
  x.text("Esto es un texto nuevo")
} */
//__________________________________

//EJERCICIO 5:

/* let x=$(document);
x.ready(initialize);

function initialize() {
  let x=$("#button1");
  x.click(leer);
  x=$("#button2");
  x.click(escribir);
  x=$("#button3");
  x.click(borrar);
}

function leer() {
  let x=$("table");
  alert(x.attr("border"));
}

function escribir() {
  let x=$("table");
  x.attr("border", "4");
}

function borrar() {
  let x=$("table");
  x.removeAttr("border");
} */
//_____________________________

//EJERCICIO 6:

let x = $(document);
x.ready(initialize);

function initialize() {
  let x = $("#button1")
  x.click(showHtml)
}

function showHtml() {
  let x = $("#newForm");
  x.html('<form><input type="text"><input type="submit"></form>')
}