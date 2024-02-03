const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const song= await Song.findAll()
    return res.json(song)
});
const creaty = catchError(async(req,res)=>{
    const{name, artist, genre,releaseDate} = req.body;
    const newBody = {name, artist, genre,releaseDate}
    const song = await  Song.create(newBody);
    if(!song) res.sendStatus(404)
    return  res.status(201).json(song)
})

module.exports = {
    getAll,
    creaty
}