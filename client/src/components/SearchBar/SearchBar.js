import axios from "axios";

//Aux peticion
    export const handleSearch = async (nameSearch, dispatch, showDogs, history) => {
        try {
            const res = await axios(`http://localhost:3001/dogs/?name=${nameSearch}`);
            if(res.data.length === 0){
                alert(`No dogs were found with the name "${nameSearch}"`)
                return;
            }
        
            dispatch(showDogs(res.data));
            console.log(res.data);
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

