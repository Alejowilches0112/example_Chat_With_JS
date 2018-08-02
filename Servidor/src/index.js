
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
app.use('/api',logsRoutes);


app.listen(app.get('port'), () => {
    console.log('server on port 3000')
});