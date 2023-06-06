import axios from "axios";
// import { msgDetail } from "../../redux/actions";

export const getDog = async(id, setDog, navigate) =>{
    try {
        const { data } = await axios(`http://localhost:3001/dogs/${id}`);
        setDog(data)
    } catch (error) {
        setTimeout(()=>{
            navigate("/home");
        }, 3000)
    }
};

export const handleChange = () =>{
    
}