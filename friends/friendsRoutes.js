let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let friends = [
        {
            id: 1,
            name: "Maikeru"
        },
        {
            id: 2,
            name: "Jumbo"
        }
    ]
    res.status(200).json(friends)
})

module.exports = router;