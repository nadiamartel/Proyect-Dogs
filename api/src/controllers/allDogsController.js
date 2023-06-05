//desarrollar infoAllDogs
const { Dog, Temperament } = require(".././db");
const { Op } = require("sequelize");
const axios = require("axios");
const { API_KEY } = process.env;

const infoAllDogs = async(name) =>{
    //revisamos si existe el nombre >>> luego ontenemos todos los perris de la BDD
    if(!name){
        const dogsBD = await Dog.findAll({ include: Temperament });

        //guardamos la info y mapeamos con los datos que necesitamos
        const dogsFoundDB = []; 
        dogsFoundDB?.map(dog =>{
            const infoDog = {
                id: dog.id,
                name: dog.name,
                image: { url : dog.image },
                weight: { metric: dog.weight },
                temperament: `${ dog.Temperaments.map(temperament =>`${temperament.name}`) }`
            }
            dogsFoundDB.push(infoDog);
        })
        
        //ahora buscamos en la API:
        const { data } = await axios("https://api.thedogapi.com/v1/breeds");
        if(dogsFoundDB.length === 0 && data.length !==0) return data;
        if(dogsFoundDB.length !== 0 && data.length ===0) return dogsFoundDB;
        if(dogsFoundDB.length !== 0 && data.length !==0) return dogsFoundDB.concat(data);
        //ver si es necesario arrojar error o mensaje!
        // console.log(data);
    }

    //para buscar por nombre>>> primero buscamos en la BDD:
    const nameType = (name) =>{
        return name[0].toLowerCase() + name.slice(1).toLowerCase();
    } //>>> para estandarizar la busqueda(minusc)
    const nameUnified = nameType(name);

    dogFound = await Dog.findAll({
        where:{
            name: { [Op.like]: `%${nameUnified}%` }
        }, include: Temperament
    });

    const dogsFoundBD = [];

    dogFound?.map(dog =>{
        const infoDog = {
            id: dog.id,
            name: dog.name,
            image: { url: dog.image },
            weight: { metric: dog.weight },
            temperament: `${ dog.Temperaments.map(temperament =>`${temperament.name}`) }`
        }
        dogsFoundBD.push(infoDog)
    })

    //ahora buscamos en la API:
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${nameUnified}`)
    
    const dogsFoundAPI = [];

    for(const dog of data){
        if(dog.hasOwnProperty("reference_image_id")){
            let { data } = await axios(`https://api.thedogapi.com/v1/images/${dog?.reference_image_id}`);

            const newDog = {
                id: data?.breeds[0].id,
                name: data?.breeds[0].name,
                image: { url: data?.url },
                weight: data?.breeds[0].weight,
                temperament: data?.breeds[0]?.temperament
            }
            dogsFoundAPI.push(newDog)
        }
    }

    if(dogsFoundBD.length ===0 && dogsFoundAPI !==0) return dogsFoundAPI;
    if(dogsFoundBD.length !==0 && dogsFoundAPI ===0) return dogsFoundBD;
    if(dogsFoundBD.length !==0 && dogsFoundAPI !==0) return dogsFoundBD.concat(dogsFoundAPI);

    return `There is no dog with ${name}`;
}


module.exports ={
    infoAllDogs
}
