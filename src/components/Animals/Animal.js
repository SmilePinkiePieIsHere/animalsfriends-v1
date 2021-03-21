import { Link } from "react-router-dom";
const Animal = ({
    id,
    name, 
    profileImg,
    species
}) => {
    return (
        <li className="animal">           
            <h3>Име: {name}</h3>
            <p>Вид: {species}</p>
            <p className="img"><img src={profileImg} /></p>            
            <div className="pet-info">                
                <Link to={`/animals/details/${id}`}><button className="button">Детайли</button></Link>                
            </div>
        </li>
    )
}

export default Animal;
