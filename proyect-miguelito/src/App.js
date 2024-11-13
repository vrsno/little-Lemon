import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./componentes/Main";  // El componente que contiene la lógica de tus rutas
import Header from "./componentes/Header";
import Booking from "./componentes/Booking";
import ConfirmedBooking from "./componentes/ConfirmedBooking";
import Footer from "./componentes/Footer";
import Nav from "./componentes/Nav";
import "./App.css"
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />  {/* Barra de navegación */}
        <Header />  {/* Encabezado */}
        <Routes>  {/* Rutas de la aplicación */}
          <Route path="/" element={<Main />} />  {/* Ruta principal */}
          <Route path="/booking" element={<Booking />} />  {/* Ruta para el formulario de reserva */}
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
