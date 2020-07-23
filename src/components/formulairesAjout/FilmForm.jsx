import React, { Component } from 'react';
import axios from 'axios';

export default class FilmForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      realisateur: '',
      acteurs: '',
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
    e.preventDefault();
    const url = '/film';
    axios
      .post(url, this.state)
      .then(res => res.data)
      .then(res => {
        alert(`Chouette ! Un film de plus à voir et revoir !`);
      })
      .catch(event => {
        alert(`Erreur lors de l'ajout du film`);
      });
  }

  render() {
    const {
      nom,
      realisateur,
      acteurs,
      genre,
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
          <legend>Mets le plus d'info possible !</legend>
          <div className='form-data'>
            <label htmlFor='nom'>Titre</label>
            <input
              type='text'
              id='nom'
              name='nom'
              onChange={this.onChange}
              value={nom}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='realisateur'>Réalisateur</label>
            <input
              type='text'
              id='realisateur'
              name='realisateur'
              onChange={this.onChange}
              value={realisateur}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='acteurs'>Acteurs</label>
            <input
              type='text'
              id='acteurs'
              name='acteurs'
              onChange={this.onChange}
              value={acteurs}
              />
          </div>
          <div className="form-data">
            <label>Genre</label>
            <select type='submit' name='genre' onChange={this.onChange} value={genre}>
              <option valeur='10'>Action</option>
              <option valeur='11'>Aventure</option>
              <option valeur='12'>Biopic</option>
              <option valeur='13'>Catastrophe</option>
              <option valeur='14'>Comédie</option>
              <option valeur='15'>Comédie Musicale</option>
              <option valeur='16'>Comédie Romantique</option>
              <option valeur='17'>Documentaire</option>
              <option valeur='18'>Drame</option>
              <option valeur='19'>Espionnage</option>
              <option valeur='20'>Fantastique</option>
              <option valeur='21'>Fantasy</option>
              <option valeur='22'>Guerre</option>
              <option valeur='23'>Historique</option>
              <option valeur='24'>Horreur</option>
              <option valeur='25'>Policier</option>
              <option valeur='26'>Science-Fiction</option>
              <option valeur='27'>Super-Héros</option>
              <option valeur='28'>Thriller</option>
              <option valeur='29'>Werstern</option>
            </select>
          </div>
          <div className='form-data'>
            <label htmlFor='annee_sortie'>Année de sortie</label>
            <input
              type='num'
              id='annee_sortie'
              name='annee_sortie'
              onChange={this.onChange}
              value={annee_sortie}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='pays'>Pays de production</label>
            <input
              type='text'
              id='pays'
              name='pays'
              onChange={this.onChange}
              value={pays}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='trailer'>Bande annonce (Youtube)</label>
            <input
              type='url'
              id='trailer'
              name='trailer'
              onChange={this.onChange}
              value={trailer}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='affiche'>Affiche</label>
            <input
              type='url'
              id='affiche'
              name='affiche'
              onChange={this.onChange}
              value={affiche}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='synopsis'>Synopsis</label>
            <input
              type='textarea'
              id='synopsis'
              name='synopsis'
              onChange={this.onChange}
              value={synopsis}
              />
          </div>
          <div className='form-data'>
            <label htmlFor='commentaire'>Commentaire</label>
            <input
              type='textarea'
              id='commentaire'
              name='commentaire'
              onChange={this.onChange}
              value={commentaire}
              />
          </div>
          <hr />
          <div>
            <input type="submit" value="Envoyer !" />
          </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
