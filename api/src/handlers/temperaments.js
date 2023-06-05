const { allTemperaments } = require("../controllers/temperaments")

const getTemperaments = async(req, res) =>{
    try {
        const resTemperaments = await allTemperaments();
        return res.status(200).json(resTemperaments);
    } catch (error) {
        return res.status(404).send("Sorry, the information could not be accessed")
    }
}

module.exports ={
    getTemperaments
}