import { GET_ALLDOGS, SHOW_ALLDOGS, ORDER_ASCENDENTE, ORDER_DESCENDENTE, ORDER_WEIGHT_MAYOR, FILTER_API, FILTER_BDD, FILTER_TEMPERAMENTS, ORDER_WEIGHT_MENOR, CLEAN_MSG_DETAIL } from './actions-types';

const initialState = {
    allDogs: [],
    showDogs: []
}

const reducer = (state = initialState, { type, payload }) =>{
    switch(type){
        case GET_ALLDOGS:
            return{
                ...state,
                allDogs: payload,
                showDogs: payload
            };
        case SHOW_ALLDOGS:
            return{
                ...state,
                showDogs: payload
            };
        case ORDER_ASCENDENTE:
            const allDogs = [...state.showDogs]
            return{
                ...state,
                showDogs: allDogs.sort((a, b) => a.name.localeCompare(b.name)) //ordena en funcion del name ingresado
            };
        case ORDER_DESCENDENTE:
            const allDogsAux = [...state.showDogs]
            return{
                ...state,
                showDogs: allDogsAux.sort((a, b) => b.name.localeCompare(a.name))
            };
        case ORDER_WEIGHT_MAYOR:
            const allDogsAuxDos = [...state.showDogs]
            return{
                ...state,
                showDogs: allDogsAuxDos.sort((a, b) =>{
                    const weightA = +a.weight.metric.split(" ")[0];
                    const weightB = +b.weight.metric.split(" ")[0];
                    return weightA - weightB //porq el formato de la API es: weight:{ metric: 7 - 27}
                })
            };
        case ORDER_WEIGHT_MENOR:
            const allDogsAuxTres = [...state.showDogs]
            return{
                showDogs: allDogsAuxTres.sort((a, b) =>{
                    const weightA = +a.weight.metric.split(" ")[0];
                    const weightB = +b.weight.metric.split(" ")[0];
                    return weightB - weightA
                })
            }
        case FILTER_API:
            const allDogs1 = [...state.allDogs]
            return{
                ...state,
                showDogs: allDogs1.filter(dog => typeof dog.id === "number") //id de la api es num entero
            };
        case FILTER_BDD:
            const allDogs2 = [...state.allDogs]
            return{
                showDogs: allDogs2.filter(dog => /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/.test(dog.id))
            };
        case FILTER_TEMPERAMENTS:
            const allDogs3 = [...state.allDogs]
            return{
                ...state,
                showDogs: allDogs3.filter(dog => dog?.temperament?.includes(payload))
            }
        case CLEAN_MSG_DETAIL:
            return{
                ...state,
                message:""
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;