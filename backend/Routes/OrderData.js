const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post("/orderdata", async (req, res) => {
    try { 
        const orderItems = req.body;
        // Loop through each order item and create a new Order document
        await Promise.all(orderItems.map(async (item) => {
            const { name, quantity, size, price,img } = item;
            await Order.create({ name, quantity, size, price,img });
        }));
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});



router.delete('/orders/:orderId', async (req, res) => {
    try {
      const orderId = req.params.orderId;
      // Find the order by ID and delete it from the database
      await Order.findByIdAndDelete(orderId);
      res.json({ success: true, message: 'Order canceled successfully' });
    } catch (error) {
      console.error('Error canceling order:', error);
      res.status(500).json({ success: false, error: 'Failed to cancel order' });
    }
  });

  

module.exports = router;
