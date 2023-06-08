import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDog, handleChange, handleDelete, handleEdit } from './Detail';
import { useDispatch } from 'react-redux';
import s from "./Detail.module.css"
import { Link } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const navigate = useHistory();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [dog, setDog] = useState([]);
    const [dataUptdate, setDataToUptdate] = useState({
        name: "",
        image: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: ""
    })

    useEffect(() => {
        getDog(id, setDog, dispatch, navigate);
        return setDog([])
    }, [dispatch, id, navigate])

    const hanldeInputChange = (event) => {
        event.preventDefault();
        handleChange(event, dataUptdate, setDataToUptdate)
    }

    const handleDeleteL = (event) => {
        event.preventDefault();
        handleDelete(id, dispatch, navigate);
    };

    const handleEditL = (event) => {
        event.preventDefault();
        setShow(!show)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEdit(id, dispatch, dataUptdate, setShow, navigate)
    }

    //Adapatar para id de BDD y API y asi poder modif y eliminar
    return (
        <div className={s.container} key={dog[0]?.id || dog.id}>
            <div>
                <Link to="/home">
                    <button className={s.back}>↩BACK</button>
                </Link>
            </div>
            <h2 className={s.title}>Details you should know!</h2>

            <div className={s.data}>
                <img className={s.img} src={dog[1]?.url || dog.image?.url} alt="" />

                <div className={s.info}>
                    <h4>Name:<span> {dog[0]?.name || dog.name}</span></h4>

                    {dog[0]?.origin && <h4>Origin: <span>{dog[0]?.origin}</span></h4>}

                    <h4>Temperaments:<span> {dog[0]?.temperament || dog?.temperament}</span></h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Height:</td>
                                <td>Weight:</td>
                                <td>Life Span:</td>
                                <td>ID:</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>{dog[0]?.height?.metric || dog.height?.metric} cm </td>
                                <td>{dog[0]?.weight?.metric || dog.weight?.metric} kg </td>
                                <td>{dog[0]?.life_span || dog.life_span}</td>
                                <td>{dog[0]?.id || dog.id}</td>
                            </tr>
                        </tbody>
                    </table>
                    {dog.id && <button onClick={handleDeleteL}>DELETE</button>}
                    {dog.id && <button onClick={handleEditL}>EDIT</button>}
                </div>

            </div>
            <span></span>
            {
                show && <form onSubmit={handleSubmit} >
                    <label> Complete only info to update </label>
                    <input onChange={hanldeInputChange} type="text" placeholder='Name' name='name' />

                    <input onChange={hanldeInputChange} placeholder="Min height" name="height_min" type="number" min='15' max='110' />
                    <input onChange={hanldeInputChange} placeholder="Max heigth" name="height_max" type="number" min='15' max="110" />

                    <input onChange={hanldeInputChange} placeholder="Min weight" name="weight_min" type="number" min='15' max='110' />
                    <input onChange={hanldeInputChange} placeholder="Max weigth" name="weight_max" type="number" min='15' max="110" />

                    <input onChange={hanldeInputChange} name="image" type="url" placeholder="Image url" />

                    <input onChange={hanldeInputChange} placeholder="Min life span" name="life_span_min" type="number" min='7' max='15' />
                    <input onChange={hanldeInputChange} placeholder="Max life span" name="life_span_max" type="number" min='8' max="20" />

                    <button > Update </button>

                </form>
            }
        </div>
    )
};

export default Detail;