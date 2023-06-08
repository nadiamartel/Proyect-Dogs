import axios from 'axios';
import { GET_ALLDOGS, SHOW_ALLDOGS, ORDER_ASCENDENTE, ORDER_DESCENDENTE, ORDER_WEIGHT_MAYOR, FILTER_API, FILTER_BDD, FILTER_TEMPERAMENTS, ORDER_WEIGHT_MENOR, CLEAN_MSG_DETAIL, NOT_FOUND_MSG } from './actions-types';

export const getDogs = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/dogs");
            return dispatch({
                type: GET_ALLDOGS,
                payload: data
            })
        } catch (error) {
            return { type: GET_ALLDOGS, payload: "Unknown error" }
        }
    }
};

export const showDogs = (results) => {
    return {
        type: SHOW_ALLDOGS,
        payload: results
    }
};

export const orderAsc = () => {
    return {
        type: ORDER_ASCENDENTE,
        payload: null
    }
};

export const orderDesc = () => {
    return {
        type: ORDER_DESCENDENTE,
        payload: null
    }
};

export const orderWeMayor = () => {
    return {
        type: ORDER_WEIGHT_MAYOR,
        payload: null
    }
};

export const orderWeMenor = () => {
    return {
        type: ORDER_WEIGHT_MENOR,
        payload: null
    }
};

export const filterInfoApi = () => {
    return {
        type: FILTER_API,
        payload: null
    }
};

export const filterInfoBDD = () => {
    return {
        type: FILTER_BDD,
        payload: null
    }
};

export const filterTemp = (temps) => {
    return {
        type: FILTER_TEMPERAMENTS,
        payload: temps
    }
};

export const msgDetail = () => {
    return {
        type: CLEAN_MSG_DETAIL,
        payload: null
    }
};

export const msgNotFound = (message) => {
    return {
        type: NOT_FOUND_MSG,
        payload: message
    }
}

//>>> PRUBA DE TEMPERAMENTOS <<<//
// export const searchBreed = (value) => {
//     return {
//         type: SEARCH_BREED,
//         payload: value
//     }
// };

// export const searchTemperament = (value) => {
//     return {
//         type: SEARCH_TEMPERAMENT,
//         payload: value
//     }
// };