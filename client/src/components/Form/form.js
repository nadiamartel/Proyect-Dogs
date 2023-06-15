import axios from "axios";

//traigo los temperamentos guardados em la base de datos:
export const getTemperaments = async (setTemperaments) => {
    const { data } = await axios(`http://localhost:3001/temperaments`)
    setTemperaments(data)
};

//seteamos la fn q crea el dog, validamos por campo: [name]: value, validamos y actualizamos los errores
export const handleChange = (event, dogCreate, setDogCreate, setErrors, validate) => {
    const { name, value } = event.target;
    setDogCreate({
        ...dogCreate, 
        [name]: value
    })

    setErrors(
        validate({
            ...dogCreate,
             [name]: value
        })
    )
};

//recorremos temps y verificamos si ya esta entre los temps que se muestran, si no esta lo agrega(para no agregar 2 veces el mismo)
export const handleTemperaments = (tempSelect, setTempShow, tempShow, temperaments) => {
    if (Array.isArray(temperaments)) {
        const tempFound = temperaments.find(temp => temp.id === +tempSelect)
        if (tempShow.includes(`${tempFound.name}`)) return;
        setTempShow([...tempShow, `${tempFound.name}`])
    }
};

//pa manejar el envio del form
export const handleSubmit = async (dogCreate, setDogCreate, setTempShow) => {
    try {
        const newDog = {
            name: dogCreate.name[0].toUpperCase() + dogCreate.name.slice(1).toLowerCase(),
            image: `${dogCreate.image}`,
            height: `${dogCreate.height_min} - ${dogCreate.height_max}`,
            weight: `${dogCreate.weight_min} - ${dogCreate.weight_max}`,
            life_span: `${dogCreate.life_span_min} - ${dogCreate.life_span_max} years`,
            temperaments: dogCreate.temperaments
        };
        const { data } = await axios.post(`http://localhost:3001/dogs`, newDog);
        setDogCreate({
            name: "",
            image: "",
            height_min: "",
            height_max: "",
            weight_min: "",
            weight_max: "",
            life_span_min: "",
            life_span_max: "",
            temperaments: []
        })
        setTempShow([]);
        alert("Dog created successfully!");
    } catch (error) {
        alert("Unexpected error, please try again later");
    }
}