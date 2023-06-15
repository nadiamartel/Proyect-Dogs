const { Router } = require("express");
const router = Router();
const { getAllDogs } = require("../handlers/getAllDogs");
const { getDogById } = require("../handlers/getDogById");
const { postDog } = require("../handlers/postDog");
const { putDog } = require("../handlers/putDog");
const { deleteDog } = require("../handlers/deleteDog");

router
.get("/", getAllDogs)
.get("/:id", getDogById)
.post("/", postDog)
.put("/:id", putDog)
.delete("/:id", deleteDog)

module.exports= router;