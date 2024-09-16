const orders = [];
let nextId = 1;

function createOrder(complementId, proteinId) {
  const newOrder = {
    id: nextId++,
    complementId,
    proteinId,
    status: 'created',
    createdAt: new Date()
  };
  orders.push(newOrder);
  return newOrder;
}

function getAllOrders() {
  return orders;
}

module.exports = {
  createOrder,
  getAllOrders
};