const server = require("./api/server.js");

server.get('/', (req, res) => {
  res.status(200).json({be: "up"})
})

// const port = 5000;
const port = process.env.PORT || 1123;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
