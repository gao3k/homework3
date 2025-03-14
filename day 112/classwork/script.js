//1
function manualRstrip(str) {
    let i = str.length - 1;
    while (i >= 0 && str[i] === ' ') {
        i--;
    }
    return str.substring(0, i + 1);
}

// Test
let text = "  Hello World!   ";
console.log("'" + manualRstrip(text) + "'");  // '  Hello World!'

function manualLstrip(str) {
    let i = 0;
    while (i < str.length && str[i] === ' ') {
        i++;
    }
    return str.substring(i);
}

// Test
console.log("'" + manualLstrip(text) + "'");  // 'Hello World!   '

//2
function manualStrip(str) {
    return manualRstrip(manualLstrip(str));
}

// Test
console.log("'" + manualStrip(text) + "'");  // 'Hello World!'
