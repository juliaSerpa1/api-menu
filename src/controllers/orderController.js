const orderModel = require('../models/orderModel');

function createOrder(req, res) {
    const { complementId, proteinId } = req.body;

    if (!complementId || !proteinId) {
        return res.status(400).json({ error: 'ComplementId and proteinId are required' });
    }

    const newOrder = orderModel.createOrder(complementId, proteinId);

    res.status(201).json(newOrder);
}

function getAllOrders(req, res) {
    const orders = orderModel.getAllOrders();
    res.json(orders);
}

function getOrderById(req, res) {
    const { id } = req.params;
    const orders = orderModel.getAllOrders();
    const order = orders.find(order => order.id === parseInt(id, 10));

    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ error: 'Order not found' });
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById
};