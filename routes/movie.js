const express = require('express');


const movie_C = require('../controller/movie_C')


const router = express.Router();


router.get('/movies', movie_C.getMovie );
router.post('/createMovie', movie_C.createMovie );





module.exports = router;