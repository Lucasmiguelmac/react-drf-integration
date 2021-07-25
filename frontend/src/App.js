import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NavBar from './components/navBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Route path="/" component={Home} exact/>
        <Route path="/detail" component={MovieDetail}/>
      </BrowserRouter>
    </>
  )
}

export default App;