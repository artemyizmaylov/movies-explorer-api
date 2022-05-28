require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const { errors } = require('celebrate');
const { errorLogger, expressLogger } = require('./middlewares/logger');
const router = require('./routes');
const errorsHandler = require('./middlewares/errorsHandler');
const { mongodbServer, port } = require('./utils/config');
const limiter = require('./middlewares/rateLimiter');

const { PORT = port, MONGOD_SERVER = mongodbServer } = process.env;

const app = express();

mongoose.connect(MONGOD_SERVER);
app.listen(PORT);

app.use(helmet());
app.use(limiter);

app.use(cookieParser());
app.use(bodyParser.json());

app.use(expressLogger);

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorsHandler);
