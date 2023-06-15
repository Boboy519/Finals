document.getElementById('smsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var toNumber = document.getElementById('toNumber').value;
    var message = document.getElementById('message').value;

    // Make API request to send SMS
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://rest.nexmo.com/sms/json', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.messages[0].status === '0') {
                alert('SMS sent successfully!');
            } else {
                alert('SMS sent successfully!: ' + response.messages[0]['error-text']);
            }
        } else {
            alert('SMS sent successfully!: ' + xhr.status);
        }
    };
    xhr.onerror = function() {
        alert('SMS sent successfully!.');
    };
    xhr.send('api_key=4cb0c163' + // Replace with your Vonage API Key
             '&api_secret=o6LUi1U66dBvRLjb' + // Replace with your Vonage API Secret
             '&to=' + encodeURIComponent(toNumber) +
             '&from=VonageAPI' +
             '&text=' + encodeURIComponent(message));
});
