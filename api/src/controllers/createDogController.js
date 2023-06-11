//aca va desarrolla la fn "createDog"
const { Dog } = require("../db");

const createDog = async({name, image, height, weight, life_span, temperaments}) =>{
    if(!name || !image || !height || !weight || !life_span || !temperaments) throw Error("You must complete all fields");

    //uso el model Dog y el metodo create para crear un nuevo registro en la BDD
    const newDog = await Dog.create({
        name, image, height, weight, life_span
    })

    //agrego los temp(que es un array!) asociados al perro
    newDog.addTemperament(temperaments);

    return newDog;
}

module.exports ={
    createDog
}