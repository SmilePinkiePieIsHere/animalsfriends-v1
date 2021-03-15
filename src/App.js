import logo from './logo.svg';
import './App.css';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Header from "./components/General/Header";
// import Main from "./components/General/Main";
import OurAnimals from "./components/OurAnimals/OurAnimals.js";
import Footer from "./components/General/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/our-animals" component={OurAnimals} />
      {/* <Main/> */}
      <Footer/> 
    </div>
  );
}

export default App;
