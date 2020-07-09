let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let friends = [
        {
            id: 1,
            name: "Jumbo"
        },
        {
            id: 2,
            name: "Gobuta"
        },
        {
            id: 3,
            name: "Gatekeeper"
        },
        {
            id: 4,
            name: "Legacy Rem"
        }
    ]
    res.status(200).json(friends)   
})

module.exports = router;