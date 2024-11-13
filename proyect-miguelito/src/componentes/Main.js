import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Booking from "./Booking"; // Asegúrate de que la ruta sea correcta

const Main = () => {
  // Función para generar números aleatorios
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  // Simula la llamada a una API para obtener los horarios disponibles
  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  // Reducer para manejar el estado de availableTimes
  const initialState = { availableTimes: fetchAPI(new Date()) };

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  function submitForm(formData) {
    console.log("Form submitted:", formData);
    navigate("/confirmed");
  }

  return (
    <main>
      <Booking
        availableTimes={state.availableTimes} // Pasamos los tiempos disponibles
        dispatch={dispatch} // Pasamos la función dispatch
        submitForm={submitForm}
      />
    </main>
  );
};

export default Main;
