import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import serverData from "../utils/serverData";
import Dashboard from "./Dashboard";
import Friends from "./Friends";
import Friend from "./Friend";

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavLink to="/" className="header__logo">
          Sociedad de Amigos de los Loros
        </NavLink>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink className="menu__link" to="/friends">
                Amigos
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink className="menu__link" to="/news">
                Noticias
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route exact path="/friends">
          <Friends serverData={serverData} />
        </Route>

        <Route path="/friends/:id">
          <Friend serverData={serverData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
