// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const errorController = require("../controllers/errorController")
const utilities = require("../utilities")

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
// Route to build inventory item by id
router.get("/:inventoryId", utilities.handleErrors(invController.buildByInventoryId));

// Route to build 500 error page
router.get("/err", utilities.handleErrors(errorController.build500Page));

module.exports = router;
