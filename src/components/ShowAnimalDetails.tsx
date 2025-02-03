import { useNavigate } from "react-router";
import { IAnimalDetails } from "../models/IAnimalDetails";
import { useState } from "react";

interface IShowAnimalDetailProps {
    animal: IAnimalDetails;
    fedAnimal: (id: number) => void
    updateAnimalImage: () => void
}

export const ShowAnimalDetails = (props: IShowAnimalDetailProps) => {
    const [altText, setAltText] = useState (props.animal.name);
    const navigate = useNavigate();

    const handleFeding = () => {
        props.fedAnimal(props.animal.id);
    }

    const handleUpdatedImage = () => {
        setAltText(props.animal.name)
        props.updateAnimalImage();
    }

    const handleErrorAlt = () => {
        setAltText("Klicka här för att visa bild"); 
    };
    
    return (
        <>
        <button className="return-to-animals"  
            onClick={() => {
                  navigate("/animals/");
                }}>
            Tillbaka
        </button>
        <div className="detail-container">
            <div className="img-detailpage" onClick={handleUpdatedImage}>
                <img src={props.animal.imageUrl} alt={altText} onError={handleErrorAlt}/>
            </div>
            <div className="detail-info">
                <h3>{props.animal.name}</h3>
                <p>Födelseår - {props.animal.yearOfBirth}</p>
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