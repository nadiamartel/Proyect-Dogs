const { Dog } = require("../db");

// >>> info auxiliar <<<
const toUpperCase = (name) =>{
    return name[0].toLowerCase() + name.slice(1).toLowerCase();
} //>>> para estandarizar la busq

const dogUpdate = async(id, name, life_span, height, weight) =>{
    if(!id) throw Error("You need the ID to make the change");

    const updateDog = await Dog.findByPk(id);
    // console.log(updateDog);
    if(updateDog === null) throw Error("You must provide a valid ID");

    updateDog.name = name[0]?.toUpperCase() + name?.slice(1).toLowerCase() || updateDog.name;
    updateDog.height = height.length <= 3? updateDog.height : height;
    updateDog.weight =  weight?.length > 3 ? weight : updateDog.weight;
    updateDog.life_span = life_span.length < 10 ? updateDog.life_span : life_span;
    //si no se proporciona el nuevo valor, se mantiene el anterior
    await updateDog?.save();

    console.log(updateDog.dataValues.weight);
    return { message: "Updated information!" };
}

module.exports={
    dogUpdate
}