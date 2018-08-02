
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

//file routes
const serverRoutes = require('./routes/server');
const logsRoutes = require('./routes/logs')

//Settings
app.set('port', process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

////middlewears
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//
app.use('/api',serverRoutes);
<<<<<<< HEAD:Servidor/index.js
app.use('/api',logsRoutes);
=======
>>>>>>> 2c8890e6d1c1936702478e7864e4a8bea98a67c1:Servidor/src/index.js

app.listen(app.get('port'), () => {
    console.log('server on port 3000')
});