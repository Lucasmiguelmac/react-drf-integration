import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NavBar from './components/navBar';
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/detail" component={MovieDetail}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;