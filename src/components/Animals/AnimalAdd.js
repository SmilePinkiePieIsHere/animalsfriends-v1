import { Component, Fragment } from 'react';
import { withCookies } from 'react-cookie';

import AnimalFormView from "../Animals/AnimalFormView";
import AlertNotification from "../General/AlertNotification";

import endpoints from "../../services/endpoints.js";
import { postAuthData } from "../../services/services.js";

class AnimalAdd extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            name: '',
            gender: '',            
            currentState: '',
            species: '',
            description: '',
            profileImg: '',
            showAlert: false,
            alertText: ''
        }
    }   
    
    hideAlert = () => {  
        this.setState({
            showAlert: false,
            alertText: ""
        });
    }

    onEditSubmitHandler(e) {   
        e.preventDefault();
        const { state, history } = this.props;

        let animal = {
            name: this.state.name,
            gender: this.state.gender,
            currentState: this.state.currentState,
            species: this.state.species,
            description: this.state.description,
            profileImg: ''
        }   

        this.setState({
            showAlert: true,
            alertText: "Успешно добавихте животно!."
        });

        postAuthData(endpoints.animals, animal, function (data){   
            if(data.status >= 300){
                // this.setState({
                //     showAlert: true,
                //     alertText: "Грешка от страна на сървъра при добавяне на животното. Моля опитайте по-късно."
                // });    
            }
            else { 
                debugger;
                //updateAnimals(); 
                setTimeout(() => {
                    history.push("/animals");
                  }, 3000);
            }
        })  
    };

    render() {
        return (
            <Fragment>
                <AnimalFormView
                    onSubmitHandler={this.onEditSubmitHandler.bind(this)}           
                    buttonTitle="Добави"
                    animalName={this.state.name}
                    setAnimalName={(name) => this.setState({name})}
                    animalGender={this.state.gender}
                    setAnimalGender={(gender) => this.setState({gender})}
                    animalState={this.state.currentState}
                    setAnimalState={(currentState) => this.setState({currentState})}
                    animalSpecies={this.state.species}
                    setAnimalSpecies={(species) => this.setState({species})}
                    animalDescription={this.state.description}
                    setAnimalDescription={(description) => this.setState({description})}
                />
                {this.state.showAlert
                    ? (<AlertNotification text={this.state.alertText} heading="Грешка!" variant="danger" show={this.state.showAlert} onClose={this.hideAlert.bind(this)} />)
                    : null       
                }
                
            </Fragment>
        )
    };
};

export default withCookies(AnimalAdd);