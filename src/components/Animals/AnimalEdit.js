import { Component } from 'react';

import AnimalFormView from "../Animals/AnimalFormView";

import endpoints from "../../services/endpoints.js";
import { postAuthData, getData } from "../../services/services.js";

class AnimalEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            gender: '',            
            currentStatus: '',
            species: '',
            description: '',
            profileImg: '',
            isValid: false
        }
    }

    componentDidMount() {  
        let animalUrl =`${endpoints.animals}/${this.props.match.params.animalId}`;
        getData(animalUrl, function (error) {
            alert(error);
        }, "Грешка от страна на сървъра при вземане на животнo!")
        .then(animal => {
            this.setState(animal);
        });
    }

    onEditSubmitHandler(e) {
        e.preventDefault();
        //const parrentScope = this;   
        
        if (e.currentTarget.checkValidity() === false) {   
            e.stopPropagation();        
        } 
        else {
            let { history, match } = this.props;

            let animal = {
                id: Number(match.params.animalId),
                name: this.state.name,
                gender: this.state.gender,
                currentStatus: this.state.currentStatus,
                species: this.state.species,
                description: this.state.description,
                profileImg: this.state.profileImg
            }  
            
            postAuthData(endpoints.animals + "/" + this.props.match.params.animalId, animal, function (data){               
                //parrentScope.successAlert();
                setTimeout(() => {
                    
                    history.push("/animals");
                  }, 3000);
               
            }, function (error){   
                //parrentScope.errorAlert();
            }, 'PUT')    
        } 

        this.setState({
            isValid: true
        });
    };

    render() {
        return <AnimalFormView
            onSubmitHandler={this.onEditSubmitHandler.bind(this)}           
            buttonTitle="Запази"
            validated={this.state.isValid}
            animalName={this.state.name}
            setAnimalName={(name) => this.setState({name})}
            animalGender={this.state.gender}
            setAnimalGender={(gender) => this.setState({gender})}
            animalStatus={this.state.currentStatus}
            setAnimalStatus={(currentStatus) => this.setState({currentStatus})}
            animalSpecies={this.state.species}
            setAnimalSpecies={(species) => this.setState({species})}
            animalDescription={this.state.description}
            setAnimalDescription={(description) => this.setState({description})}
        />
    };
};

export default AnimalEdit;