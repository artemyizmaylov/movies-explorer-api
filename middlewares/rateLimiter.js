const rateLimit = require('express-rate-limit');

const limiter = (rateLimit({ // защита от DDoS
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // количество запросов
}));

module.exports = limiter;
