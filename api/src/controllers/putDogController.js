const { Dog } = require("../db");

// >>> info auxiliar <<<
// const nameType = (name) =>{
//     return name[0].toLowerCase() + name.slice(1).toLowerCase();
// } //>>> para estandarizar la busq


const dogUpdate = async(id, name, image, life_span, height, weight) =>{
    if(!id) throw Error("You need the ID to make the change");

    const updateDog = await Dog.findByPK(id);
    if(updateDog === null) throw Error("You must provide a valid ID");

    updateDog.name = name[0]?.toUpperCase() + name?.slice(1).toLowerCase() || updateDog.name;
    updateDog.image = image || updateDog.image;
    updateDog.life_span = life_span.length < 10 ? updateDog.life_span : life_span;
    updateDog.height = height.length < 4 ? updateDog.height : height;
    updateDog.weight = weight.length < 4 ? updateDog.weight : weight;

    await updateDog?.save();

    return { message: "Updated information!" };
}

module.exports={
    dogUpdate
}