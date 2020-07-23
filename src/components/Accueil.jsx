import React, { Component } from 'react';

export default class Accueil extends Component {
  render() {
    return (
      <div className='cardList'>
      <div className='card card1 ombreout'>
        <h3 className='title'>Mes films</h3>
        <img src='https://zupimages.net/up/20/30/hp44.jpg' alt='cinema' />
        <p className='description'></p>
      </div>
      <div className='card card2 ombreout'>
        <h3 className='title'>Mes séries</h3>
        <img src='https://zupimages.net/up/20/30/2gc6.png' alt='' />
        <p className='description'></p>
      </div>
      <div className='card card3 ombreout'>
        <h3 className='title'>Mes musiques</h3>
        <img src='https://zupimages.net/up/20/30/5ffq.png' alt='' />
        <p className='description'></p>
      </div>
      <div className='card card4 ombreout'>
        <h3 className='title'>Mes photos</h3>
        <img src='https://zupimages.net/up/20/30/czup.jpg' alt='' />
        <p className='description'></p>
      </div>
      <div className='card card5 ombreout'>
        <h3 className='title'>Mes livres</h3>
        <img src='https://zupimages.net/up/20/30/2abo.jpg' alt='' />
        <p className='description'></p>
      </div>
      <div className='card card6 ombreout'>
        <h3 className='title'>Mes jeux vidéos</h3>
        <img src='https://zupimages.net/up/20/30/8jfy.jpg' alt='' />
        <p className='description'></p>
      </div>
    </div>
    )
  }
}
