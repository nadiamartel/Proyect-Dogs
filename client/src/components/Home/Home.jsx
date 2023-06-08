import s from "./Home.module.css";
import { useEffect } from "react";
import { getDogs } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
// import { getTemperaments } from "./Home";
import Card from "../Card/Card";

const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.showDogs);
    // const [temperaments, setTemperaments] = useState();
    
    // useEffect(() =>{
    //     getTemperaments(setTemperaments)
    // }, [])

    useEffect(() => {
        dispatch(getDogs())
    },[dispatch]) //REVISAR ESTO!


    return (
        <div className={s.general}>
            <h4>DECIME QUE VAN A APARECER LAS CARDS!</h4>
            {/* <h6>{temperaments}</h6> */}
            {/* solo para que no creashee hasta que lo use! */}
            {/* <select>
                {
                    temperaments.map(temp =>{
                        return(
                            <option value={temp.name}>{temp.name}</option>
                        )
                    })
                }
            </select> */}
            <div className={s.cardContainer}>
                {
                    allDogs.map(({ id, name, image, temperament, weight }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                image={image?.url}
                                weight={weight?.metric}
                                temperament={temperament}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;