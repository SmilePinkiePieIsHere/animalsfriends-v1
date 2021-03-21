import { useEffect, useState} from "react";
import * as animalsService from "../../services/animalsService";

const AnimalDetails = ({
     match
}) => {
    let [animal, setAnimal] = useState({});

    useEffect(() => {      
        animalsService.default.getOne(match.params.animalId)
        .then(res => setAnimal(res));
    },[]);

    return (<section className="detailsMyPet">
        <h3>{animal.name}</h3>
    </section>)
}

export default AnimalDetails;