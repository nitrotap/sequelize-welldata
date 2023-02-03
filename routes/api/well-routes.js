const router = require('express').Router();
const { User, Well, WellData } = require('../../models');

// post a new well
router.post('/', (req, res) => {
    Well.create({
        user_id: req.body.user_id,
        location: req.body.location,
        well_name: req.body.well_name
    })
        .then(dbWellData => res.json(dbWellData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// get a single well
router.get('/:id', (req, res) => {
    Well.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: WellData,
                attributes: ['id', 'well_id', 'date', 'time', 'depth', 'temperature', 'pressure', 'oil', 'water', 'gas', 'comments'],
                include: {
                    model: Well,
                    attributes: ['well_name']
                }
            }

        ]
    }).then(dbWellData => {
        if (!dbWellData) {
            res.status(404).json({ message: 'No well found with this id' });
            return;
        }
        res.json(dbWellData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// get all wells for a single user
router.get('/', (req, res) => {
    Well.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: WellData,
                attributes: ['id', 'well_id', 'date', 'time', 'depth', 'temperature', 'pressure', 'oil', 'water', 'gas', 'comments'],
                include: {
                    model: Well,
                    attributes: ['well_name']
                }
            }

        ]
    }).then(dbWellData => res.json(dbWellData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update a well
router.put('/:id', (req, res) => {
    Well.update(
        {
            location: req.body.location,
            well_name: req.body.well_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(dbWellData => {
        if (!dbWellData) {
            res.status(404).json({ message: 'No well found with this id' });
            return;
        }
        res.json(dbWellData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a well
router.delete('/:id', (req, res) => {
    Well.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbWellData => {
        if (!dbWellData) {
            res.status(404).json({ message: 'No well found with this id' });
            return;
        }
        res.json(dbWellData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;



