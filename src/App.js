import { Route, Switch } from 'react-router';
import './App.scss';
import NavBar from './Components/NavBar';
import AboutPage from './Pages/AboutPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProtfolioPage from './Pages/ProtfolioPage';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/protfolios" exact>
                <ProtfolioPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
