import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import FilmModale from '../modales/FilmModale';

export default class FilmCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      displayModale: false,
      filmSelected: null,
      visible: false,
      genre: ''
    };
    this.filmClick = this.filmClick.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
  }

  // montre = () => {
  //   this.setState({
  //     visible: true
  //   })
  // }

  // cache = () => {
  //   this.setState({
  //     visible: false
  //   })
  // }

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

    genreFilter (e) {
     this.setState({
       genre: e.target.value,
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
          // if (affiche === null) => {
          //   affiche === 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carousell.ph%2Fp%2Flooking-for-186410187%2F&psig=AOvVaw0WERJBgbGS2oyAUYgNlkWE&ust=1595689241949000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPil1eeT5uoCFQAAAAAdAAAAABAD';
          // }
        });
      }) 
      .catch(error => console.log(error))
  }

  render() {
    const { films, displayModale, filmSelected, genre } = this.state;
    let newGenre = genre.toUpperCase();
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
            <select type='submit' name='genre_id' onChange={this.genreFilter} value={this.state.genre}>
              <option value=''>Afficher par genre</option>
              <option value='1'>Action</option>
              <option value='2'>Aventure</option>
              <option value='3'>Biopic</option>
              <option value='4'>Catastrophe</option>
              <option value='Comedie'>Comédie</option>
              <option value='6'>Comédie Musicale</option>
              <option value='7'>Comédie Romantique</option>
              <option value='8'>Documentaire</option>
              <option value='9'>Drame</option>
              <option value='10'>Espionnage</option>
              <option value='11'>Fantastique</option>
              <option value='12'>Fantasy</option>
              <option value='13'>Guerre</option>
              <option value='14'>Historique</option>
              <option value='15'>Horreur</option>
              <option value='16'>Policier</option>
              <option value='17'>Science-Fiction</option>
              <option value='18'>Super-Héros</option>
              <option value='19'>Thriller</option>
              <option value='20'>Werstern</option>
            </select>
        </div>
        <div className='cardsContainer'>
        {films.filter(test => test.genre.toUpperCase().startsWith(newGenre, 0)).map(film => (
          <div className='filmCard ombreout'>
            <h3 className='afficheModale cardTitle' key={film.id} onClick={() => this.filmClick(film)}>{film.nom}</h3>
            <h4 className='real cardDetail'>{film.realisateur}</h4>
            <p className='cardDetail'>{film.acteurs}</p>
            <p className='cardDetail'>{film.genre}</p>
            {film.affiche === "" ? 
            (<img className="thumbnail cardDetail" src="https://via.placeholder.com/150" alt="bah, elle est où l'affiche ?"/>) : 
              (<img className="thumbnail cardDetail" src={film.affiche} alt="affiche"/>)}
            <br />
            <button className='supp' type="button" onClick={() => this.updateMovie(film.id)}>Modifier</button>
            <br />
            <button className='supp' type="button" onClick={() => this.deleteMovie(film.id)}>Supprimer</button>
          </div>
        ))}
        </div>
        {displayModale ? <FilmModale film={filmSelected} filmClick={this.filmClick} /> : null}
        <Footer />
      </div>
    )
  }
}