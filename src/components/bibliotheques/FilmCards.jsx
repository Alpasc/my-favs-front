import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
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
    // this.filterMovies = this.filterMovies.bind(this);
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

  // filterMovies(genre) {
  //   const filter = films.filter(film => film.genre);
  //   filter.map
  // }

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
          // if (affiche === null) => {
          //   affiche === 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carousell.ph%2Fp%2Flooking-for-186410187%2F&psig=AOvVaw0WERJBgbGS2oyAUYgNlkWE&ust=1595689241949000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPil1eeT5uoCFQAAAAAdAAAAABAD';
          // }
        });
      }) 
      .catch(error => console.log(error))
  }

  render() {
    const { films, displayModale, filmSelected } = this.state;
    return (
      <div className="container">
      <div className="bibliHeader">
        <div className="movie entete">
          <h1 className='listTitle'>Ma Filmothèque</h1>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}><p className="retour">Retour</p></Link>
        </div>
        <div className="ajoutFilm">
          <Link to="/ajout-film" style={{ textDecoration: 'none' }}>
            <h4>Ajouter un film</h4>
          </Link>
          <Link to="/chercher-film" style={{ textDecoration: 'none' }}>
            <h4>Rechercher un film</h4>
          </Link>
          <h4 onClick={() => this.filterMovies()}>Trier par genre</h4>
        </div>
        <div className='cardsContainer'>
        {films.map(film => (
          <div className='filmCard ombreout'>
            <h3 className='afficheModale cardTitle' key={film.id} onClick={() => this.filmClick(film)}>{film.nom}</h3>
            <h4 className='real cardDetail'>{film.realisateur}</h4>
            <p className='cardDetail'>{film.acteurs}</p>
            <p className='cardDetail'>{film.genre}</p>
            <img className="thumbnail cardDetail" src={film.affiche} alt="affiche du film"/>
            <br />
            <button className='supp' key={film.id} type="button" onClick={() => this.updateMovie(film.id)}>Modifier</button>
            <br />
            <button className='supp' key={film.id} type="button" onClick={() => this.deleteMovie(film.id)}>Supprimer</button>
          </div>
        ))}
        </div>
        {displayModale ? <FilmModale film={filmSelected} filmClick={this.filmClick} /> : null}
        <Footer />
      </div>
    )
  }
}