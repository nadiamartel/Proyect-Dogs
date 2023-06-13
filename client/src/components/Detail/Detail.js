import axios from "axios";
import { msgDetail, msgNotFound } from "../../redux/actions";

export const getDog = async (id, setDog, dispatch) => { try {
    const { data } = await axios(`http://localhost:3001/dogs/${id}`);  
    setDog(data);
} catch (error) {
   dispatch(msgNotFound(`There is not dog with id: ${id}`))

   setTimeout(() => {
       dispatch(msgDetail())
   }, "3000")

  //  setTimeout(() => {
  //      navigate('/home')
  //  }, "3000")
  }
};

export const handleChange = (event, dataUpdate, setDataUpdate) => {
  const { name, value } = event.target;
  setDataUpdate({
    ...dataUpdate,
    [name]:value
  })
}

export const handleDelete = async (id, dispatch, navigate) => {
  try {
   const { data } = await axios.delete(`http://localhost:3001/dogs/${id}`)

   dispatch(msgNotFound(data.message))

   setTimeout(() => {
       dispatch(msgDetail())
   }, "3000")

  //  setTimeout(() => {
  //      navigate('/home')
  //  }, "3000")

  } catch (error) {
    console.log(error)
  }
};

export const handleEdit = async (id, dispatch, dataUpdate, setView, navigate) => {
  try {
    const newDataDog = {
      id: id,
      name: dataUpdate.name,
      height: `${dataUpdate.height_min} - ${dataUpdate.height_max}`,
      weight: `${dataUpdate.weight_min} - ${dataUpdate.weight_max}`,
      life_span: `${dataUpdate.life_span_min} - ${dataUpdate.life_span_max} years`,
      image: `${dataUpdate.image}`
  };

    const { data } = await axios.put(`http://localhost:3001/dogs/${id}`, newDataDog);

    dispatch(msgNotFound(data.message))

    setTimeout(() => {
        dispatch(msgDetail())
        window.location.reload()
    }, "1000")
    
  } catch (error) {
    alert("revisar en que momento aparace")
  }
};

