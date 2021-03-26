import { Route, Switch } from 'react-router-dom';

import Header from "./components/General/Header";
import Animals from "./components/Animals/Animals";
import AnimalDetails from "./components/Animals/AnimalDetails";
import AddAnimal from "./components/Animals/AddAnimal";
import Footer from "./components/General/Footer";
import ForUs from './components/ForUs';
import Posts from './components/Posts/Posts';

import './App.css';

function App() {
    return (
        <main className="wrapper-main">
            <Header />
            <Switch>
                <Route path="/for-us" component={ForUs} />
                <Route path="/animals" exact component={Animals} />
                <Route path="/animals?status=:status" component={Animals} />
                <Route path="/animals/details/:animalId" component={AnimalDetails} />
                <Route path="/animals/add" component={AddAnimal} />
                <Route path="/posts" component={Posts} />
            </Switch>
            <Footer />
        </main>
    );
}

export default App;
