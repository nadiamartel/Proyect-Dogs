const { createDog } = require("../controllers/createDogController");

const postDog = async(req, res) =>{
    try {
        const {name, image, height, weight, life_span, temperaments} = req.body;
        const newDog = await createDog({name, image, height, weight, life_span, temperaments});
        return res.status(200).json(newDog)
    } catch (error) {
        return res.status(404).send("Unknown error, please try again later")
    }
}

module.exports ={
    postDog
}