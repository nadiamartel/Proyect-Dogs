import axios from "axios";
// import { getDogs } from "../../redux/actions";

export const getTemperaments = async(setTemperaments) =>{
    const { data } = await axios("http://localhost:3001/temperaments")
    setTemperaments(data)
}