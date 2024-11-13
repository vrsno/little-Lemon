import React from 'react';
import './App.css';
import Nav from "./componentes/Nav"

import Main from "./componentes/Main"
import Footer from "./componentes/Footer"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;
