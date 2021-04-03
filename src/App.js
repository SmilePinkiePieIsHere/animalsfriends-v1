import { Route, Switch } from 'react-router-dom';

import Header from "./components/General/Header";
import Animals from "./components/Animals/Animals";
import AnimalDetails from "./components/Animals/AnimalDetails";
import AnimalAdd from "./components/Animals/AnimalAdd";
import AnimalEdit from "./components/Animals/AnimalEdit";
import Footer from "./components/General/Footer";
import ForUs from './components/ForUs';
import Login from "./components/General/UserState/Login";

import './App.scss';

function App() {
    return (
        <main className="wrapper-main">
            <Header />         
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/for-us" component={ForUs} />                
                <Route path="/animals" exact component={Animals} />
                <Route path="/animals?status=:status" component={Animals} />
                <Route path="/animals/details/:animalId" component={AnimalDetails} />                
                <Route path="/animals/:animalId/edit" component={AnimalEdit} />
                <Route path="/animals/add" component={AnimalAdd} />               
            </Switch>
            <Footer /> 
        </main>
    );
}

export default App;
