import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import NavBar from './components/navBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Route path="/" component={Home} exact/>
      </BrowserRouter>
    </>
  )
}

export default App;