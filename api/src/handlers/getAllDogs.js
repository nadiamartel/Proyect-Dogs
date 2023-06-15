const { infoAllDogs } = require("../controllers/allDogsController");

const getAllDogs = async(req, res) =>{
    try {
        const {name} = req.query;
        const responseDogs = await infoAllDogs(name);
        return res.status(200).json(responseDogs);
    } catch (error) {
        return res.status(404).send("The data could not be accessed, please try again later.")
    }
}

module.exports={
    getAllDogs,
}