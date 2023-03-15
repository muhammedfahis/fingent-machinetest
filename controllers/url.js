const { generateString } = require('../libs/url/generateString');
const URL = require('../model/url');


const shortenURL = async (req,res ) => {
    if(!req.originalUrl) {
        return res.status(400).send({
            success:false,
            message: 'URL is missing.'
        });
    }
   
    try {
        const { originalUrl } = req.body;
        const shortedURL = generateString(15);
         await URL.create({originalUrl,shortedURL});
        res.status(200).send({
            success:true,
            message:'created shorted URL.',
            originalURL:originalUrl,
            shortedURL: shortedURL
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message: error.message
        });
    }
}

const getOriginalUrl = async (req,res) => {
    if(!req.params.shortedURL) {
        return res.status(400).send({
            success:false,
            message: 'URL is missing.'
        });
    }
    try {
        const { shortedURL} = req.params;
        const urlData = await URL.findOne({shortedURL:shortedURL});
        if(urlData) {
            res.redirect(urlData.originalUrl)
        } else {
            return res.status(500).send({
                success:false,
                message: 'Something went wrong.'
            });
        }
    } catch (error) {
        res.status(500).send({
            success:false,
            message: error.message
        });
    }
}


module.exports = {
    shortenURL,
    getOriginalUrl
}