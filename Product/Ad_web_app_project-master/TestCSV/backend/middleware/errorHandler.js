
const errorHandler = (err, req, res, next) => {

    let statusCode = statusCode ? statusCode : 500;

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    });

};

module.exports = errorHandler;