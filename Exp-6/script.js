const myObject = {
    name: "Dhyan Shah",
    age: 19,
    occupation: "Upcomig SWE intern @JPMC",
    greet: function() {
        alert(`Hello, my name is ${this.name}`);
    },
    getOccupation: function() {
        alert(`I am an ${this.occupation}`);
    }
};

function displayObject(obj) {
    const displayDiv = document.getElementById("object-display");

    for (const key in obj) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("object-item");

        if (typeof obj[key] === "function") {
            const methodButton = document.createElement("button");
            methodButton.textContent = `Call ${key}()`;
            methodButton.classList.add("method-button");
            methodButton.onclick = obj[key].bind(obj);
            itemDiv.innerHTML = `<span>Method: ${key}</span>`;
            itemDiv.appendChild(methodButton);
        } else {
            itemDiv.innerHTML = `<span>Property: ${key} - ${obj[key]}</span>`;
        }

        displayDiv.appendChild(itemDiv);
    }
}

// Display the object on page load
window.onload = function() {
    displayObject(myObject);
};

// Functions to show results of Object methods
function showObjectAssign() {
    const target = { greeting: "Hello" };
    const source = { name: "Jane Doe", age: 25 };
    const result = Object.assign(target, source);
    displayResult(`Object.assign() result: ${JSON.stringify(result)}`);
}

function showObjectValues() {
    const values = Object.values(myObject);
    displayResult(`Object.values() result: ${JSON.stringify(values)}`);
}

function showObjectEntries() {
    const entries = Object.entries(myObject);
    displayResult(`Object.entries() result: ${JSON.stringify(entries)}`);
}

// Function to display results of the object methods
function displayResult(resultText) {
    const resultDiv = document.getElementById("method-result");
    resultDiv.innerHTML = `<span>${resultText}</span>`;
}
