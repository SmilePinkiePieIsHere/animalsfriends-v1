import { Component } from 'react';

import * as animalsService from "../../services/animalsService";

import AnimalFormView from "../Animals/AnimalFormView";

class AnimalEdit extends Component {
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

    componentDidMount() {
        debugger;
        animalsService.default.getAnimal(this.props.match.params.animalId)
            .then(animal => {
                this.setState(animal);
            });
    }

    onEditSubmitHandler(e) {
        console.log(e);
    };

    render() {
        return <AnimalFormView
            onSubmitHandler={this.onEditSubmitHandler.bind(this)}
            formTitle="Редактирай:"
            buttonTitle="Запази"
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

export default AnimalEdit;