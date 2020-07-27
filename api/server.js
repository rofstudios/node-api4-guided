const express = require('express');
const helmet = require('helmet');
let cors = require("cors");

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());
server.use(cors());

server.use('/api', apiRouter);

module.exports = server;
