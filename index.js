// Reverse a String
document.getElementById('reverseButton').addEventListener('click', () => {
    const input = document.getElementById('inputString').value;
    const reversedString = reverseString(input);
    document.getElementById('outputString').textContent = reversedString;
});

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Check Palindrome
document.getElementById('checkButton').addEventListener('click', () => {
    const input = document.getElementById('inputPalindrome').value;
    const isPalindrome = checkPalindrome(input);
    document.getElementById('outputPalindrome').textContent = isPalindrome
        ? "This is a palindrome!"
        : "This is NOT a palindrome.";
});

function checkPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Calculate Tip
document.getElementById('calculateTipButton').addEventListener('click', () => {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const totalAmount = calculateTip(subtotal, tipPercentage);
    document.getElementById('totalAmount').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
});

function calculateTip(subtotal, tipPercentage) {
    return subtotal + (subtotal * (tipPercentage / 100));
}