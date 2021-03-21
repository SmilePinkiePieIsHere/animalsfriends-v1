import { Link } from "react-router-dom";

const Animal = ({
    id,
    name, 
    profileImg,
    gender
}) => {
    return (
        <li className="animal">           
            <h3>Име: {name}</h3>
            <p>Пол: {gender}</p>
            <p className="img"><img alt={name} src={profileImg} /></p>            
            <div className="pet-info">                
                <Link to={`/animals/details/${id}`}><button className="button">Детайли</button></Link>                
            </div>
        </li>
    )
}

export default Animal;
