import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from "./components/General/ErrorBoundary";
import Header from "./components/General/Header";
import Footer from "./components/General/Footer";
import ForUs from './components/ForUs';
import Login from "./components/General/UserState/Login";
import Login from "./components/General/UserState/Register";
import Animals from "./components/Animals/Animals";
import AnimalDetails from "./components/Animals/AnimalDetails";
import AnimalAdd from "./components/Animals/AnimalAdd";
import AnimalEdit from "./components/Animals/AnimalEdit";

import './App.scss';

function App() {
    const [update, setUpdate] = useState(false);

    const onUpdate = () => {
        setUpdate(!update);
    }

    return (
        <main className="wrapper-main">
            <ErrorBoundary>
                <Header />
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/" exact component={ForUs} />
                    <Route path="/for-us" component={ForUs} />
                    <Route path="/animals" exact component={Animals} />
                    <Route path="/animals?status=:status" component={Animals} />
                    <Route path="/animals/details/:animalId" render={(props) => <AnimalDetails updateAnimals={onUpdate} {...props} />} />
                    <Route path="/animals/:animalId/edit" component={AnimalEdit} />
                    <Route path="/animals/add" component={AnimalAdd} />
                </Switch>
                <Footer />
            </ErrorBoundary>
        </main>
    );
}

export default App;
