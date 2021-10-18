import { Route, Switch } from "react-router-dom";
import AllMoviesPage from "./pages/AllMovies";
import Layout from "./components/layout/Layout";
import AddNewMoviePage from "./pages/AddNewMovie";
import FavoritesPage from "./pages/Favorites";
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMoviesPage />
          </Route>
          <Route path="/addnewmovie" exact>
            <AddNewMoviePage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
