import s from "./Card.module.css";
import { NavLink } from "react-router-dom";


const Card = ({ id, name, image, temperament, weight }) => {
    return (
        <div className={s.container}>
            <NavLink to={`/detail/${id}`}>
                <h3>{name}</h3>
                <h5>{weight} /kgs</h5>
                <h5>{temperament}</h5>
            </NavLink>
            <img className={s.img} src={image} alt="picDog" />
            {/* <div className={s.infoContainer}>
            </div> */}
        </div>
    )
}

export default Card;