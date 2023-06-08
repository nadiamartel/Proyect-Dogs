const { Dog } = require("../db");

const removeDog = async(id) =>{
    const dogDel = await Dog.findByPK(id);

    if(!dogDel) { throw Error(`No ID record found: ${id}`) };

    await dogDel.destroy();

    return dogDel;
}

module.exports={
    removeDog
}