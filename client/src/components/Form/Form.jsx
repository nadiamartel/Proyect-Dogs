import { getTemperaments, handleChange, handleTemperaments, handleSubmit } from "./form";
import s from "./Form.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

const Form = () => {
    // const temps = useSelector((state) => state.breeds);
    const temp = useSelector(state => state.showDogs);
    const [tempShow, setTempShow] = useState([]);
    const [temperaments, setTemperaments] = useState([]);
    const [tempSelect, setTempSelect] = useState("");
    const [errors, setErrors] = useState("");
    const [dogCreate, setDogCreate] = useState({
        name: "",
        image: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        temperaments: []
    })

    const handleChangeL = (event) => {
        handleChange(event, setDogCreate, dogCreate, setErrors) //agregagr el validate!!!
    };

    const handleChangeButton = (event) => {
        event.preventDefault();
        setDogCreate((dogCreate) => ({
            ...dogCreate, temperaments:
                dogCreate.temperaments.includes(tempSelect)
                    ? [...dogCreate.temperaments]
                    : [...dogCreate.temperaments, tempSelect]
        }))
        handleTemperaments(tempSelect, setTempSelect, tempShow, temperaments)
    };

    const handleSubmitButton = (event) => {
        event.preventDefault();
        handleSubmit(dogCreate, setDogCreate, setTempShow)
    };

    useEffect(() => {
        getTemperaments(setTemperaments);
        return () => {
            setTemperaments([])
        }
    }, []);
    //obtengo los temp cuando el comp se monta, y se "limpia" cuando el comp se desmonta-. 


    return (
        <div className={s.container}>
            <form className={s.container_form} onSubmit={handleSubmitButton}>
                <h3 className={s.title}>Create your dog in simple steps!🐶</h3>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Name" onChange={handleChangeL} />

                <label htmlFor="name">Weight:</label>
                <input className={s.input_num} type="number" name="weight_min" placeholder="cm min" min="10" max="100" onChange={handleChangeL} />
                <input className={s.input_num} type="number" name="weight_max" placeholder="cm max" min="10" max="100" onChange={handleChangeL} />

                <label htmlFor="name">Height:</label>
                <input className={s.input_num} type="number" name="height_min" placeholder="cm min" min="10" max="100" onChange={handleChangeL} />
                <input className={s.input_num} type="number" name="height_max" placeholder="cm max" min="10" max="100" onChange={handleChangeL} />

                <label htmlFor="life_span">Life Span:</label>
                <input className={s.input_num} type="number" name="life_span_min" placeholder="years min" min="5" max="15" onChange={handleChangeL} />
                <input className={s.input_num} type="number" name="life_span_max" placeholder="years max" min="7" max="20" onChange={handleChangeL} />

                <label htmlFor="image">Image:</label>
                <input type="text" name="url" placeholder="insert a valid url" onChange={handleChangeL} />

                <label htmlFor="temperaments">Temperaments:</label>
                <select name="select" onChange={(event) => { setTempSelect(event.target.value) }}>
                    {
                        temp.map((temp) => {
                            return (
                                <option key={temp.id} value={temp.temperament}>{temp.temperament}</option>
                            )
                        })
                    }
                </select>

                <button disabled={!tempSelect} onClick={handleChangeButton}>Add Temperament</button>
                {tempShow.length > 0 ? <h5>Your selection: <span>{tempShow}</span></h5> : null}

                <div>
                    {
                        dogCreate.name
                        ? <button>CREATE</button>
                        : null
                    }
                </div>
                {/* MODIFICAR! SOLO PARA QUE NO CRASHEE */}
                {errors}

            </form>
        </div>
    )
}

export default Form;