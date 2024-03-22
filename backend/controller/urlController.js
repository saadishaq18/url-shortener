const  shortid  = require('shortid');
const URL = require('../model/urlModel');


const handleGenerateNewShortUrl = async (req, res) => {
    const body = req.body
    if(!body.url){
        res.status(400).json({error: "Url is required"})
    }
    const short_id = shortid(8)
    await URL.create({
        shorid:short_id,
        redirectUrl:body.url,
        visitHistory:[]
        
    })
    return res.status(201).json({id:short_id})


}

module.exports = {
    handleGenerateNewShortUrl
}