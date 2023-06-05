import s from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={s.bg}>
            <div className={s.content}>

                <h1>Individual Project /DOGS/</h1>

                <Link to="/home">
                    <button className={s.button}>HOME</button>
                </Link>

            </div>


        </div>
    )
}

export default Landing