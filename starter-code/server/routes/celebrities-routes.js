//Iteration 2 - Adding New Celebrities
const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrities.js');

/* GET Celebrities page */
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebrities => {
        res.status(200).json(celebrities)
    })
    .catch(error => res.status(204).json({msg: error}))
});

router.get('/create', (req, res, next) => {
    //res.render('celebrity-create')
    res.status(200).json({msg: 'estas en celebrities/create'})
})

router.post('/create', (req, res, next) => {
    console.log(req.body)
    const {name, occupation, catchPhrase} = req.body
    const newCelebrity = new Celebrity ({name, occupation, catchPhrase})
    newCelebrity.save()
        .then(celebrity => res.status(200).json({msg: 'congratulations the celebrity was created'}))
        .catch(error => res.json({msg: error}))
})

module.exports = router;