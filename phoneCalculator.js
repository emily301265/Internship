let result = document.getElementById("result");
let temp = ""; //0

function getNumber(data) {
  let input = data.innerText;

  // operators list
  let operators = ["%", "/", "*", "-","+" , "="];

  // last character
  let lastChar = temp[temp.length - 1];

  if (operators.includes(input) && operators.includes(lastChar)) {
    return;
  }

  if (input == "=") {

    // divide by zero check
    if (temp.includes("/0")) {
      result.innerText = "Can't divide by 0";
      temp = "";
      return;
    }

    try {
      result.innerHTML = eval(temp);
      temp = eval(temp).toString();
    } catch {
      result.innerText = "Error";
      temp = "";
    }

  } else {
    temp += input;
    result.innerText = temp;
  }
}

function clearForm() {
  result.innerText = 0;
  temp = "";
}

function deleteForm() {
  temp = temp.slice(0, -1);
  result.innerText = temp || 0;
}
