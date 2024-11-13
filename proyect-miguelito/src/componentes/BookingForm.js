import React, { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({
      occasion,
      guests,
      date,
      times,
    });
  };

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
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {Array.isArray(props.availableTimes) &&
                  props.availableTimes.map((availableTime, index) => (
                    <option key={index} value={availableTime}>
                      {availableTime}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                placeholder={0}
                max={10}
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
