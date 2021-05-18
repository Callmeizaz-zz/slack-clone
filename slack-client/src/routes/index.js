import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../pages/home.jsx";
import Register from "../pages/register.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
