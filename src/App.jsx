import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Accueil from './components/Accueil';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Footer />
    </div>
  );
}

export default App;
