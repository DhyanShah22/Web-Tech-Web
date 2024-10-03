let isOriginal = true;

document.getElementById('change-text-button').addEventListener('click', function() {
    let textElement = document.getElementById('display-text');
    let resultContainer = document.getElementById('result-container');
    let newText = "This is the new text!";

    if (isOriginal) {
        let loopText = "Loop Output: ";
        for (let i = 1; i <= 3; i++) {
            loopText += "Step " + i + " ";
        }

        let condition = true;
        let conditionText = "Conditional Output: ";
        if (condition) {
            conditionText += "Condition is true!";
        } else {
            conditionText += "Condition is false!";
        }

        let num1 = 10,
            num2 = 3;
        let arithmeticText = "Arithmetic Operators: ";
        arithmeticText += `${num1} + ${num2} = ${num1 + num2}, `;
        arithmeticText += `${num1} - ${num2} = ${num1 - num2}, `;
        arithmeticText += `${num1} * ${num2} = ${num1 * num2}, `;
        arithmeticText += `${num1} / ${num2} = ${num1 / num2}, `;
        arithmeticText += `${num1} % ${num2} = ${num1 % num2}`;

        let comparisonText = "Comparison Operators: ";
        comparisonText += `${num1} > ${num2} = ${num1 > num2}, `;
        comparisonText += `${num1} < ${num2} = ${num1 < num2}, `;
        comparisonText += `${num1} == ${num2} = ${num1 == num2}, `;
        comparisonText += `${num1} != ${num2} = ${num1 != num2}, `;
        comparisonText += `${num1} === ${num2} = ${num1 === num2}, `;
        comparisonText += `${num1} !== ${num2} = ${num1 !== num2}`;

        let a = true,
            b = false;
        let logicalText = "Logical Operators: ";
        logicalText += `${a} && ${b} = ${a && b}, `;
        logicalText += `${a} || ${b} = ${a || b}, `;
        logicalText += `!${a} = ${!a}`;

        let x = 5;
        let assignmentText = "Assignment Operators: ";
        assignmentText += `x = ${x}, `;
        x += 2;
        assignmentText += `x += 2 -> ${x}, `;
        x -= 1;
        assignmentText += `x -= 1 -> ${x}, `;
        x *= 3;
        assignmentText += `x *= 3 -> ${x}, `;
        x /= 2;
        assignmentText += `x /= 2 -> ${x}, `;
        x %= 2;
        assignmentText += `x %= 2 -> ${x}`;

        let y = 5,
            z = 2;
        let bitwiseText = "Bitwise Operators: ";
        bitwiseText += `${y} (${y.toString(2)}) & ${z} (${z.toString(2)}) = ${(y & z)} (${(y & z).toString(2)}), `;
        bitwiseText += `${y} (${y.toString(2)}) | ${z} (${z.toString(2)}) = ${(y | z)} (${(y | z).toString(2)}), `;
        bitwiseText += `${y} (${y.toString(2)}) ^ ${z} (${z.toString(2)}) = ${(y ^ z)} (${(y ^ z).toString(2)}), `;
        bitwiseText += `~${y} = ${~y} (${(~y).toString(2)}), `;
        bitwiseText += `${y} (${y.toString(2)}) << 1 = ${(y << 1)} (${(y << 1).toString(2)}), `;
        bitwiseText += `${y} (${y.toString(2)}) >> 1 = ${(y >> 1)} (${(y >> 1).toString(2)})`;

        let age = 20;
        let ternaryText = "Ternary Operator: ";
        let canVote = (age >= 18) ? "Yes" : "No";
        ternaryText += `Can vote (age >= 18)? ${canVote}`;

        textElement.innerHTML = newText;
        resultContainer.innerHTML = `
        ${loopText}<br><br>
        ${conditionText}<br><br>
        ${arithmeticText}<br><br>
        ${comparisonText}<br><br>
        ${logicalText}<br><br>
        ${assignmentText}<br><br>
        ${bitwiseText}<br><br>
        ${ternaryText}
    `;

        textElement.style.color = "#ff6347";
        textElement.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
        textElement.style.backgroundColor = "#ffebcd";

        resultContainer.style.color = "#4682b4";
        resultContainer.style.fontFamily = "'Courier New', Courier, monospace";
        resultContainer.style.backgroundColor = "#fafad2";
    } else {
        textElement.innerHTML = "This is the original text.";
        resultContainer.innerHTML = "";

        textElement.style.color = "";
        textElement.style.fontFamily = "";
        textElement.style.backgroundColor = "";

        resultContainer.style.color = "";
        resultContainer.style.fontFamily = "";
        resultContainer.style.backgroundColor = "";
    }
    isOriginal = !isOriginal;
});
