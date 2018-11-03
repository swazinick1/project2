const express = require ('express');
const app = express ();
//const sequelize = require('sequelize');
const PORT = process.env.PORT || 8080;

const db = require ('./models');


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('app/public'));


 const apiRoutes = require('./routing/api_routes.js');
 app.use(apiRoutes);
 const htmlRoutes = require('./routing/html_routes.js');
 app.use(htmlRoutes);




db.sequelize.sync({}).then(function(){
    app.listen(PORT,function(){
        console.log(`App is listening on PORT` + PORT);
    });
});