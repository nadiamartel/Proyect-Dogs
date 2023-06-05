import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


const NavBar = () =>{
    return(
        <div className={s.bg}>
            <div>
                <h2>aca va una imagen de perritos</h2>

                <SearchBar/>

                <NavLink to="/home">
                    <button>HOME</button>
                </NavLink>

                <NavLink to="/create">
                    <button>CREATE</button>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;