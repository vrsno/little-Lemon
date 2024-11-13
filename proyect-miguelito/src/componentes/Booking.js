import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <BookingForm
      availableTimes={props.availableTimes} // Aquí pasamos el array de tiempos
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
};

export default Booking;
