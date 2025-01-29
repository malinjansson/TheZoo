import { Link } from "react-router";
import { IAnimalDetails } from "../models/IAnimalDetails";

interface IShowAnimalDetailProps {
    animal: IAnimalDetails;
}

export const ShowAnimalDetails = (props: IShowAnimalDetailProps) => {
    return (
        <div>
            <Link to={"/animals"}>Tillbaka</Link>
            <div className="img-detailpage">
                <img src={props.animal.imageUrl} alt={props.animal.name}/>
            </div>
            <div>
                <h3>{props.animal.name}</h3>
                <span>Födelseår - {props.animal.yearOfBirth}</span>
                <p>{props.animal.shortDescription}</p>
                <p>{props.animal.lastFed}</p>
                <button>Mata</button>
            </div>
        </div>
    );
};