// import database models
const db = require('../models');

//routing//

module.exports = function(app) {
    app.get('/api/patient', function (req, res){
        db.PatientData.findAll({}).then(function(rows){
            res.json(rows)
        }).catch(function(error){
            res.json({ error: error});
        });
    });

    app.get('/api/patient', function (req, res){
        db.PatientData.findOne({}).then(function(rows){
            res.json(rows)
        }).catch(function(error){
            res.json({ error: error})
        });
    });

    app.post('/api/patient', function(req, res){
        db.PatientData.create(req.body).then(function(rows){
            res.json({ success:true});
        }).catch(function(error){
            res.json({ error:error})
        });
    });

    









}