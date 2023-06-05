import s from "./Home.module.css";
import { useEffect } from "react";
import { getDogs } from "../../redux/actions";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.showDogs)

    useEffect(() => {
        dispatch(getDogs())
    })

    return (
        <div className={s.general}>
            <h4>DECIME QUE VAN A APARECER LAS CARDS!</h4>
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
                                temperamet={temperament}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;