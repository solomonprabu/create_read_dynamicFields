const addbtn = document.querySelector(".add");
const input = document.querySelector(".inputfield");
const val = document.getElementById("val");

let increment = 1;

let resArr = [0];

function add_more_field() {
  increment += 1;
  console.log("increment" + increment);

  arrI = [];

  for (i = 1; i < increment; i++) {
    arrI.push(i);
  }
  _id = arrI.slice(-1);
  console.log("_ID: " + _id);
  const price = document.createElement("input");
  price.type = "text";
  price.id = _id.toString();
  console.log("price ID: " + _id);

  const removebtn = document.createElement("button");
  removebtn.className = "delete";
  removebtn.innerHTML = "&times;";
  removebtn.id = _id.toString();
  removebtn.addEventListener("click", remove_field);

  const flex = document.createElement("div");
  flex.className = "flex";

  input.appendChild(flex);
  flex.appendChild(price);
  flex.appendChild(removebtn);

  arrI.length = 0;

  id_Val = document.getElementById(price.id);
  id_Val.addEventListener("keyup", (view) => {
    let x = document.getElementById(price.id);
    console.log(x.value);

    resArr[0] = x.value.toString();
    console.log(resArr);
  });

  while (_id < increment-1) {       //In progress
    var array = new Array(_id);
    id_Val.addEventListener("keyup", (view) => {
      let x = document.getElementById(price.id);
      console.log(x.value);

      array[0] = x.value.toString();
      console.log(array);
    });
  }       
}
addbtn.addEventListener("click", add_more_field);

function remove_field() {
  this.parentElement.remove();
  console.log("Removed field with ID: " + _id);
}

val.addEventListener("keyup", show);

function show() {
  let x = document.getElementById("val");
  console.log(x.value);
}
