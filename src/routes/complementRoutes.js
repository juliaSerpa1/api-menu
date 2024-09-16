const express = require('express');
const router = express.Router();
const { getComplements, getComplementById } = require('../controllers/complementController');

router.get('/', getComplements);

router.get('/:id', getComplementById);

module.exports = router;