var Router = require('express').Router();
var control = require('../controller/controller')


path = 'C:/Users/cwilches/Documents/Info_Servidor/dashboardPm2/Angular_Node/logs/logs';
pathl= '/root/.pm2/logs';

file_api = 'server-api-error-';
file_api1 = 'server-api-out-';

file_serv = 'server-error-';
file_serv1 = 'server-out';

file_spa = 'server-spa-error-';
file_spa1 = 'server-spa-out-';


Router.get('/logs_error/server', (req, res, next) => {
	res.json(control(path, file_serv));
	res.end();
});

Router.get('/logs_out/server', (req, res, next) => {
	res.json(control(path, file_serv1));
});

Router.get('/logs_error/server_api', (req, res, next) => {
	res.json(control(path, file_api));
});

Router.get('/logs_out/server_api', (req, res, next) => {
	res.json(control(path, file_api));
});

Router.get('/logs_error/server_spa', (req, res, next) => {
	res.json(control(path, file_spa));
});

Router.get('/logs_out/server_spa', (req, res, next) => {
	res.json(control(path, file_spa1));
});

module.exports = Router;

/* 
{
fecha : birthtime , 
text : contenido del archivo    
}

*/