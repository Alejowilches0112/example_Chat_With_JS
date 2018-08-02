var fs = require('fs');
var moment = require('moment');

var file_error_api = [];

function getFiles(startPath, filter) {
    let files

    if (!fs.existsSync(startPath)) {
        //console.log("no dir ", startPath);
        return;
    }
    files = fs.readdirSync(startPath);

    /*if (file_error_api.length > 0) {
       
         file_error_api = [];
     }*/
    for (var i = 0; i < files.length; i++) {
        var filename = (startPath + '/' + files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        } else if (filename.indexOf(filter) >= 0) {
            var stats = (fs.statSync(filename));

            /*if(moment(stats.birthtime).format("DD/MM/YYYY HH:mm:ss") <= moment.now.format("DD/MM/YYYY HH:mm:ss")){

            }*/
            //console.log(stats)
            fs.readFile(filename, 'utf-8', (err, data) => {
                if (err) console.log(err)
                var day = String(moment().format("DD-MM-YYYY"));
                var dateFech = {
                    d: Number(day.substring(0, 2)),
                    m: Number(day.substring(3, 5)),
                    y: Number(day.substring(6, 10))
                }
                var datefile = String(moment(stats.birthtime).format("DD/MM/YYYY HH:mm:ss"));
                var datef = {
                    d: Number(datefile.substring(0, 2)),
                    m: Number(datefile.substring(3, 5)),
                    y: Number(datefile.substring(6, 10))
                }
                if (dateFech.y == datef.y) {
                    if (dateFech.m == datef.m) {
                        if (dateFech.d == datef.d || datef.d == dateFech.d - 1) {
                            file_error_api.push({
                                fecha: moment(stats.birthtime).format("DD/MM/YYYY HH:mm:ss"),
                                logs: data
                            });
                        }
                    }
                }
            });
        };
    };
    if (file_error_api.length == 0) {
        file_error_api.push({
            fecha: moment().format("DD/MM/YYYY HH:mm:ss"),
            logs: 'No se encontraron archivos de los ultimos dos días'
        });
    }
    return file_error_api;
};

module.exports = getFiles;