const router = require('express').Router();
const { User, Well, WellData } = require('../../models');


// post a new welldata
router.post('/', (req, res) => {
    WellData.create({
        well_id: req.body.well_id,
        date: req.body.date,
        time: req.body.time,
        depth: req.body.depth,
        temperature: req.body.temperature,
        pressure: req.body.pressure,
        oil: req.body.oil,
        water: req.body.water,
        gas: req.body.gas,
        comments: req.body.comments
    })
        .then(dbWellData => res.json(dbWellData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// get a single welldata
router.get('/:id', (req, res) => {
    WellData.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Well,
                attributes: ['well_name']
            }
        ]
    }).then(dbWellData => {
        if (!dbWellData) {
            res.status(404).json({ message: 'No well data found with this id' });
            return;
        }
        res.json(dbWellData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// get all welldata for a single well
router.get('/', (req, res) => {
    WellData.findAll({
        where: {
            well_id: req.session.well_id
        },
        include: [
            {
                model: Well,
                attributes: ['well_name']
            }
        ]
    }).then(dbWellData => {
        if (!dbWellData) {
            res.status(404).json({ message: 'No well data found with this id' });
            return;
        }
        res.json(dbWellData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// update a single welldata
router.put('/:id', (req, res) => {
    WellData.update(
        {
            date: req.body.date,
            time: req.body.time,
            depth: req.body.depth,
            temperature: req.body.temperature,
            pressure: req.body.pressure,
            oil: req.body.oil,
            water: req.body.water,
            gas: req.body.gas,
            comments: req.body.comments
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(dbWellData => {
        if (!dbWellData) {
            res.status(404).json({ message: 'No well data found with this id' });
            return;
        }
        res.json(dbWellData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// delete a single welldata
router.delete('/:id', (req, res) => {
    WellData.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbWellData => {
        if (!dbWellData) {
            res.status(404).json({ message: 'No well data found with this id' });
            return;
        }
        res.json(dbWellData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;