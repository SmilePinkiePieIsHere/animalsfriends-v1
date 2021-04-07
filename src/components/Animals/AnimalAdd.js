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
            alertShow: false,
            alertText: '',
            alertTitle: '',
            alertClass: '',
            isValid: false
        }
    }   
    
    hideAlert = () => {  
        this.setState({
            alertShow: false,
            alertText: "",
            alertTitle: "",
            alertClass: ""
        });
    }

    successAlert = () => {  
        this.setState({
            alertShow: true,
            alertText: "Успешно добавихте животно!",            
            alertClass: 'success'
        });
    }

    errorAlert = () => {  
        this.setState({
            alertShow: true,
            alertText: "Грешка от страна на сървъра при добавяне на животното. Моля опитайте по-късно.",            
            alertClass: 'danger'
        });
    }

    onEditSubmitHandler(e) {   
        e.preventDefault();
       
        let form = e.currentTarget;
        if (e.currentTarget.checkValidity() === false) {        
            debugger;  
          e.stopPropagation();
          form.gender.value="";
          
        } 
        else {
            const parrentScope = this;
            const { history } = this.props;
    
            let animal = {
                name: this.state.name,
                gender: this.state.gender,
                currentState: this.state.currentState,
                species: this.state.species,
                description: this.state.description,
                profileImg: ''
            }      
            
            postAuthData(endpoints.animals, animal, function (data){               
                parrentScope.successAlert();
    
                setTimeout(() => {
                    history.push("/animals");
                  }, 3000);
               
            }, function (error){   
                parrentScope.errorAlert();
            })  
        }    
        
        this.setState({
            isValid: true
        });
    };

    render() {
        return (
            <Fragment>
                {
                    this.state.alertShow
                    ? (<AlertNotification text={this.state.alertText} heading={this.state.alertTitle} variant={this.state.alertClass} show={this.state.alertShow} onClose={this.hideAlert.bind(this)} />)
                    : null       
                }
                <AnimalFormView
                    onSubmitHandler={this.onEditSubmitHandler.bind(this)}           
                    buttonTitle="Добави"
                    validated={this.state.isValid}                   
                    animalName={this.state.name}
                    setAnimalName={(name) => this.setState({name})}
                    animalGender={this.state.gender}
                    setAnimalGender={(gender) => this.setState({gender})}
                    animalState={this.state.currentState}
                    setAnimalStatus={(currentState) => this.setState({currentState})}
                    animalSpecies={this.state.species}
                    setAnimalSpecies={(species) => this.setState({species})}
                    animalDescription={this.state.description}
                    setAnimalDescription={(description) => this.setState({description})}
                />                
            </Fragment>
        )
    };
};

export default withCookies(AnimalAdd);