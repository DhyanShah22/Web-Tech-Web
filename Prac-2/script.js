document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Create a new row and cells
    const table = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Set cell values
    cell1.textContent = name;
    cell2.textContent = email;
    cell3.textContent = age;

    // Clear form fields after submission
    document.getElementById('detailsForm').reset();
});
