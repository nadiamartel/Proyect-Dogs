import s from "./Landing.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Landing = () => {
    const [title, setTitle] = useState('');
    const [titleComplete, setTitleComplete] = useState(false);
    const text = "Doggie World: Unleash the Fun!";

    useEffect(() => {
        let currentIndex = 0;

        const timer = setInterval(() => {
            setTitle((prevTitle) => prevTitle + text[currentIndex]);
            currentIndex++;

            if (currentIndex === text.length) {
                clearInterval(timer);
                setTitleComplete(true);
            }
        }, 100); // Ajusta el tiempo entre cada letra según tus necesidades

        return () => {
            clearInterval(timer); // Limpia el temporizador al desmontar el componente
        };
    }, []);

    return (
        <div className={s.bg}>
            <div className={s.content}>

                <h1 className={s.title}>{title}</h1>
                {
                    titleComplete && (
                        <Link to="/home">
                            <button className={s.button}>START!</button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Landing