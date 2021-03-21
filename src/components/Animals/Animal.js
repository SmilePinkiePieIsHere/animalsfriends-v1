import { Link } from "react-router-dom";

function Animal({
    id,
    name,
    profileImg,
    gender
}) {
    return (
        <li className="wrap-animal">
            <p className="profile-img"><img alt={name} src={profileImg} /></p>
            <h3>Име: {name}</h3>
            <p>Пол: {gender}</p>            
            <div className="details">
                <Link to={`/animals/details/${id}`}><button className="button">Детайли</button></Link>
            </div>
        </li>
    )
}

export default Animal;
