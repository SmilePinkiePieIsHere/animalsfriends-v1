import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from "./components/General/Header";
import Animals from "./components/Animals/Animals";
import AnimalDetails from "./components/Animals/AnimalDetails";
import Footer from "./components/General/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/animals" exact component={Animals} />
        <Route path="/animals?status=:status" exact component={Animals} />
        <Route path="/animals/details/:animalId" component={AnimalDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
