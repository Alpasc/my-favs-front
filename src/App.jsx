import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Accueil from './components/Accueil';
import Footer from './components/Footer';
import FilmsList from './components/bibliotheques/FilmsList';
import BooksList from './components/bibliotheques/BooksList';
import SeriesList from './components/bibliotheques/SeriesList';
import PhotosList from './components/bibliotheques/PhotosList';
import MusicsList from './components/bibliotheques/MusicsList';
import GamesList from './components/bibliotheques/GamesList';
import FilmForm from './components/formulairesAjout/FilmForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/accueil">
            <Header />
            <Accueil />
            <Footer />
          </Route>
            <Route path='/film' component={FilmsList} />

            <Route path='/livre' component={BooksList} />

            <Route path='/serie' component={SeriesList} />

            <Route path='/photo' component={PhotosList} />

            <Route path='/musique' component={MusicsList} />

            <Route path='/jeuvideo' component={GamesList} />

            <Route path='/ajout-film' component={FilmForm} />
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
