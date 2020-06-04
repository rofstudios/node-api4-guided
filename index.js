let express = require('express');
const server = require("./api/server.js");
let friendsRoutes = require('./friends/friendsRoutes');

server.use(express.json());
server.use('/friends', friendsRoutes);

server.get('/', (req, res) => {
  res.status(200).json({api: "up"})
})

// const port = 5000;
const port = process.env.PORT || 1123;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
