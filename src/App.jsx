import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsList from './components/CardsList';


function App() {
  return (
    <div className="App">
      <Header />
      <CardsList />
      {/* <div className='cardList'>
        <div className='card card1'>
          <h3 className='title'>Mes films</h3>
          <img src='https://zupimages.net/up/20/30/hp44.jpg' alt='cinema' />
          <p className='description'></p>
        </div>
        <div className='card card2'>
          <h3 className='title'>Mes séries</h3>
          <img src='https://zupimages.net/up/20/30/2gc6.png' alt='' />
          <p className='description'></p>
        </div>
        <div className='card card3'>
          <h3 className='title'>Mes musiques</h3>
          <img src='https://zupimages.net/up/20/30/5ffq.png' alt='' />
          <p className='description'></p>
        </div>
        <div className='card card4'>
          <h3 className='title'>Mes photos</h3>
          <img src='https://zupimages.net/up/20/30/czup.jpg' alt='' />
          <p className='description'></p>
        </div>
        <div className='card card5'>
          <h3 className='title'>Mes livres</h3>
          <img src='https://zupimages.net/up/20/30/2abo.jpg' alt='' />
          <p className='description'></p>
        </div>
        <div className='card card6'>
          <h3 className='title'>Mes jeux vidéos</h3>
          <img src='https://zupimages.net/up/20/30/8jfy.jpg' alt='' />
          <p className='description'></p>
        </div>
      </div> */}
      <hr className='lign' />
      <footer>
        <p className='signature'>Créé par Alpasc</p>
        <p className="year">2020</p>
      </footer>
    </div>
  );
}

export default App;
