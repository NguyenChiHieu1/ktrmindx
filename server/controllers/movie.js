const movie = require('../models/movie')
const asyncHandler = require('express-async-handler')

const create = asyncHandler(async (req, res) => {
    const { name, time, year, image, introduce } = req.body
    if (!name || !time || !year || !image || !introduce)
        return res.status(400).json({
            sucess: false,
            mes: 'Missing inputs'
        })
    const movieNa = await movie.findOne({ name: name })
    if (movieNa) throw new Error("movie name has existed!")
    const newMovie = await movie.create(req.body)
    return res.status(200).json({
        sucess: newMovie ? true : false,
        mes: newMovie ? 'Create is successfully' : 'Error!!!',
    })
})

const getAllMovie = asyncHandler(async (req, res) => {
    const movieAll = await movie.find()
    return res.status(200).json({
        sucess: movieAll ? true : false,
        data: movieAll ? movieAll : 'Error!!!',
    })
})

const updateMovie = asyncHandler(async (req, res) => {
    const { bid } = req.params
    if (Object.keys(req.body).length === 0) throw new Error('Vui lòng thêm thông tin cần cập nhật')
    const response = await movie.findByIdAndUpdate(bid, req.body, { new: true })
    return res.status(200).json({
        success: response ? true : false,
        updateMovie: response ? response : "Cannot update movie"
    })
})

const deleteMovie = asyncHandler(async (req, res) => {
    const { bid } = req.params
    const response = await movie.findByIdAndDelete(bid)
    return res.status(200).json({
        success: response ? true : false,
        deleteBlog: response ? "Success delete movie" : "Cannot delete movie"
    })
})

const searchNameMovie = asyncHandler(async (req, res) => {
    const { name } = req.params
    if (!name) throw new Error('Bạn chưa điền tên phim trong tìm kiếm')
    const movieSearch = await movie.find({ name: name })
    return res.status(200).json({
        sucess: movieSearch ? true : false,
        mes: movieSearch ? movieSearch : 'Search fail!!!',
    })
})

const getByYear = asyncHandler(async (req, res) => {
    const { order } = req.body
    let num = 0
    if (order === 'giam') {
        num = -1
    } else {
        //tang dan
        num = 1
    }
    const movieAll = await movie.find().sort({ year: num })
    return res.status(200).json({
        sucess: movieAll ? true : false,
        mes: movieAll ? movieAll : 'Error!!!',
    })
})
module.exports = {
    create,
    getAllMovie,
    updateMovie,
    deleteMovie,
    searchNameMovie,
    getByYear
}