import s from "./Card.module.css";
import { NavLink } from "react-router-dom";


const Card = ({ id, name, image, temperament, weight }) => {
    return (
        <div className={s.container}>
            <div className={s.info}>
                <NavLink className={s.nav} to={`/detail/${id}`}>
                    <h3 className={s.name}>{name} ◾ {weight}/KG</h3>
                    {/* <h5 className={s.weight}>{weight} /kgs</h5> */}
                    <h4 className={s.temperament}>{temperament}</h4>
                </NavLink>
            </div>
            <img className={s.img} src={image} alt="picDog" />
        </div>
    )
}

export default Card;