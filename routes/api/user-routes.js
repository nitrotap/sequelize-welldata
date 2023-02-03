const router = require('express').Router();
const { User } = require('../../models');

// POST a user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.send(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});







module.exports = router;