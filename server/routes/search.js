const router = require("express").Router();
const Sell = require("../models/sell");

router.get('/properties', async (req, res) => {
    try {
      const properties = await Sell.find(); // Fetch all properties from DB
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;