const asyncHandler = require('express-async-handler')
const New = require('../models/newsModel') 

// @desc    Fetch all doc's news
// @route   GET /api/home
// @access  Public
const getNews = asyncHandler(
    async (req, res) => {
        const news = await New.find({})
        console.log('News: ', news)
        res.json(news)
    }
)

module.exports = { getNews }
