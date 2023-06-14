import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDog, handleChange, handleDelete, handleEdit } from './Detail';
import { useDispatch } from 'react-redux';
import s from "./Detail.module.css"
// import { Link } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [dog, setDog] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({
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
        getDog(id, setDog, dispatch, history);
        return setDog([])
    }, [dispatch, id, history])

    const hanldeInputChange = (event) => {
        event.preventDefault();
        console.log(dataUpdate);
        handleChange(event, dataUpdate, setDataUpdate)
    }

    const handleDeleteL = (event) => {
        event.preventDefault();
        handleDelete(id, dispatch, history);
    };

    const handleEditL = (event) => {
        event.preventDefault();
        setShow(!show)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEdit(id, dispatch, dataUpdate, setShow, history)
    }

    //Adapatar para id de BDD y API y asi poder modif y eliminar
    return (
        <div className={s.container} key={dog[0]?.id || dog.id}>
            {/* <div>
                <Link to="/home">
                    <button className={s.back}>↩BACK</button>
                </Link>
            </div> */}
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
                    {dog.id && <button className={s.button} onClick={handleDeleteL}>DELETE</button>}
                    {dog.id && <button className={s.button} onClick={handleEditL}>EDIT</button>}
                </div>

            </div>
            <span></span>
            {
                show && <form className={s.form} onSubmit={handleSubmit} >
                    <label>Complete the information you want to update:</label>
                    <input onChange={hanldeInputChange} type="text" placeholder='Name' name='name' />

                    <input onChange={hanldeInputChange} placeholder="Min height" name="height_min" type="number" min="10" max="100" />
                    <input onChange={hanldeInputChange} placeholder="Max heigth" name="height_max" type="number" min="10" max="100" />

                    <input onChange={hanldeInputChange} placeholder="Min weight" name="weight_min" type="number" min="1" max="50" />
                    <input onChange={hanldeInputChange} placeholder="Max weight" name="weight_max" type="number" min="5" max="100" />

                    <input onChange={hanldeInputChange} placeholder="Min life span" name="life_span_min" type="number" min="5" max="15" />
                    <input onChange={hanldeInputChange} placeholder="Max life span" name="life_span_max" type="number" min="8" max="20" />

                    <input onChange={hanldeInputChange} name="image" type="url" placeholder="Image url" />
                    <button className={s.btn}> Update </button>

                </form>
            }
        </div>
    )
};

export default Detail;