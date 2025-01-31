import { useNavigate } from "react-router";
import { IAnimalDetails } from "../models/IAnimalDetails";

interface IShowAnimalDetailProps {
    animal: IAnimalDetails;
    fedAnimal: (id: number) => void
}

export const ShowAnimalDetails = (props: IShowAnimalDetailProps) => {
    const navigate = useNavigate();

    const handleFeding = () => {
        props.fedAnimal(props.animal.id);
    }
    
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
                <button className={props.animal.isFed ? "isfed" : "hungry"}
                    onClick={handleFeding} 
                    disabled={props.animal.isFed}>
                        {props.animal.isFed ? "Matad" : "Mata djur"}
                </button>
            </div>
        </div>
        </>
    );
};