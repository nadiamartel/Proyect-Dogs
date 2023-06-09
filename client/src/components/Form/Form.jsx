import { getTemperaments, handleChange, handleTemperaments, handleSubmit } from "./form";
import s from "./Form.module.css";
import { useEffect, useState } from "react";
import { validate } from "./validate";

const Form = () => {

    const [tempShow, setTempShow] = useState([]);
    const [temperaments, setTemperaments] = useState([]);
    const [tempSelect, setTempSelect] = useState("");
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
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        temperaments: "",
        weight: "",
        height: "",
        life_span: ""
    });

    const handleChangeL = (event) => {
        handleChange(event, dogCreate, setDogCreate, setErrors, validate)
    };

    //funcionalidad al boton de agregar temperamento:
    const handleChangeButton = (event) => {
        event.preventDefault();

        setDogCreate((dogCreate) => ({
            ...dogCreate,
            temperaments:
                dogCreate.temperaments.includes(tempSelect)
                    ? [...dogCreate.temperaments]
                    : [...dogCreate.temperaments, tempSelect]
        }))
        handleTemperaments(tempSelect, setTempShow, tempShow, temperaments)
    };

    //funcionalidad al boton de agregar dog:
    const handleSubmitButton = (event) => {
        event.preventDefault();
        handleSubmit(dogCreate, setDogCreate, setTempShow);
    };

    //obtengo los temp cuando el comp se monta, y se "limpia" cuando el comp se desmonta-.
    useEffect(() => {
        getTemperaments(setTemperaments);
        return () => {
            setTemperaments([])
        }
    }, []);


    return (
        <div className={s.container}>
            <form className={s.container_form} onSubmit={handleSubmitButton}>
                <h3 className={s.title}>Create your dog in simple steps!🐶</h3>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Name" onChange={handleChangeL} value={dogCreate.name} />
                {errors.name && <p>{errors.name}</p>}

                <label htmlFor="name">Weight:</label>
                <input className={s.input_num} type="number" name="weight_min" placeholder="kg min" min="1" max="50" onChange={handleChangeL} value={dogCreate.weight_min} />
                <input className={s.input_num} type="number" name="weight_max" placeholder="kg max" min="5" max="100" onChange={handleChangeL} value={dogCreate.weight_max} />
                {errors.weight && <p>{errors.weight}</p>}

                <label htmlFor="name">Height:</label>
                <input className={s.input_num} type="number" name="height_min" placeholder="cm min" min="10" max="100" onChange={handleChangeL} value={dogCreate.height_min} />
                <input className={s.input_num} type="number" name="height_max" placeholder="cm max" min="10" max="100" onChange={handleChangeL} value={dogCreate.height_max} />
                {errors.height && <p>{errors.height}</p>}

                <label htmlFor="life_span">Life Span:</label>
                <input className={s.input_num} type="number" name="life_span_min" placeholder="years min" min="5" max="15" onChange={handleChangeL} value={dogCreate.life_span_min} />
                <input className={s.input_num} type="number" name="life_span_max" placeholder="years max" min="8" max="20" onChange={handleChangeL} value={dogCreate.life_span_max} />
                {errors.life_span && <p>{errors.life_span}</p>}

                <label htmlFor="image">Image:</label>
                <input type="url" name="image" placeholder="insert a valid url" onChange={handleChangeL} value={dogCreate.image} />
                {errors.image && <p>{errors.image}</p>}

                <label htmlFor="temperaments">Temperaments:</label>
                <select className={s.select} name="select" onChange={(event) => { setTempSelect(event.target.value) }}>
                    {
                        temperaments.map((temp) => {
                            return (
                                <option key={temp.name} value={temp.id}>{temp.name}</option>
                            )
                        })
                    }
                </select>

                <button className={s.add_btn} disabled={!tempSelect} onClick={handleChangeButton}>Add Temperament</button>
                {tempShow.length > 0 ? <h5 className={s.temps}>Your selection:{" "} <span>{tempShow.join(", ")}</span></h5> : null}
                {errors.temperaments && <p>{errors.temperaments}</p>}
                

                <div>
                    {   //verifico si hay algun error en el obj errors:
                        dogCreate.name && !Object.values(errors).some((error) => error !== "")
                            ? <button className={s.create_btn}>CREATE</button>
                            : null
                    }
                </div>
            </form>
        </div>
    )
}

export default Form;