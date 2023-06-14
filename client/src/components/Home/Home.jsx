import s from "./Home.module.css";
import { useEffect, useState } from "react";
import { getDogs } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, nextPage, prevPage, showFirst, filterOrigin, filterTemperaments, orderAlfa, orderWeight } from "./Home.js";
import Card from "../Card/Card.jsx";
// import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.showDogs);
    const [temperaments, setTemperaments] = useState([]);
    const [cardsShow, setCardsShow] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        getTemperaments(setTemperaments)
    }, [])

    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch]) //REVISAR ESTO!

    useEffect(() => {
        showFirst(allDogs, setCardsShow)
    }, [allDogs])

    const nextPageHandler = () => {
        nextPage(allDogs, currentPage, setCardsShow, setCurrentPage)
    }

    const prevPageHandler = () => {
        prevPage(allDogs, currentPage, setCardsShow, setCurrentPage)
    }

    const handleFilterOrigin = (event) => {
        const { value } = event.target;
        filterOrigin(value, dispatch, setCurrentPage)
    }

    const handleFilterTemperaments = (event) => {
        const { value } = event.target;
        filterTemperaments(value, dispatch, setCurrentPage)
    }

    const handleOrderAlfa = (event) => {
        const { value } = event.target;
        orderAlfa(value, dispatch, setCurrentPage)
    }

    const handleOrderWeight = (event) => {
        const { value } = event.target;
        orderWeight(value, dispatch, setCurrentPage)
    }

    return (
        <div className={s.general}>
            <div>
                <span className={s.title}>Filter By:</span>
                <select onChange={handleFilterOrigin}>
                    <option value="All">All Dogs</option>
                    <option value="API">Dogs Interface</option>
                    <option value="BDD">Dogs Created</option>
                </select>

                <select onChange={handleFilterTemperaments}>
                    {
                        temperaments.map((temp, index) => {
                            return (
                                <option key={index} value={temp.name}>{temp.name}</option>
                            )
                        })
                    }
                </select>

                <span className={s.title}>Order By:</span>
                <select onChange={handleOrderAlfa}>
                    <option value="Asc">Ascending</option>
                    <option value="Desc">Descending</option>
                </select>

                <select onChange={handleOrderWeight}>
                    <option value="weMayor">Lower weight</option>
                    <option value="weMenor">Greater weight</option>
                </select>

                {/* <Link to="/home">
                    <button>Refresh all</button>
                </Link> */}
            </div>

            <div className={s.cardContainer}>
                {
                    cardsShow.map(({ id, name, image, temperament, weight }) => {
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
            <div className={s.btn_container}>
                <button className={s.button} onClick={prevPageHandler}>⏪ Prev</button>
                <label className={s.page} htmlFor="current">{currentPage}</label>
                <button className={s.button} onClick={nextPageHandler}>Next ⏩</button>
            </div>
        </div>
    )
}

export default Home;