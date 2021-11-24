
  function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            // custom application error
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ error: err });
        case err.name === 'ValidationError':
            // mongoose validation error
            return res.status(400).json({ error: err.message });
        case err.name === 'UnauthorizedError':
            // jwt authentication error
            return res.status(401).json({ error: 'Unauthorized' });
        default:
            return res.status(500).json({ error: err.message });
    }
}
  
  module.exports = {
    errorHandler,
  }
  