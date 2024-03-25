const URL = require('../model/urlModel')

const handleAnalytics = async (req, res) =>{
    const shortid = req.params.id
    const result = await URL.findOne({shortid})
    return res.status(200).json({totalView: result.visitHistory.length, analytic: result.visitHistory})
}

module.exports = {
    handleAnalytics
}