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
    
    hideAlert (e) {  
        // setAlertModal(false);
        // history.goBack();
    }

    onEditSubmitHandler(e) {   
        let animal = {
            name: this.state.name,
            gender: this.state.gender,
            currentState: this.state.currentState,
            species: this.state.species,
            description: this.state.description,
            profileImg: ''
        }      

        debugger;
        
        postAuthData(endpoints.animals, animal, function (data){   
            debugger;
            if(data.status > 300){
                debugger;
                this.setState({
                    showAlert: true,
                    alertText: "Грешка от страна на сървъра при добавяне на животното. Моля опитайте по-късно."
                });
                //setPopUp(true);              
            }
            else { 
                debugger;
                this.setState({
                    showAlert: true,
                    alertText: "Успешно добавихте животно!."
                });
                //setPopUp(true);      
                //updateAnimals();
                console.log(this.props);
                this.props.history.push("/animals");
            }
        })  
        //animalsService.default.addAnimal(this.state.name, this.state.description, this.state.gender, this.state.species, this.state.currentState);
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
                <AlertNotification text={this.state.alertText} heading="Грешка!" variant="danger" show={this.state.showAlert} onClose={this.hideAlert.bind(this)} />
            </Fragment>
        )
    };
};

export default withCookies(AnimalAdd);