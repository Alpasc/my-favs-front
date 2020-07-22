import React, { Component } from 'react';
import Card from './Card';
import '../index.css';

export default class CardsList extends Component {

state = {
  cards: [
    {
      id:1,
      nom: "Mes Films",
      pic: 'https://zupimages.net/up/20/30/hp44.jpg',
      desc: 'Star Wars'
    },
    {
      id:2,
      nom: "Mes Séries",
      pic: 'https://zupimages.net/up/20/30/2gc6.png',
      desc:'Friends'
    },
    {
      id:3,
      nom: "Mes Musiques",
      pic: 'https://zupimages.net/up/20/30/5ffq.png',
      desc: 'égaliseur'
    },
    {
      id:4,
      nom: "Mes Photos",
      pic: 'https://zupimages.net/up/20/30/czup.jpg',
      desc: 'photographe'
    },
    {
      id:5,
      nom: "Mes Livres",
      pic: 'https://zupimages.net/up/20/30/2abo.jpg',
      desc: 'livre'
    },
    {
      id:6,
      nom: "Mes Jeux Vidéos",
      pic: 'https://zupimages.net/up/20/30/8jfy.jpg',
      desc: 'Mario Bros'
    }
  
]
}

  render() {
    return (
      <div className='cardList'>
        {this.state.cards.map(card =>(
          <Card
            key={card.id}
            nom={card.nom}
            pic={card.pic}
            desc={card.desc}
            />
        ))}
      </div>
    )
  }
}
