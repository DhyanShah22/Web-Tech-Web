function displayDateInfo() {
    const now = new Date();

    const dateInfo = {
        'Full Date': now.toString(),
        'Year': now.getFullYear(),
        'Month': now.getMonth() + 1,  
        'Date': now.getDate(),
        'Day of the Week': now.getDay(),  
        'Hours': now.getHours(),
        'Minutes': now.getMinutes(),
        'Seconds': now.getSeconds(),
        'Milliseconds': now.getMilliseconds(),
        'Time in Milliseconds Since Epoch': now.getTime(),
        'UTC String': now.toUTCString(),
        'ISO String': now.toISOString(),
        'Locale Date String': now.toLocaleDateString(),
        'Locale Time String': now.toLocaleTimeString(),
        'Locale String': now.toLocaleString(),
        'Timezone Offset (minutes)': now.getTimezoneOffset(),
    };

    const container = document.getElementById('date-info');
    container.innerHTML = '';

    for (const [key, value] of Object.entries(dateInfo)) {
        const item = document.createElement('div');
        item.className = 'date-item';
        item.innerHTML = `<strong>${key}:</strong> ${value}`;
        container.appendChild(item);
    }
}
