import axios from "axios";
import Swal from "sweetalert2";

//Aux peticion
export const handleSearch = async (nameSearch, dispatch, showDogs, history) => {
    try {
        const response = await axios(`http://localhost:3001/dogs/?name=${nameSearch}`);

        if (response.data.length === 0) {
            Swal.fire({
                title: `No dogs were found with the name "${nameSearch}"`,
                icon: "error",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                backdrop: true
            })
            // alert(`No dogs were found with the name "${nameSearch}"`)
            return;
        }

        dispatch(showDogs(response.data));
        console.log(response.data);
    } catch (error) {
        Swal.fire({
            title: "Unknown error" ,
            icon: "error",
            timer: 3000,
        })
        // alert("Unknwon error")

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

