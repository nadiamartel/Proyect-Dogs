//README:
// GET | /temperaments
// >> Obtiene todos los temperamentos existentes.
// >> Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

const axios = require("axios");
const { Temperament } = require(".././db");

//Obtengo los temperamentos de la API y los guardo en un array para luego utilizarlos junto con la BDD
const getAllTemperaments = async()=>{
    const { data } = await axios("https://api.thedogapi.com/v1/breeds");
    let allTemp = [];

    //mapeo para obtener los temp de cada dog y la guardo >>> desp separo los temp por medio de la "coma" y los guardo
    data.map(async (dog) =>{
        let dogTemp = dog.temperament;
        let arr = dogTemp?.split(", ");

    //mapeo para chequear si el temperamento ya existe en el arreglo que creamos, se no existe lo agregamos mediante un push
        arr?.map((temp) =>{
            if(!allTemp.includes(temp)){
                allTemp.push(temp)
            }
        })
    })
    return allTemp;
}

//Revisamos los datos de la base de datos local (No tienen que estar duplicados!)
const allTemperaments = async() =>{
    const localHost = await Temperament.findAll();
    if(localHost) return localHost;

    const temperaments = await getAllTemperaments();

    temperaments.forEach(async(name) =>{
        await Temperament.create({name})
    })

    const tempBD = await Temperament.findAll();

    return tempBD;
}

module.exports ={
    allTemperaments
}
