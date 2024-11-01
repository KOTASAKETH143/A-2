// Show selected section and hide others
function showSection(section) {
    // Hide all sections
    document.getElementById("reverseSection").classList.add("hidden");
    document.getElementById("palindromeSection").classList.add("hidden");
    document.getElementById("tipSection").classList.add("hidden");

    // Show the selected section
    if (section === 'reverse') {
        document.getElementById("reverseSection").classList.remove("hidden");
    } else if (section === 'palindrome') {
        document.getElementById("palindromeSection").classList.remove("hidden");
    } else if (section === 'tip') {
        document.getElementById("tipSection").classList.remove("hidden");
    }
}

// Function to reverse a string
function reverseString() {
    const inputString = document.getElementById("inputString").value.trim(); // Get and trim input

    // Check if the input string is empty
    if (inputString === "") {
        document.getElementById("resultString").innerText = "Please enter a string.";
        return; // Exit the function if input is empty
    }

    // Reverse the string without using built-in functions
    let reversed = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i];
    }

    // Display the result
    document.getElementById("resultString").innerText = "Reversed String: " + reversed;
}

// Function to check if a number series is a palindrome
function checkPalindrome() {
    const inputString = document.getElementById("inputNumber").value.trim(); // Get and trim input

    // Check if the input string is empty
    if (inputString === "") {
        document.getElementById("resultPalindrome").innerText = "Please enter a series of numbers.";
        return; // Exit the function if input is empty
    }

    // Check if the input contains only numbers
    const regex = /^\d+$/; // Regular expression to check for numbers only
    if (!regex.test(inputString)) {
        document.getElementById("resultPalindrome").innerText = "Please enter numbers only.";
        return; // Exit the function if input is invalid
    }

    // Reverse the string without using built-in functions
    const reversedString = reverseStringHelper(inputString);

    // Check if the original string is a palindrome
    const isPalindrome = inputString === reversedString;

    // Display result with a message for each submission
    const resultElement = document.getElementById("resultPalindrome");
    if (isPalindrome) {
        resultElement.innerText = `"${inputString}" is a palindrome.`;
    } else {
        resultElement.innerText = `"${inputString}" is not a palindrome.`;
    }
}

// Helper function to reverse a string
function reverseStringHelper(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Function to calculate the total amount including the tip
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    // Check if the inputs are valid numbers
    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
        document.getElementById("resultTip").innerText = "Please enter valid positive numbers.";
        return; // Exit the function if input is invalid
    }

    // Calculate the total amount
    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;

    // Display the result
    document.getElementById("resultTip").innerText = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
}
