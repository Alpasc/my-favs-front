import React, { Component } from 'react';
import axios from 'axios';
// import Footer from '../Footer';

export default class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    axios
      .get('/film')
      .then(response => response.data)
      .then(film => {
        this.setState({
          films: film.results
        });
      });
  }

  render() {
    const { films } = this.state;
    return (
      <div>
      <div className="movie entete">
        <h1>Mes Films</h1>
      </div>
      <div className='tabTitle'>
        <h2>Ma Filmothèque</h2>
      </div>
      <table className='movieTable'>
        <tr>
          <th className='tabEntry'>Titre</th>
          <th className='tabEntry'>Réalisateur</th>
          <th className='tabEntry'>Acteurs</th>
          <th className='tabEntry'>Genre</th>
          <th className='tabEntry'>Supprimer</th>
        </tr>

        {films.map(film => (
          <tr className='sectionTab'>
            <td className='filmTab' key={film.id}>{film.nom}</td>
            <td className='filmTab' key={film.id}>{film.realisateur}</td>
            <td className='filmTab' key={film.id}>{film.acteurs}</td>
            <td className='filmTab' key={film.id}>{film.genre}</td>
            <td className='filmTab'><button>X</button></td>
          </tr>
        ))}
      </table>
      {/* <Footer /> */}
      </div>
    )
  }
}