let input = '';
let result = '';

function addInput(value) {
  input += value;
  document.getElementById('result').innerHTML = input;
}

function clearDisplay() {
  input = '';
  result = '';
  document.getElementById('result').innerHTML = '0';
}

function calculate() {
  try {
    result = eval(input);
    document.getElementById('result').innerHTML = result;
  } catch (error) {
    document.getElementById('result').innerHTML = 'Erro';
  }
}
