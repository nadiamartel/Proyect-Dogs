const { Router } = require("express");
const router = Router();
const { getAllDogs, getDogById, postDog, putDog, deleteDog } = require("../handlers/dogsHandlers")

router
.get("/", getAllDogs)
.get("/:id", getDogById)
.post("/", postDog)
.put("/id", putDog)
.delete("/:id", deleteDog)

module.exports= router;