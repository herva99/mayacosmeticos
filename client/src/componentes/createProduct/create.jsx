import axios from "axios";
import { useState } from "react";

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    cost: 0,
    img: "",
  });

  const [responseMessage, setResponseMessage] = useState(""); // Para mostrar un mensaje de respuesta

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/post", form)
      .then((res) => {
        setResponseMessage("Producto creado con éxito.");
        setForm({
            title: "",
            subtitle: "",
            cost: "",
            img: "",
        })
      })
      .catch((err) => {
        setResponseMessage("Error al crear el producto."); 
        console.error(err);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Crear Producto:</h1>
      {responseMessage && <p>{responseMessage}</p>}
      <div>
        <label>Title: </label>
        <input type="text" value={form.title} name="title" onChange={changeHandler} />
      </div>
      <div>
        <label>Subtitle: </label>
        <input type="text" value={form.subtitle} name="subtitle" onChange={changeHandler} />
      </div>
      <div>
        <label>Cost: </label>
        <input type="text" value={form.cost} name="cost" onChange={changeHandler} />
      </div>
      <div>
        <label>Imagen: </label>
        <input type="text" value={form.img} name="img" onChange={changeHandler} />
      </div>
      <button type="submit">Crear</button>
    </form>
  );
}
