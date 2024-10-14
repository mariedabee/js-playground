function reverseString(input) {
    let output = "";  
    // Loop through the input string from the end to the beginning
    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];  // Add each character to the output
    }
    return output;
}

console.log(reverseString("helo"));