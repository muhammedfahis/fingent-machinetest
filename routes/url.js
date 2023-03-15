const express = require('express');
const router = express.Router();

const { shortenURL,getOriginalUrl } = require('../controllers/url');

/**
 * @openapi
 * '/url/shorten':
 *  post:
 *    tags:
 *      - URL
 *    summary: create a new shortedURL
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/createURLInput'
 *    responses:
 *        200:
 *          description: Success
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/createURLResponse'
 *        400:
 *          description: Bad Request(Validation Errors for Inputs)
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/createURLErrorResponse'
 *        500:
 *          description: For database Errors
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/createURLErrorResponse'
 *             
 * 
 */
router.post('/shorten',shortenURL);

/**
 * @openapi
 * '/url/{shortedURL}':
 *  get:
 *    tags:
 *      - URL
 *    summary: redirect to original URL
 *    parameters:
 *     - name: shortedURL
 *       in: path
 *       description: short Url of original url
 *       required: true
 *    responses:
 *        301:
 *          description: Successfully redirected
 *        500:
 *          description: For database Errors
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/createURLErrorResponse'
 *             
 * 
 */
router.get('/:shortedURL',getOriginalUrl);

module.exports= router

