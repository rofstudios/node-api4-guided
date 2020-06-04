let express = require('express');
const server = require("./api/server.js");
let friendsRoutes = require('./friends/friendsRoutes');

require("dotenv").config();

server.use(express.json());
server.use('/friends', friendsRoutes);

server.get("/", function (req, res) {
  res.status(200).json({
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    greeting: process.env.GREETING,
  });
});

// const port = 5000;
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
