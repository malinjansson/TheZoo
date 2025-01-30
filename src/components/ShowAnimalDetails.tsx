import { useNavigate } from "react-router";
import { IAnimalDetails } from "../models/IAnimalDetails";

interface IShowAnimalDetailProps {
    animal: IAnimalDetails;
}

export const ShowAnimalDetails = (props: IShowAnimalDetailProps) => {

    const navigate = useNavigate();
    
    return (
        <>
        <button className="return-to-animals"  
            onClick={() => {
                  navigate("/animals/");
                }}>
            Tillbaka
        </button>
        <div className="detail-container">
            <div className="img-detailpage">
                <img src={props.animal.imageUrl} alt={props.animal.name}/>
            </div>
            <div className="detail-info">
                <h3>{props.animal.name}</h3>
                <span>Födelseår - {props.animal.yearOfBirth}</span>
                <p>{props.animal.shortDescription}</p>
                <p>Senast matad - {props.animal.lastFed}</p>
                <button>Mata</button>
            </div>
        </div>
        </>
    );
};