const axios = require('axios')

const getAllTemperaments = async () => {
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds`);

    let allTemperaments = [];

    data.map(async (dog) => {
        let dogTemps = dog.temperament;
        let arr = dogTemps?.split(", ");

        arr?.map((temp) => {
            if (!allTemperaments.includes(temp)) {
                allTemperaments.push(temp)
            }
        })
    })
    console.log(allTemperaments);
    return allTemperaments;
};

module.exports = getAllTemperaments;