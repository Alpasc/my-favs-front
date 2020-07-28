import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import FilmModale from '../modales/FilmModale';
import { waitForElement } from '@testing-library/react';
import Swal from 'sweetalert2';

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
    const swalButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalButtons.fire({
      title: 'On efface vraiment ?',
      text: "Il n'y aura pas de retour en arrière possible...",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprime !',
      cancelButtonText: 'Non, annule !',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalButtons.fire(
          'Effacé !',
          'Ton film a été effacé !',
          'success'
        )
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
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalButtons.fire(
          'Annulé',
          'Ouf ! tout va bien !'
        )
      }
    })
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
        <Link to="/" style={{ textDecoration: 'none' }}><p className="retour txtDeco">Retour</p></Link>
        </div>
        <div className="ajoutFilm">
          <Link to="/ajout-film" style={{ textDecoration: 'none' }}>
            <h4 className="txtDeco">Ajouter un film</h4>
          </Link>
          {/* <Link to="/chercher-film" style={{ textDecoration: 'none' }}>
            <h4>Rechercher un film</h4>
          </Link> */}
            <select type='submit' name='genre_id' onChange={this.genreFilter} value={this.state.genre}>
              <option value=''>Afficher par genre</option>
              <option value='Action'>Action</option>
              <option value='Aventure'>Aventure</option>
              <option value='Biopic'>Biopic</option>
              <option value='Catastrophe'>Catastrophe</option>
              <option value='Comédie'>Comédie</option>
              <option value='Comédie Musicale'>Comédie Musicale</option>
              <option value='Comédie Romantique'>Comédie Romantique</option>
              <option value='Documentaire'>Documentaire</option>
              <option value='Drame'>Drame</option>
              <option value='Espionnage'>Espionnage</option>
              <option value='Fantastique'>Fantastique</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Film d&apos;animation'>Film d'animation</option>
              <option value='Guerre'>Guerre</option>
              <option value='Historique'>Historique</option>
              <option value='Horreur'>Horreur</option>
              <option value='Policier'>Policier</option>
              <option value='Science-Fiction'>Science-Fiction</option>
              <option value='Super-Héros'>Super-Héros</option>
              <option value='Thriller'>Thriller</option>
              <option value='Werstern'>Werstern</option>
            </select>
        </div>
        <div className='cardsContainer'>
        {films.filter(test => test.genre.toUpperCase().endsWith(newGenre)).map(film => (
          <div className='filmCard'>
            <h3 className='afficheModale cardTitle' key={film.id} onClick={() => this.filmClick(film)}>{film.nom}</h3>
            <h4 className='real cardDetail'>{film.realisateur}</h4>
            <p className='cardDetail'>{film.acteurs}</p>
            <p className='cardDetail'>{film.genre}</p>
            {film.affiche === "" ? 
            (<img className="thumbnailRandom cardDetail" src="https://zupimages.net/up/20/30/ygk4.jpg" alt="bah, elle est où l'affiche ?"/>) : 
              (<img className="thumbnail cardDetail" src={film.affiche} alt="affiche"/>)}
            <br />
            {/* <button className='supp' type="button" onClick={() => this.updateMovie(film.id)}>Modifier</button>
            <br /> */}
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