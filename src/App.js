import { Route, Switch } from 'react-router-dom';

import Header from "./components/General/Header";
import Animals from "./components/Animals/Animals";
import AnimalDetails from "./components/Animals/AnimalDetails";
import Footer from "./components/General/Footer";

import './App.css';

function App() {
    return (
        <main className="wrapper-main">
            <Header />
            <Switch>
                <Route path="/animals" exact component={Animals} />
                <Route path="/animals?status=:status" exact component={Animals} />
                <Route path="/animals/details/:animalId" component={AnimalDetails} />
            </Switch>
            <Footer />
        </main>
    );
}

export default App;
