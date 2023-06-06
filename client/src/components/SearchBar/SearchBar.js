import axios from "axios";

//Aux peticion
export const handleSearch = async(nameSearch, dispatch, showDogs) =>{
    try {
        const response = await axios(`http:localhost:3001/dogs/?name=${nameSearch}`);
        if(typeof response.data === "string"){
            return;
        }
        dispatch(showDogs(response.data));
    } catch (error) {
        alert("Unknwon error")
    }
}

//aux para setear el estado con el nombre ingresado por el usuario
export const handleInput = (event, setNameSearch) =>{
    const { value } = event.target;
    setNameSearch(value)
}

