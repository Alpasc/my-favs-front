import React from 'react';

export default function FilmModale({ film, filmClick }) {
  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <td>
              <h2 className="color">Mon film en détail</h2>
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
      <img src={film.affiche} alt="" />
      <div className="video">
        <iframe src={film.trailer} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title={film.name}></iframe>
      </div>
    </div>
  )
}
