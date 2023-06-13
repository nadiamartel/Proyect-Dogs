//aca va desarrollada la fN "infoDogById"
const { Dog, Temperament } = require("../db");
const axios = require("axios");

const infoDogById = async(id) =>{
    const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
    //definimos esta const por el tipo de ID que tiene la bdd y poder buscarla

    if(regex.test(id)){
        const dogFound = await Dog.findByPk(id, {include: Temperament});
        if(!dogFound) throw Error(`The indicated ${id} does not exist`);

        const dogShow = {
            id: dogFound.id,
            name: dogFound.name,
            image: { url: dogFound.image },
            height: { metric: dogFound.height },
            weight: { metric: dogFound.weight },
            life_span: dogFound.life_span,
            temperament: `${ dogFound.Temperaments.map(temperament => temperament.name) }`
        }
        // console.log(dogShow);
        return dogShow;
    }

    //desp de buscar en la BDD, buscamos en la API:
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds/${id}`);
    const img = await axios(`https://api.thedogapi.com/v1/images/${data.reference_image_id}`);
    if(Object.keys(data).length ===0) throw Error(`The indicated ${id} does not exist`)

    return [data, img.data];
}

module.exports ={
    infoDogById
}