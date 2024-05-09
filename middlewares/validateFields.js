const {validationResult} = require('express-validator');

/**
 * Function to validate the fields in the request
 * @param {request} req - The request object
 * @param {response} res - The response object
 * @param {*} next - The next middleware
 * @returns next step or error response
 */
const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    }
    next();
}

module.exports = {
    validateFields
}