import { Component } from 'react';

import * as animalsService from "../../services/animalsService";

import AnimalFormView from "../Animals/AnimalFormView";

class AnimalAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            gender: '',            
            currentState: '',
            species: '',
            description: '',
            profileImg: ''
        }
    }   

    onEditSubmitHandler(e) {        
        animalsService.default.addAnimal(this.state.name, this.state.description, this.state.gender, this.state.species, this.state.currentState);
    };

    render() {
        return <AnimalFormView
            onSubmitHandler={this.onEditSubmitHandler.bind(this)}           
            buttonTitle="Добави"
            animalName={this.state.name}
            setAnimalName={(name) => this.setState({name})}
            animalGender={this.state.gender}
            setGenderName={(gender) => this.setState({gender})}
            animalState={this.state.currentState}
            setAnimalState={(currentState) => this.setState({currentState})}
            animalSpecies={this.state.species}
            setAnimalSpecies={(species) => this.setState({species})}
            animalDescription={this.state.description}
            setAnimalDescription={(description) => this.setState({description})}
        />
    };
};

export default AnimalAdd;