import axios from "axios";
import { getDogs, filterInfoApi, filterInfoBDD, filterTemp, orderAsc, orderDesc, orderWeMayor, orderWeMenor } from "../../redux/actions";

//peticion a la BDD para mostrar los temps en el filtro
export const getTemperaments = async(setTemperaments) =>{
    const { data } = await axios("http://localhost:3001/temperaments")
    setTemperaments(data)
};

//Paginado:
export const dogsPage = 8;

export const nextPage = (allDogs, currentPage, setCardsShow, setCurrentPage) =>{
    const absDogs = allDogs.length;
    const proxPage = currentPage + 1;
    const firstCard = proxPage * dogsPage;

    if(firstCard >= absDogs) return;

    setCardsShow([...allDogs].slice(firstCard, firstCard + dogsPage));
    setCurrentPage(proxPage);
    //calculamos el indice del primer perrito a mostrar en la prox pag, chequeamos si hay mas perros dispo y actualizamos el estado o mostramos los perros q corresponden a la prox pagina(tb actualiza el estado de la pag actual)
};

export const prevPage = (allDogs, currentPage, setCardsShow, setCurrentPage) =>{
    const befPage = currentPage - 1;
    if(befPage < 0) return;
    const firstCard = befPage * dogsPage;
    setCardsShow([...allDogs].slice(firstCard, firstCard + dogsPage));
    setCurrentPage(befPage)
};
    //para retroceder, mostramos el indice del primer perrito a mostrar en la pag anterior, si hay anterior dispo, actualiza el estado o muestra los perros correspondientes a la pag anterior(tb actualiza el estado de la pagina actual)

export const showFirst = (allDogs, setCardsShow) =>{
    setCardsShow([...allDogs].slice(0, dogsPage))
}   //para mostrar la 1ra pag


//Filtrados
export const filterOrigin = (value, dispatch, setCurrentPage) =>{
    if(value === "API"){ dispatch(filterInfoApi()) }
    if(value === "BDD") { dispatch(filterInfoBDD()) }
    if(value === "All") { dispatch(getDogs()) }
    setCurrentPage(0)
}

export const filterTemperaments = (value, dispatch, setCurrentPage) =>{
    dispatch(filterTemp(value))
    setCurrentPage(0)
}

//Ordenamientos
export const orderAlfa = (value, dispatch, setCurrentPage) =>{
    if(value === "Asc"){ dispatch(orderAsc())}
    if(value === "Desc"){ dispatch(orderDesc())}
    setCurrentPage(0)
}

export const orderWeight = (value, dispatch, setCurrentPage) =>{
    if(value === "weMayor"){ dispatch(orderWeMayor())}
    if(value === "weMenor"){ dispatch(orderWeMenor())}
    setCurrentPage(0)
}
