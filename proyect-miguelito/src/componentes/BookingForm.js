import React, { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({
      occasion,
      guests,
      date,
      times,
    });
  };

  // Función que maneja el cambio de fecha
  const handleChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    // Aquí estamos llamando a `dispatch` con la nueva fecha
    if (props.dispatch) {
      props.dispatch(newDate); // Llamamos a dispatch con la nueva fecha
    } else {
      console.error("dispatch is not a function");
    }
  };

  console.log("availableTimes:", props.availableTimes); // Verifica que los tiempos estén correctos

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={handleChange} // Usamos handleChange para actualizar la fecha
                type="date"
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)} // Establecemos el tiempo seleccionado
                required
              >
                <option value="">Select a Time</option>
                {/* Verificamos que 'props.availableTimes' sea un array y tiene valores */}
                {Array.isArray(props.availableTimes) && props.availableTimes.length > 0 ? (
                  props.availableTimes.map((availableTime, index) => (
                    <option key={index} value={availableTime}>
                      {availableTime} {/* Muestra cada hora como opción */}
                    </option>
                  ))
                ) : (
                  <option disabled>No available times</option> // Si no hay tiempos disponibles, muestra un mensaje
                )}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)} // Actualiza el número de invitados
                type="number"
                placeholder="0"
                max="10"
                required
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)} // Actualiza la ocasión seleccionada
                required
              >
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <div>
              <input aria-label="On Click" type="submit" value="Make Your Reservation" />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
