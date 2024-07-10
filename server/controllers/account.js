const account = require('../models/account')
const asyncHandler = require('express-async-handler')
const { generateAccessToken } = require('../middlewares/jwt')
const jwt = require('jsonwebtoken')

const create = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password)
        return res.status(400).json({
            sucess: false,
            mes: 'Missing inputs'
        })
    const userNa = await account.findOne({ username: username })
    if (userNa) throw new Error("username has existed!")
    const newUser = await account.create(req.body)
    return res.status(200).json({
        sucess: newUser ? true : false,
        mes: newUser ? 'Create is successfully. Please go login~' : 'Something went wrong'
    })
})

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    if (!username || !password)
        return res.status(400).json({
            sucess: false,
            mes: 'Missing inputs'
        })
    const response = await account.findOne({ username: username })
    if (response && await response.isCorrectPassword(password)) {
        const accessToken = generateAccessToken(response._id)

        res.cookie('token', accessToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })

        return res.status(200).json({
            sucess: true,
            accessToken
        })
    } else {
        throw new Error('Error login')
    }
})

const logout = asyncHandler(async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Đăng xuất thành công' });
})

module.exports = {
    create,
    login,
    logout
}