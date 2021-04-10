import { Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import ErrorBoundary from "./components/General/ErrorBoundary";
import AuthContext from "./components/General/AuthContext";
import Header from "./components/General/Header";
import Footer from "./components/General/Footer";
import ForUs from './components/ForUs';
import Login from "./components/General/UserState/Login";
import Register from "./components/General/UserState/Register";
import Animals from "./components/Animals/Animals";
import AnimalDetails from "./components/Animals/AnimalDetails";
import AnimalAdd from "./components/Animals/AnimalAdd";
import AnimalEdit from "./components/Animals/AnimalEdit";

import isAuth from './hocs/isAuth';

import './App.scss';

function App() {
    const [cookies] = useCookies(['username']);
    const authInfo = {
        isAuthenticated: cookies.username != undefined
    };

    console.log(cookies.username);

    return (
        <AuthContext.Provider value={authInfo}>
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
                        <Route path="/animals/details/:animalId" component={AnimalDetails} />
                        <Route path="/animals/:animalId/edit" component={isAuth(AnimalEdit)} />
                        <Route path="/animals/add" component={isAuth(AnimalAdd)} />
                    </Switch>
                    <Footer />
                </ErrorBoundary>
            </main>
        </AuthContext.Provider>
    );
}

export default App;
