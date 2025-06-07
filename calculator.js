// Table headings
document.write("<table border='1'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let results = [];

while (true) {
    let x = prompt("Enter the first number:");
    if (x === null) break;

    let y = prompt("Enter the second number:");
    if (y === null) break;

    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    x = parseFloat(x);
    y = parseFloat(y);
    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error: Invalid number";
    } else {
        switch (operator) {
            case '+':
                result = x + y;
                results.push(result);
                break;
            case '-':
                result = x - y;
                results.push(result);
                break;
            case '*':
                result = x * y;
                results.push(result);
                break;
            case '/':
                result = y !== 0 ? x / y : "Error: Divide by 0";
                if (result !== "Error: Divide by 0") results.push(result);
                break;
            case '%':
                result = y !== 0 ? x % y : "Error: Mod by 0";
                if (result !== "Error: Mod by 0") results.push(result);
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
}

document.write("</table><br>");

// Summary table
if (results.length > 0) {
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;
    let min = Math.min(...results);
    let max = Math.max(...results);

    document.write("<table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
