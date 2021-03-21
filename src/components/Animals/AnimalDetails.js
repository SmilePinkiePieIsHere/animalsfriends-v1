import { useEffect, useState } from "react";
import * as animalServices from "../../services/animalServices";

const AnimalDetails = ({
    macth
}) => {
    let [animal, setAnimal] = useEffect({});

    useEffect(() => {
        animalServices.getOne(macth.params.petId)
        .then(res => setAnimal(res));
    },[match]);

    return (<section className="detailsMyPet">
        <h3>{animal.name}</h3>
    </section>)
}

export default AnimalDetails;