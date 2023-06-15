const { infoDogById } = require("../controllers/dogByIdController");

const getDogById = async(req, res) =>{
    try {
        const {id} = req.params;
        const dogById = await infoDogById(id);
        return res.status(200).json(dogById);
    } catch (error) {
        return res.status(404).send("Can't find the dog, sorry!")
    }
}

module.exports = {
    getDogById
}