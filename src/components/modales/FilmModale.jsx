import React from 'react';
import ReactPlayer from 'react-player';
import './modale.css';

export default function FilmModale({ film, filmClick }) {
  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <td>
              <h2 className="color">{film.nom} en détail</h2>
            </td>
            <td>
              <button type="submit" className="" onClick={() => filmClick()}>
                Fermer [X]
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom :</td>
            <td>{film.nom}</td>
          </tr>
          <tr>
            <td>Réalisateur :</td>
            <td>{film.realisateur}</td>
          </tr>
          <tr>
            <td>Acteurs :</td>
            <td>{film.acteurs}</td>
          </tr>
          <tr>
            <td>Année de de sortie :</td>
            <td>{film.annee_sortie}</td>
          </tr>
          <tr>
            <td>Pays :</td>
            <td>{film.pays}</td>
          </tr>
          <tr>
            <td>Synopsis :</td>
            <td>{film.synopsis}</td>
          </tr>
          <tr>
            <td>Commentaire :</td>
            <td>{film.commentaire}</td>
          </tr>
        </tbody>
      </table>
      <img src={film.affiche} alt="affiche du film" className="poster" />
      <div className="video">
        <h4>Bande annonce de {film.nom}</h4>
          <ReactPlayer url={film.trailer} />
        </div>
    </div>
  )
}
