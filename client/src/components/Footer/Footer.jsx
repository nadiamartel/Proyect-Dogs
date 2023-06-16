import s from "./Footer.module.css"
import linkedIn from "../../utils/img/linkedIn.jpg";
import github from "../../utils/img/github.png"

const Footer = () => {
    return (
        <footer className={s.container}>
            <div className={s.info}>
                <h5 className={s.name}>Nadia Martel</h5>
                <h5 className={s.contact}>| Contact me:</h5>

                <a href="https://www.linkedin.com/in/nadia-martel-admin/" target="_blank" rel="noreferrer">
                    <img className={s.img} src={linkedIn} alt="LinkedIn Logo" />
                </a>

                <a href="https://github.com/nadiamartel" target="_blank" rel="noreferrer">
                    <img className={s.img} src={github} alt="GitHub Logo" />
                </a>
                <h5 className={s.copy}>Copyright © 2023</h5>
           
            </div>
        </footer>
    )
}

export default Footer;