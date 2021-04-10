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
            currentStatus: '',
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

    alertDetails = (shouldShow, message, classAlert) => {  
        this.setState({
            alertShow: shouldShow,
            alertText: message,            
            alertClass: classAlert
        });
    }

    onEditSubmitHandler(e) {   
        e.preventDefault();
       
        if (e.currentTarget.checkValidity() === false) {   
          e.stopPropagation();        
        } 
        else {
            const parrentScope = this;
            const { history } = this.props;
    
            let animal = {
                name: this.state.name,
                gender: this.state.gender,
                currentStatus: this.state.currentStatus,
                species: this.state.species,
                description: this.state.description,
                profileImg: ''
            }      
            
            postAuthData(endpoints.animals, animal, function (data){ 
                parrentScope.alertDetails(true, "Успешно добавихте животно!", "success");
    
                setTimeout(() => {
                    history.push("/animals");
                  }, 3000);
               
            }, function (error){
                parrentScope.alertDetails(true, "Грешка от страна на сървъра при добавяне на животното. Моля опитайте по-късно.", "danger");

                setTimeout(() => {
                    parrentScope.alertDetails(false, "", "danger");
                  }, 3000);
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
                    ? (<AlertNotification text={this.state.alertText} heading={this.state.alertTitle} variant={this.state.alertClass} show={this.state.alertShow} />)
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
                    animalStatus={this.state.currentStatus}
                    setAnimalStatus={(currentStatus) => this.setState({currentStatus})}
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