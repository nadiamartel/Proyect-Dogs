import axios from "axios";
import { msgDetail, msgNotFound } from "../../redux/actions";


export const getDog = async (id, setDog, dispatch) => {
  try {
    const { data } = await axios(`http://localhost:3001/dogs/${id}`);
    setDog(data);
  } catch (error) {
    dispatch(msgNotFound(`There is not dog with id: ${id}`))

    setTimeout(() => {
      dispatch(msgDetail())
    }, "2000")

  //   setTimeout(() => {
  //     history.push('/home')
  //   }, "3000")
  }
};

export const handleChange = (event, dataUpdate, setDataUpdate) => {
  const { name, value } = event.target;
  setDataUpdate({
    ...dataUpdate,
    [name]: value
  })
}

export const handleDelete = async (id, dispatch, history) => {
  try {
    const { data } = await axios.delete(`http://localhost:3001/dogs/${id}`)
    alert("The dog was removed successfully!");

    setTimeout(() => {
      history.push('/home')
    }, "3000")
    
    console.log(data); //para que no crashee
  } catch (error) {
    alert("Unexpected error, please try again later")
  }
};

export const handleEdit = async (id, dispatch, dataUpdate, setView, history) => {
  try {
    const newDataDog = {
      id: id,
      name: dataUpdate.name,
      height: `${dataUpdate.height_min} - ${dataUpdate.height_max}`,
      weight: `${dataUpdate.weight_min} - ${dataUpdate.weight_max}`,
      life_span: `${dataUpdate.life_span_min} - ${dataUpdate.life_span_max} years`,
    };

    const { data } = await axios.put(`http://localhost:3001/dogs/${id}`, newDataDog);

    // console.log(newDataDog.weight);
    alert("Modified successfully!")

    setTimeout(() => {
      history.push('/home')
    }, "2000")
    // dispatch(msgNotFound(data.message))
    // setTimeout(() => {
    //   dispatch(msgDetail())
    //   window.location.reload()
    // }, "1000")
  } catch (error) {
    alert("Unexpected error, please try again later")
  }
};

