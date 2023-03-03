const addbtn = document.querySelector(".add");
const input = document.querySelector(".inputfield");
const val = document.getElementById("val");

let increment = 1;

var sum = 0;
let resArr = [];
let tempArr = [];

function add_more_field() {
  increment += 1;
  var index = increment - 1;
  resArr[index] = [];
  arrI = [];

  for (i = 1; i < increment; i++) {
    arrI.push(i);
  }
  _id = arrI.slice(-1);
  console.log("_ID: " + _id);
  const price = document.createElement("input");
  price.type = "number";
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
    // console.log(x.value);
    resArr[index][0] = x.value.toString();
    console.log(resArr);
    // console.log("Length: " + resArr.length);
    
    for (let i = 0; i < resArr.length; i++) {
      for (j = 0; j < resArr[i].length; j++) {
        var value = resArr[i][j];
        console.log(value);
        var integer = parseInt(value, 10); //coverting String to number
    
        sum += integer;
        console.log("Sum: " + sum);
      }
    }
  });
  
  function remove_field() {
    this.parentElement.remove();
    resArr[index][0] = 0;
    console.log("Removed field with ID: " + _id);
  }
}
addbtn.addEventListener("click", add_more_field);

val.addEventListener("keyup", show);

function show() {
  let x = document.getElementById("val");
  resArr[0] = [];
  resArr[0][0] = x.value;
  console.log(resArr);
  console.log(x.value);

  if (resArr[0][0] == 100) {
    addbtn.disabled = true;
  } else {
    addbtn.disabled = false;
  }
}

if (sum >= 100 || sum == 0) {
  addbtn.disabled = true;
} else {
  addbtn.disabled = false;
}
