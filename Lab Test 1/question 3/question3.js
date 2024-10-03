const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function removeLogs() {
    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(function(file) {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);
            console.log('delete files ... ' + file);
        });
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

function createLogs() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
    process.chdir(logsDir);
    for (var i = 0; i < 10; i++) {
        var fileName = 'log' + i + '.txt';
        fs.writeFileSync(fileName, 'This is log file ' + i);
        console.log(fileName);
    }
}

removeLogs();
createLogs();