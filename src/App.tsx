import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Favorites from './pages/Favorites';
import Movies from './pages/Movies';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/details/:imdbID">
              <Details />
            </Route>
          </Switch>
        </Container>
      </div>

      <Navbar />
    </BrowserRouter>
  );
}

export default App;
