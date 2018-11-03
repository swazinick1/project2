// // import database models
const express = require('express');
const router = express.Router();
const db = require('../models');




    //GET All
    router.get('/api/patients', function(req, res){

        db.PatientData.findAll({})
        .then(function(response, error){
            if (error){
                res.json(error)
            }
            res.json(response)
        })
    });

    //POST
    router.post('/api/patients', function (req,res){
        db.PatientData.create(req.body)
        .then(function(response, error){
            if(error){
                res.json(error)
            }
            res.json(response)
        })
    });

    // //GET Single
    // router.get('/api/patients/:id', function (req, res){
    //     db.PatientData.find({ where: {id: req.params.id} })
    //     .then(function (data){
    //         res.json(data)
    //     })
    // });

    // //PUT//UPDATE
    // router.put('.api/patients/:id', function (req, res){
    //     db.PatientData.update(req.body,{ where: {id: req.params.id}})
    //     .then(function (response){
    //         res.json( {success: true});
    //     })
    // });

    // //DELETE
    // router.delete('/api/patients/:id', function (req, res){
    //     db.PatientData.destroy({ where: {id: req.params.id} })
    //     .then(function(){
    //         res.json({success: true})
    //     })
    // });

    // //GET KNOWN SEQ
    // router.get('/api/known_seq', function(req, res){
    //     db.KnownSeq.findAll({})
    //     .then(function(response, error){
    //         if (error){
    //             res.json(error)
    //         }
    //         res.json(response)
    //     })
    // });

    // //POST new Seq
    // router.post('/api/known_seq', function (req,res){
    //     db.KnownSeq.create(req.body)
    //     .then(function(response, error){
    //         if(error){
    //             res.json(error)
    //         }
    //         res.json(response)
    //     })
    // });

    // //DELETE Seq
    // router.delete('/api/known_seq/:id', function (req, res){
    //     db.KnownSeq.destroy({ where: {id: req.params.id} })
    //     .then(function(){
    //         res.json({success: true})
    //     })
    // });
        
module.exports = router;