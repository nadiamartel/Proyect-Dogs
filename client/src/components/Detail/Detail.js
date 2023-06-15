import axios from "axios";

export const getDog = async (id, setDog, history) => {
  try {
    const { data } = await axios(`http://localhost:3001/dogs/${id}`);
    setDog(data);
  } catch (error) {
    alert(`There is not dog with id: ${id}`)

    setTimeout(() => {
      history.push('/home')
    }, "3000")
  }
};

export const handleChange = (event, dataUpdate, setDataUpdate) => {
  const { name, value } = event.target;
  setDataUpdate({
    ...dataUpdate,
    [name]: value
  })
}

export const handleDelete = async (id, history) => {
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

export const handleEdit = async (id, dataUpdate, history) => {
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
    console.log(data);
    alert("Modified successfully!")

    setTimeout(() => {
      history.push('/home')
    }, "3000")

  } catch (error) {
    alert("Unexpected error, please try again later")
  }
};

