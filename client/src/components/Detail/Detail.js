import axios from "axios";
import Swal from "sweetalert2";


export const getDog = async (id, setDog, history) => {
  try {
    const { data } = await axios(`http://localhost:3001/dogs/${id}`);
    setDog(data);
  } catch (error) {
    Swal.fire({
      title: `There is not dog with id: ${id}`,
      icon: "error",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      backdrop: true
    })
    // alert(`There is not dog with id: ${id}`)

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
    Swal.fire({
      text: "The dog was removed successfully!",
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false

    })

    setTimeout(() => {
      history.push('/home')
    }, "3000")

    console.log(data); //para que no crashee
  } catch (error) {
    Swal.fire({
      title: "Unexpected error, please try again later",
      icon: "error",
      timer: 3000,
    })
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
    Swal.fire({
      text: "Modified successfully!",
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false
    })

    setTimeout(() => {
      history.push('/home')
    }, "3000")

  } catch (error) {
    Swal.fire({
      title: "Unexpected error, please try again later",
      icon: "error",
      timer: 3000,
    })
  }
};

