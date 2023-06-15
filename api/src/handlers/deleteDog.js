const { removeDog } = require("../controllers/removeDogController");

const deleteDog = async(req, res) =>{
    try {
        const { id } = req.params;
        const deleteDog = await removeDog(id);
        return res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {   
        return res.status(404).json({ message: error.message })
    }
}

module.exports = {
    deleteDog
}