import { useHistory, useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { getDog, handleChange, handleDelete, handleEdit } from './Detail';
import { useDispatch } from 'react-redux';
import s from "./Detail.module.css"
import Loading from '../Loading/Loading';
// import { Link } from 'react-router-dom';

const Detail = () => {

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [dog, setDog] = useState([]);
    const [loading, setLoading] = useState(true);
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
        setLoading(true);
        getDog(id, setDog, dispatch, history)
            .then(() => setLoading(false));
        return () => setDog([])
    }, [dispatch, id, history])

    const hanldeInputChange = (event) => {
        event.preventDefault();
        console.log(dataUpdate);
        handleChange(event, dataUpdate, setDataUpdate)
    }

    const handleDeleteL = (event) => {
        event.preventDefault();
        handleDelete(id, history);
    };

    const handleEditL = (event) => {
        event.preventDefault();
        setShow(!show)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEdit(id, dataUpdate, history)
    }

    //Adapatar para id de BDD y API y asi poder modif y eliminar
    return (
        <div className={s.container} key={dog[0]?.id || dog.id}>

            {
                loading ? (
                    <Loading />
                ) : (
                    <Fragment>
                        <h2 className={s.title}>Details you should know!</h2>

                        <div className={s.data}>
                            <img className={s.img} src={dog[1]?.url || dog.image?.url} alt="" />

                            <div className={s.info}>
                                <h4 className={s.span_etiq}>Name:<span> {dog[0]?.name || dog.name}</span></h4>

                                {dog[0]?.origin && <h4 className={s.span_etiq}>Origin: <span>{dog[0]?.origin}</span></h4>}

                                <h4 className={s.span_etiq}>Temperaments:<span> {dog[0]?.temperament || dog?.temperament}</span></h4>
                                <table>
                                    <tbody className={s.table_title}>
                                        <tr>
                                            <td>Height:</td>
                                            <td>Weight:</td>
                                            <td>Life Span:</td>
                                            <td>ID:</td>
                                        </tr>
                                    </tbody>
                                    <tbody className={s.table_content}>
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
                        <div></div>
                        {
                            show && <form className={s.form} onSubmit={handleSubmit} >
                                <label>Complete the information you want to update:</label>
                                <input onChange={hanldeInputChange} type="text" placeholder='Name*' name='name' />

                                <input onChange={hanldeInputChange} placeholder="Min height" name="height_min" type="number" min="10" max="100" />
                                <input onChange={hanldeInputChange} placeholder="Max heigth" name="height_max" type="number" min="10" max="100" />

                                <input onChange={hanldeInputChange} placeholder="Min weight" name="weight_min" type="number" min="1" max="50" />
                                <input onChange={hanldeInputChange} placeholder="Max weight" name="weight_max" type="number" min="5" max="100" />

                                <input onChange={hanldeInputChange} placeholder="Min life span" name="life_span_min" type="number" min="5" max="15" />
                                <input onChange={hanldeInputChange} placeholder="Max life span" name="life_span_max" type="number" min="8" max="20" />

                                <button className={s.btn}> Update </button>

                                <div><span className={s.advertencia}>⚠ IMPORTANT! The "Name" field is required ⚠</span></div>

                            </form>
                        }

                    </Fragment>


                )
            }


        </div>
    )
};

export default Detail;