const mongoose = require('mongoose');


/**
 * @openapi
 * components:
 *   schemas:
 *      createURLInput:
 *         type: object
 *         required:
 *           - originalUrl
 *         properties:
 *           originalUrl:
 *              type: string
 *              default: https://www.google.co.in/
 *      createURLResponse:
 *         type: object
 *         properties:
 *          success:
 *             type: boolean
 *          message:
 *             type: string
 *          originalURL:
 *             type: string
 *             default: https://www.google.co.in/
 *          shortedURL:
 *             type: string   
  *      createURLErrorResponse:
 *         type: object
 *         properties:
 *          success:
 *             type: boolean
 *             default: false
 *          message:
 *             type: string      
 */

const UrlSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    
    shortedURL: {
        type: String,
        required: true
    }
   
});

const URL = mongoose.model('URL',UrlSchema);
module.exports = URL;