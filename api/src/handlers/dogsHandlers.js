const { infoAllDogs } = require("../controllers/allDogsController");
const { infoDogById } = require("../controllers/dogByIdController");
const { createDog } = require("../controllers/createDogController");
const { dogUpdate } = require("../controllers/putDogController");
const { removeDog } = require("../controllers/removeDogController");

const getAllDogs = async(req, res) =>{
    try {
        const {name} = req.query;
        const responseDogs = await infoAllDogs(name);
        return res.status(200).json(responseDogs);
    } catch (error) {
        return res.status(404).send("The data could not be accessed, please try again later.")
    }
}

const getDogById = async(req, res) =>{
    try {
        const {id} = req.params;
        const dogById = await infoDogById(id);
        return res.status(200).json(dogById);
    } catch (error) {
        return res.status(404).send("Can't find the dog, sorry!")
    }
}

const postDog = async(req, res) =>{
    try {
        const {name, image, height, weight, life_span, temperaments} = req.body;
        const newDog = await createDog(name, image, height, weight, life_span, temperaments);
        return res.status(201).json(newDog)
    } catch (error) {
        return res.status(404).send("Unknown error, please try again later")
    }
}

const putDog = async(req, res) =>{
    try {
        const { id, name, life_span, height, weight } = req.body;
        const dogMoodif = dogUpdate(id, name, life_span, height, weight);
        return res.status(200).json(dogMoodif); 
    } catch (error) {
        return res.status(404).send("The modification could not be made, please try again later")
    }
}

const deleteDog = async(req, res) =>{
    try {
        const { id } = req.params;
        const deleteDog = await removeDog(id);
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {   
        return res.status(404).json({ message: error.message })
    }
}

module.exports={
    getAllDogs,
    getDogById,
    postDog,
    putDog,
    deleteDog
}