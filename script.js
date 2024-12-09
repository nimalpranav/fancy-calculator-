// Append value to the display
function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
  }
  
  // Clear the display
  function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
  }
  
  // Calculate the result
  function calculate() {
    const resultField = document.getElementById('result');
    try {
      resultField.value = eval(resultField.value);
    } catch {
      resultField.value = 'Error';
    }
  }
  