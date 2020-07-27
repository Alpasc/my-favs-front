import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Accueil extends Component {
  render() {
    return (
      <div className='cardList'>
      <Link to='/film' style={{ textDecoration: 'none' }}>
        <div className='card card1 txtDeco'>
          <h3 className='title'>Mes films</h3>
          <img src='https://zupimages.net/up/20/30/hp44.jpg' alt='cinema' />
          <p className='description'></p>
        </div>
      </Link>
      <Link to='/serie' style={{ textDecoration: 'none' }}>
      <div className='card card2 txtDeco'>
        <h3 className='title'>Mes séries</h3>
        <img src='https://zupimages.net/up/20/30/2gc6.png' alt='' />
        <p className='description'></p>
      </div>
      </Link>
      <Link to='/musique' style={{ textDecoration: 'none' }}>
      <div className='card card3 txtDeco'>
        <h3 className='title'>Mes musiques</h3>
        <img src='https://zupimages.net/up/20/30/5ffq.png' alt='' />
        <p className='description'></p>
      </div>
      </Link>
      <Link to='/photo' style={{ textDecoration: 'none' }}>
      <div className='card card4 txtDeco'>
        <h3 className='title'>Mes photos</h3>
        <img src='https://zupimages.net/up/20/30/czup.jpg' alt='' />
        <p className='description'></p>
      </div>
      </Link>
      <Link to='/livre' style={{ textDecoration: 'none' }}>
      <div className='card card5 txtDeco'>
        <h3 className='title'>Mes livres</h3>
        <img src='https://zupimages.net/up/20/30/2abo.jpg' alt='' />
        <p className='description'></p>
      </div>
      </Link>
      <Link to='/jeuvideo' style={{ textDecoration: 'none' }}>
      <div className='card card6 txtDeco'>
        <h3 className='title'>Mes jeux vidéos</h3>
        <img src='https://zupimages.net/up/20/30/8jfy.jpg' alt='' />
        <p className='description'></p>
      </div>
      </Link>
    </div>
    )
  }
}
