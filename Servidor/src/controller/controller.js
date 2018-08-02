var fs = require('fs');
var moment = require('moment');

getFiles = function (startPath, filter) {
    var file = [];
    let files

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath + "/" + files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        }
        else if (filename.indexOf(filter) >= 0) {
            fs.readFile('path', 'utf-8', (err, data) => {
                file.push({
                    fecha: moment(fs.stat).format("DD/MM/YYYY HH:mm:ss"),
                    logs: data
                });
            });
        };
    };
};

module.exports = getFiles;