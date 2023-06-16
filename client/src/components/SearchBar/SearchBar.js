import axios from "axios";

//Aux peticion
export const handleSearch = async (nameSearch, dispatch, showDogs, history) => {
    try {
        const response = await axios(`http://localhost:3001/dogs/?name=${nameSearch}`);
        // if(typeof response.data === "string"){
        //     return;
        // }
        dispatch(showDogs(response.data));
        // console.log(response.data);
    } catch (error) {
        alert("Unknwon error")

        setTimeout(() => {
            history.push('/home')
        }, "3000")
    }
}

//aux para setear el estado con el nombre ingresado por el usuario
export const handleInput = (event, setNameSearch) => {
    const { value } = event.target;
    setNameSearch(value)
}

