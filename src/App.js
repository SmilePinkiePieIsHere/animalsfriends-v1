import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/General/Header";
import Animals from "./components/Animals/Animals";
// import AnimalDetails from "./components/Animals/AnimalDetails.js";
import Footer from "./components/General/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/animals" component={Animals} />
        <Route path="/animals/:category" exact component={Animals} />
        {/* <Route path="/animals/details/:petId" component={AnimalDetails} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
