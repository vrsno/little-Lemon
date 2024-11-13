import React from "react";

const ConfirmedBooking = () => {
  return (
    <main>
      <section>
        <h1>Booking has been confirmed!</h1>
        <p>Your reservation has been successfully made.</p>
        <button onClick={() => window.location.href = "/"}>Go Back to Homepage</button>
      </section>
    </main>
  );
};

export default ConfirmedBooking;
