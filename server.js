const express = require ('express');
const app = express ();
//const sequelize = require('sequelize');
const PORT = process.env.PORT || 8080;

const db = require ('./models');


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));


require('./routing/api_routes.js')(app);
// require('./routing/html_routes.js')(app);




db.sequelize.sync().then(function(){
    app.listen(PORT,function(){
        console.log(`App is listening on PORT` + PORT);
    });
});