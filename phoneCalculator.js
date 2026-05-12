let result = document.getElementById("result");
let temp = ""; //0

function getNumber(data) {
  let input = data.innerText;

  if (input == "=") {
    result.innerHTML = eval(temp); //4+6
    temp = eval(temp);
  } else {
    temp += input;
    result.innerText = temp;
  }
}

function clearForm() {
  result.innerText = 0;
  temp = "";
}

// function deleteForm(data){
//     result.innerText=result.innerText.slice(0,-1)
//     temp = "";

// }
function deleteForm() {
  temp = temp.slice(0, -1);
  result.innerText = temp || 0;
}
