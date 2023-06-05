const { Router } = require("express")
const router = Router();
const { getTemperaments } = require("../handlers/temperaments")

router.get("/", getTemperaments);

module.exports=router;