import React, { Component } from 'react';
import axios from 'axios';
// import Footer from '../Footer';
import FilmModale from '../modales/FilmModale';

export default class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      displayModale: false,
      filmSelected: null
    };
    this.filmClick = this.filmClick.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
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

  filmClick(infoFilm) {
    const { displayModale } = this.state;
    this.setState({ displayModale: !displayModale});
    this.setState({filmSelected: infoFilm});
  }

  deleteMovie(id) {
    axios
      .delete(`/film/${id}`)
      .then(response => response.data)
      .then(film => {
        console.log(film);
        axios
        .get('/film')
        .then(response => response.data)
        .then(film => {
          this.setState({
            films: film.results
          });
        });
      }) 
      .catch(error => console.log(error))
  }

  render() {
    const { films, displayModale, filmSelected } = this.state;
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
          {/* <th className='tabEntry'>Genre</th> */}
          <th className='tabEntry'>Affiche</th>
          <th className='tabEntry'>Supprimer</th>
        </tr>

        {films.map(film => (
          <tr className='sectionTab'>
            <td className='filmTab afficheModale' key={film.id} onClick={() => this.filmClick(film)}>{film.nom}</td>
            <td className='filmTab real' key={film.id}>{film.realisateur}</td>
            <td className='filmTab acteur' key={film.id}>{film.acteurs}</td>
            <td className='filmTab' key={film.id}><img className="thumbnail" src={film.affiche} alt="affiche du film" /></td>
            {/* <td className='filmTab genre' key={film.id}>{film.genre}</td> */}
            <td className='filmTab supprimer'><button key={film.id} type="button" onClick={() => this.deleteMovie(film.id)}>X</button></td>
          </tr>
        ))}
      </table>
      <div className="ajoutFilm">
        <h4><a>Ajouter un film</a></h4>
        <h4><a>Rechercher un film</a></h4>
      </div>
      {displayModale ? <FilmModale film={filmSelected} filmClick={this.filmClick} /> : null}
      {/* <Footer /> */}
      </div>
    )
  }
}