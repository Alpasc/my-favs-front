import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Accueil from './components/Accueil';
import Footer from './components/Footer';
import FilmCards from './components/bibliotheques/FilmCards';
import BookCards from './components/bibliotheques/BookCards';
import SerieCards from './components/bibliotheques/SerieCards';
import PhotoCards from './components/bibliotheques/PhotoCards';
import MusicCards from './components/bibliotheques/MusicCards';
import GameCards from './components/bibliotheques/GameCards';
import FilmForm from './components/formulairesAjout/FilmForm';
import ModifFilm from './components/modifications/ModifFilm';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Accueil />
            <Footer />
          </Route>
            <Route path='/film' component={FilmCards} />

            <Route path='/livre' component={BookCards} />

            <Route path='/serie' component={SerieCards} />

            <Route path='/photo' component={PhotoCards} />

            <Route path='/musique' component={MusicCards} />

            <Route path='/jeuvideo' component={GameCards} />

            <Route path='/ajout-film' component={FilmForm} />

            <Route path='/modi-film' component={ModifFilm}/>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
