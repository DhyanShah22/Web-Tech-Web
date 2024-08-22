function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.padding = '20px';
    alertBox.style.backgroundColor = '#f8d7da';
    alertBox.style.color = '#721c24';
    alertBox.style.border = '1px solid #f5c6cb';
    alertBox.style.borderRadius = '5px';
    alertBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    alertBox.style.zIndex = '1000';
    
    const text = document.createElement('p');
    text.textContent = message;
    alertBox.appendChild(text);

    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.marginTop = '10px';
    okButton.style.padding = '5px 10px';
    okButton.style.backgroundColor = '#f5c6cb';
    okButton.style.border = 'none';
    okButton.style.borderRadius = '3px';
    okButton.style.cursor = 'pointer';
    okButton.onclick = function () {
        document.body.removeChild(alertBox);
    };
    alertBox.appendChild(okButton);

    document.body.appendChild(alertBox);
}

function showConfirm(message, callback) {
    const confirmBox = document.createElement('div');
    confirmBox.style.position = 'fixed';
    confirmBox.style.top = '50%';
    confirmBox.style.left = '50%';
    confirmBox.style.transform = 'translate(-50%, -50%)';
    confirmBox.style.padding = '20px';
    confirmBox.style.backgroundColor = '#d1ecf1';
    confirmBox.style.color = '#0c5460';
    confirmBox.style.border = '1px solid #bee5eb';
    confirmBox.style.borderRadius = '5px';
    confirmBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    confirmBox.style.zIndex = '1000';

    const text = document.createElement('p');
    text.textContent = message;
    confirmBox.appendChild(text);

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.style.marginRight = '10px';
    yesButton.style.padding = '5px 10px';
    yesButton.style.backgroundColor = '#bee5eb';
    yesButton.style.border = 'none';
    yesButton.style.borderRadius = '3px';
    yesButton.style.cursor = 'pointer';
    yesButton.onclick = function () {
        document.body.removeChild(confirmBox);
        callback(true);
    };
    confirmBox.appendChild(yesButton);

    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.style.padding = '5px 10px';
    noButton.style.backgroundColor = '#bee5eb';
    noButton.style.border = 'none';
    noButton.style.borderRadius = '3px';
    noButton.style.cursor = 'pointer';
    noButton.onclick = function () {
        document.body.removeChild(confirmBox);
        callback(false);
    };
    confirmBox.appendChild(noButton);

    document.body.appendChild(confirmBox);
}

function showPrompt(message, callback) {
    const promptBox = document.createElement('div');
    promptBox.style.position = 'fixed';
    promptBox.style.top = '50%';
    promptBox.style.left = '50%';
    promptBox.style.transform = 'translate(-50%, -50%)';
    promptBox.style.padding = '20px';
    promptBox.style.backgroundColor = '#fff3cd';
    promptBox.style.color = '#856404';
    promptBox.style.border = '1px solid #ffeeba';
    promptBox.style.borderRadius = '5px';
    promptBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    promptBox.style.zIndex = '1000';

    const text = document.createElement('p');
    text.textContent = message;
    promptBox.appendChild(text);

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.style.marginTop = '10px';
    inputField.style.padding = '5px';
    inputField.style.width = '100%';
    inputField.style.boxSizing = 'border-box';
    promptBox.appendChild(inputField);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.marginTop = '10px';
    submitButton.style.padding = '5px 10px';
    submitButton.style.backgroundColor = '#ffeeba';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '3px';
    submitButton.style.cursor = 'pointer';
    submitButton.onclick = function () {
        document.body.removeChild(promptBox);
        callback(inputField.value);
    };
    promptBox.appendChild(submitButton);

    document.body.appendChild(promptBox);
}

// Example Usage:
showAlert('This is a custom alert!');
showConfirm('Are you sure you want to proceed?', function (confirmed) {
    if (confirmed) {
        console.log('User confirmed');
    } else {
        console.log('User canceled');
    }
});
showPrompt('Please enter your name:', function (result) {
    console.log('User entered:', result);
});
