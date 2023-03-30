const express = require('express');
const router = express.Router();
const controller = require('../controllers/mailController')

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "mailRoute",
        version: "0.0.1"
    });
});

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;