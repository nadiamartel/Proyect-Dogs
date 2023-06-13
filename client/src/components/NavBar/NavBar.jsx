import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
// import welcome from "../../utils/img/nav_welcome_remov.png";
import opcion2 from "../../utils/img/small_nav.png"


const NavBar = () =>{
    return(
        <div className={s.bg}>
            <div className={s.container}>
                <img  className={s.img} src={opcion2} alt="dogWelcome" />

                <SearchBar/>

                <NavLink to="/create">
                    <button>Create your dog!</button>
                </NavLink>
                <NavLink to="/home">
                    <button>Back Home</button>
                </NavLink>

            </div>
        </div>
    )
}

export default NavBar;