//Iteration 2 - Adding New Celebrities
const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies.js');

// Iteration 6
router.get('/', (req, res, next) => {
    Movie.find()
    .then(movies => {
        res.status(200).json(movies)
    })
    .catch(error => res.status(204).json({msg: error}))
});

router.get('/create', (req, res, next) => {
    //res.render('celebrity-create')
    res.status(200).json({msg: 'estas en movies/create'})
})

//Iteration 5
router.post('/create', (req, res, next) => {
    const {title, genre, plot, cast} = req.body
    const newMovie = new Movie ({title, genre, plot, cast})
    newMovie.save()
        .then( movie => res.status(200).json({msg: 'congratulations the movie was created'}))
        .catch(error => res.status(204).json({msg: error}))
})

//Iteration 7
router.get('/:id', (req, res, next) =>{
    Movie.findOne({_id: req.params.id})
        .populate('cast')
        .then(theMovie => res.status(200).json({msg: 'found'}))
        .catch(error => res.status(204).json({msg: error}))
})

//Iteration 8
router.post('/:id/delete' (req, res, next) =>{
    Movie.findByIdAndRemove({_id: req.params.id})
    .then(success => res.status(200).json({msg: success}))
    .catch(error => res.status(204).json({msg: error}))
})

//Iteration 9
router.post('/:id', (req, res, next) =>{
    const {title, genre, plot, cast} = req.body;
    Movie.update({_id: req.params.id}, {$set: {title, genre, plot, cast}})
        .then(updated => res.status(200).json({msg: 'updated'}))
        .catch(error => res.status(204).json({msg: error}))
})

module.exports = router;