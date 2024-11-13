import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./componentes/Main";  // El componente que contiene la lógica de tus rutas
import Header from "./componentes/Header";
import Booking from "./componentes/Booking";
import ConfirmedBooking from "./componentes/ConfirmedBooking";

const App = () => {
  return (
    <Router> {/* Asegúrate de envolver toda tu aplicación con Router */}
      <div>
        <Header />
        <Routes>
          {/* Define las rutas principales aquí */}
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
