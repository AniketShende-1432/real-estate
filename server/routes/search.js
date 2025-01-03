const router = require("express").Router();
const Sell = require("../models/sell");
const Rent = require("../models/rent");

router.get('/properties', async (req, res) => {
  try {
    const properties = await Sell.find(); // Fetch all properties from DB
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/rentproperties', async (req, res) => {
  try {
    const properties = await Rent.find(); // Fetch all properties from DB
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = router;