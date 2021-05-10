import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './navigation/NavBar';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div id="page-body">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/articles_list' component={ArticleListPage} />
            <Route exact path='/articles/:name' component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
