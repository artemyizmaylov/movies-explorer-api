const secretTokenKey = 'secret-key';
const mongodbServer = 'mongodb://localhost:27017/moviesdb';
const port = 3000;

const jwtSettings = {
  expiresIn: '7d',
};
const cookieSettings = {
  httpOnly: true,
  sameSite: true,
  maxAge: 3600000 * 24 * 7,
};

const corsSettings = {
  origin: [
    /http(s):\/\/favorite-movies\.nomoredomains\.xyz$/,
    'http://localhost:3001',
  ],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
};

console.log(corsSettings);

module.exports = {
  secretTokenKey,
  mongodbServer,
  port,
  jwtSettings,
  cookieSettings,
  corsSettings,
};
