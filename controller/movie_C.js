const movie_M = require('../model/movie_M');


const getMovie = async (req, res, next)=>{

    const title = req.query.title;
    const author = req.query.author
    const param = (title || author)
    if(param){
        const response = await movie_M.fetchMovies(title, author);
        res.status(200).json({
           data: response,
           param: title
        });
    }else{
        res.status(200).json({
            message: "you did not give any title or author name"
        });
    }
}

const createMovie = async (req, res, next)=>{

    const title = req.body.title;
    const author = req.body.author
    const year = req.body.year
    const desc = req.body.desc
    const param = (title || author)
    console.log(title)
    if(param){
        const response = await movie_M.createMovie(title, author,year,desc);
        res.status(200).json({
           data: response
        });
    }else{
        res.status(200).json({
            message: "you did not give any title or author name"
        });
    }
}

exports.getMovie = getMovie;
exports.createMovie = createMovie;