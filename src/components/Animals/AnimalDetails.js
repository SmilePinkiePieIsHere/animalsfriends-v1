import { useEffect, useState } from "react";
import * as animalsService from "../../services/animalsService";

function AnimalDetails({
    match
}) {
    let [animal, setAnimal] = useState({});

    useEffect(() => {
        animalsService.default.getAnimal(match.params.animalId)
            .then(res => setAnimal(res));
    }, []);

    return (
        <section className="animal-details">
            <p className="profile-img"><img alt={animal.name} src={animal.img} /></p>      
            <h3>{animal.name}</h3>     
            <p>{animal.gender}/{animal.status}</p>            
            <p>{animal.description}</p>
        </section>
    );
}

export default AnimalDetails;