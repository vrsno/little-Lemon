import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/nav'
import Main from "./componentes/Main'
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
