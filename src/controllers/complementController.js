const complements = require('../models/complementModel');

const getComplements = (req, res) => {
    res.json(complements);
};

const getComplementById = (req, res) => {
    const complementId = parseInt(req.params.id, 10);
    const selectedComplement = complements.find(b => b.id === complementId);
    
    if (selectedComplement) {
        res.json(selectedComplement);
    } else {
        res.status(404).json({ error: 'Complement not found' });
    }
};

module.exports = { getComplements, getComplementById };