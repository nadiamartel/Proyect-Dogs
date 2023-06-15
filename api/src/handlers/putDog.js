const { dogUpdate } = require("../controllers/putDogController");

const putDog = async(req, res) =>{
    try {
        console.log(req.body);
        const { id, name, life_span, height, weight } = req.body;
        const dogMoodif = dogUpdate(id, name, life_span, height, weight);
        return res.status(200).json(dogMoodif); 
    } catch (error) {
        return res.status(404).send("The modification could not be made, please try again later")
    }
}

module.exports = {
    putDog
}