function reverseString(input) {
    let output = "";  
    // Loop through the input string from the end to the beginning
    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];  // Add each character to the output
    }
    return output;
}

console.log(reverseString("helo"));

function isPalindrome(input) { 
    const normalizedInput = input.toLowerCase();

    let length = normalizedInput.length;

    // Loop through the first half of the string
    for (let i = 0; i < length / 2; i++) {
        // Compare the character at the i-th position and the corresponding character from the end
        if (normalizedInput[i] !== normalizedInput[length - 1 - i]) {
            return false;  
        }
    }
    return true; 
}

// Test cases
console.log(isPalindrome("oio"));                  // Output: true
console.log(isPalindrome("hello"));                // Output: false