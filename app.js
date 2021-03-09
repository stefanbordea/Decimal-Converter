const result = document.getElementById('result');
const submit = document.getElementById('button');

// Function that converts a number from an input box to bin, oct and hex
function convert(){
    
    // Get the value of the input box
    const num  = document.getElementById('input').value

    // Convert input to bin, oct and hex
    bin = Number(num).toString(2);
    oct = Number(num).toString(8);
    hex = Number(num).toString(16);

    //Print out the result
    result.innerText = "Binary: " + bin + "\n" + "Octal: " + oct + "\n" + "Hexadecimal: " + hex;
}

submit.addEventListener('click', convert)