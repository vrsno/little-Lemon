import React, { useState } from "react";

const BookingForm = (props) => {
 
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const formData = {
      occasion,
      guests,
      date,
      time
    };

    // Pasamos los datos del formulario al método submitForm del padre
    props.submitForm(formData);
  };

  // Maneja el cambio en la fecha y actualiza el estado
  const handleDateChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e.target.value); // Actualiza el estado en el padre si es necesario
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="book-date">Choose Date</label>
            <input
              id="book-date"
              type="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>

          <div>
            <label htmlFor="book-time">Choose Time</label>
            <select
              id="book-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select a Time</option>
              {props.availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="book-guests">Number of Guests</label>
            <input
              id="book-guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              max="10"
              placeholder="0"
              required
            />
          </div>

          <div>
            <label htmlFor="book-occasion">Occasion</label>
            <select
              id="book-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">Select an Option</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div>
            <input
              aria-label="On Click"
              type="submit"
              value="Make Your Reservation"
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
