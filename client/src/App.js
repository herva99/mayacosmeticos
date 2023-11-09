import { Route, Routes } from "react-router-dom";
import Home from './view/home/home';
import Form from "./componentes/formulario/form";
import Detail from "./componentes/detailCard/detailCard";
import NavBar from "./view/navbar/navbar";
import Create from "./componentes/createProduct/create";
import Landing from "./view/landing/landing";
import Footer from "./view/footer/footer";
import './App.css'; // Importar el archivo de estilos CSS para App

function App() {
  return (
    <div className="app-container">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/createProduct" element={<Create />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
