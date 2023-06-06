import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getDog } from "./Detail";
import { useDispatch } from "react-redux";

const Detail = () => {

    const dispatch = useDispatch();
    const navigate = useHistory();
    const { id } = useParams();
    const [dog, setDog] = useState();

    useEffect(() =>{
        getDog(id, setDog, dispatch, navigate);
        return setDog([])
    }, [id, dispatch, navigate])

    return (
        <div key={dog[0]?.id || dog.id}>
            <h2>DOG DETAIL</h2>
            <div>
                <img src={dog[1]?.url || dog.image?.url} alt="" />

                <h4>ID: <span>{dog[0]?.id || dog.id}</span></h4>

                <h4>Name: <span>{dog[0]?.name || dog.name}</span></h4>

                {dog[0]?.origin && <h4>Origin: <span>{dog[0]?.origin}</span></h4>}

                <h4>Weight: <span>{dog[0]?.weight?.metric || dog.weight?.metric} /kg</span></h4>

                <h4>Height: <span>{dog[0]?.height?.metric || dog.height?.metric} /cm</span></h4>

                <h4>Temperaments:<span>{dog[0]?.temperament || dog?.temperament}</span></h4>

                <h4>Life Span:<span>{dog[0]?.life_span || dog.life_span} /years</span></h4>
                {dog.id && <button>DELETE</button>}
                {dog.id && <button>EDIT</button>}

            </div>
        </div>
    )
}

export default Detail;