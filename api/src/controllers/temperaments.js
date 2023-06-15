//README:
// GET | /temperaments
// >> Obtiene todos los temperamentos existentes.
// >> Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
const { Temperament } = require("../db");
const getAllTemperaments = require("../helpers/getAllTemperaments");

//Revisamos los datos de la base de datos local (No tienen que estar duplicados!)
const allTemperaments = async() =>{
    try {
        const localHost = await Temperament.findAll();
        if(localHost.length !== 0) return localHost;
    
        const temperaments = await getAllTemperaments();
    
        for(const name of temperaments){
            await Temperament.create({name})
        }
    
        const tempBD = await Temperament.findAll();
    
        return tempBD;
    } catch (error) {
        return  {message: error.message };
       
    }
}

module.exports ={
    allTemperaments
}
