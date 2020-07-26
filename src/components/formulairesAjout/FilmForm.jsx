import React, { Component } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';

export default class FilmForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      realisateur: '',
      acteurs: '',
      genre_id:'',
      annee_sortie: '',
      pays: '',
      trailer: '',
      affiche: '',
      synopsis: '',
      commentaire: ''
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    const {
      nom,
      realisateur,
      acteurs,
      genre_id,
      annee_sortie,
      pays,
      trailer,
      affiche,
      synopsis,
      commentaire
    } = this.state;
    e.preventDefault();
    const url = '/film';
    axios
      .post(url, { nom,
        realisateur,
        acteurs,
        genre_id,
        annee_sortie,
        pays,
        trailer,
        affiche,
        synopsis,
        commentaire })
      .then((res) => res.data)
      .then((res) => {
        Swal.fire({
          title: 'Chouette !',
          titleColor: 'rgb(65, 240, 240)',
          text: 'Un nouveau film culte à voir et revoir !',
          imageUrl: 'https://zupimages.net/up/20/30/np28.png',
          imageWidth: 200,
          imageHeight: 200,
          background: 'rgb(30, 151, 151)',
          html: '<a href="/film">Retour à ma liste</a>',
          showCloseButton: true,
          confirmButtonText: 'Ajouter un autre film !',
          confirmButtonColor: 'rgb(22, 207, 207'
        });
        this.setState({
          nom: '',
          realisateur: '',
          acteurs: '',
          genre_id:'',
          annee_sortie: '',
          pays: '',
          trailer: '',
          affiche: '',
          synopsis: '',
          commentaire: ''
        })
      })
      .catch(event => {
        Swal.fire({
          position: 'top-end',
          imageUrl: 'https://zupimages.net/up/20/30/66lh.png',
          imageWidth: 200,
          imageHeight: 200,
          background: 'rgb(30, 151, 151)',
          text: 'Remplis les 5 premiers champs',
          showConfirmButton: false,
          timer: 1800
        })
      });
  }

  render() {
    const {
      nom,
      realisateur,
      acteurs,
      genre_id,
      annee_sortie,
      pays,
      trailer,
      affiche,
      synopsis,
      commentaire
    } = this.state;
    return (
      <div className='filmForm'>
        <h2>Ajouter un nouveau film culte</h2>
        <form onSubmit={this.submitForm}>
          <fieldset>
          <legend>Remplis au mois les cinq premiers champs</legend>
          <div className='form-data'>
            <label htmlFor='nom'>Titre</label>
            <input
              ref={input => this.nom = input}
              type='text'
              name='nom'
              onChange={this.onChange}
              value={nom}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='realisateur'>Réalisateur</label>
            <input
              type='text'
              name='realisateur'
              onChange={this.onChange}
              value={realisateur}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='acteurs'>Acteurs</label>
            <input
              type='text'
              name='acteurs'
              onChange={this.onChange}
              value={acteurs}
              />
          </div>
          <div className="form-data">
            <label>Genre</label>
            <select type='submit' name='genre_id' onChange={this.onChange} value={genre_id}>
              <option value=''></option>
              <option value='1'>Action</option>
              <option value='2'>Aventure</option>
              <option value='3'>Biopic</option>
              <option value='4'>Catastrophe</option>
              <option value='5'>Comédie</option>
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
          <div className='form-data'>
            <label htmlFor='annee_sortie'>Année de sortie</label>
            <input
              type='num'
              name='annee_sortie'
              onChange={this.onChange}
              value={annee_sortie}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='pays'>Pays de production</label>
            <input
              type='text'
              name='pays'
              onChange={this.onChange}
              value={pays}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='trailer'>Bande annonce (Youtube)</label>
            <input
              type='url'
              name='trailer'
              onChange={this.onChange}
              value={trailer}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='affiche'>Affiche</label>
            <input
              type='url'
              name='affiche'
              onChange={this.onChange}
              value={affiche}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='synopsis'>Synopsis</label>
            <input
              type='text'
              name='synopsis'
              onChange={this.onChange}
              value={synopsis}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='commentaire'>Commentaire</label>
            <input
              type='text'
              name='commentaire'
              onChange={this.onChange}
              value={commentaire}
              />
          </div>
          <hr />
          <div className="formBtn">
            {/* <Link to="/film" style={{ textDecoration: 'none' }}> */}
              <input type="submit" value="Envoyer !" />
            {/* </Link> */}
            <Link to="/film" style={{ textDecoration: 'none' }}>
            <button type='button'>Fini !</button>
            </Link>
          </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
