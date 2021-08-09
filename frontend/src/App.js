import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NavBar from './components/navBar';
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Home} exact/>
            <Route path="/:slug" component={MovieDetail}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </CookiesProvider>
    </>
  )
}

export default App;