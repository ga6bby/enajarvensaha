function updateDateTime() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    var datetimeString = 'Päivämäärä: ' + day + '.' + month + '.' + year + ' | Kellonaika: ' + hours + ':' + minutes + ':' + seconds;
    var datetimeElement = document.getElementById("current-datetime");
    if (datetimeElement) {
        datetimeElement.innerText = datetimeString;
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();
