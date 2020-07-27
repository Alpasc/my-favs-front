import React from 'react';
import ReactPlayer from 'react-player';
import './modale.css';

export default function FilmModale({ film, filmClick, props}) {
  return (
    <div className="modale border position padding layout1 scale-in-hor-center">
      <div className="close">
        <button type="submit" className="" onClick={() => filmClick()}>
        [X]
        </button>
      </div>
      <div>
        <h2 className="color">{film.nom} en détail</h2>
      </div>
      <div className="tabContainer">
      <img src={film.affiche} alt="affiche du film" className="poster" />
      <tbody className="tabBody">
        <div className="element">
          <h4>Réalisateur :</h4>
          <p>{film.realisateur}</p>
        </div>
        <div className="element">
          <h4>Acteurs :</h4>
          <p>{film.acteurs}</p>
        </div>
        <div className="element">
          <h4>Année de de sortie :</h4>
          <p>{film.annee_sortie}</p>
        </div>
        <div className="element">
          <h4>Pays :</h4>
          <p>{film.pays}</p>
        </div>
        <div className="element">
          <h4>Synopsis :</h4>
          <p>{film.synopsis}</p>
        </div>
        <div className="element">
          <h4>Commentaire :</h4>
          <p>{film.commentaire}</p>
        </div>
      </tbody>
      </div>
      <div className="video">
      <h4>Bande annonce de {film.nom}</h4>
        <ReactPlayer url={film.trailer} className="player" /*width='100%' height='100%'*/ /*playing*/ />
      </div>
    </div>
  )
}
