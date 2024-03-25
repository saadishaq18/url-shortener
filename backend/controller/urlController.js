const  shortid  = require('shortid');
const URL = require('../model/urlModel');


const handleGenerateNewShortUrl = async (req, res) => {
    const body = req.body
    if(!body.url){
        res.status(400).json({error: "Url is required"})
    }
    const short_id = shortid(8)
    await URL.create({
        shortid:short_id,
        redirectUrl:body.url,
        visitHistory:[]
        
    })
    return res.status(201).json({id:short_id})


}

const handleGetUrl = async (req, res) => {
    const shortid = req.params.id
    const entry = await URL.findOneAndUpdate({
        shortid
    },{
        $push:{
            visitHistory:{
                timestamp: Date.now()
            }
        }
    })
   
    res.redirect(entry.redirectUrl)
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetUrl
}