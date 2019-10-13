const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");


const Thing = require("../models/thing");
const stuffCtrl = require("../controllers/stuff");

router.post("/", auth, multer, stuffCtrl.createThing);
router.get("/", auth, stuffCtrl.getAllThings);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteOneThing);


module.exports = router;