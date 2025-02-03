import { useNavigate } from "react-router";
import { IAnimal } from "../models/IAnimal"
import { useState } from "react";

interface IShowAnimal {
    animal: IAnimal;
    updateAnimalImage: () => void
}

export const ShowAnimal = (props: IShowAnimal) => {
    const [altText, setAltText] = useState (props.animal.name);
    const navigate = useNavigate();

    const handleUpdatedImage = () => {
        setAltText(props.animal.name)
        props.updateAnimalImage();
    }

    const handleErrorAlt = () => {
        setAltText("Klicka här för att visa bild"); 
    };
    
    return (
        <div className="animal-card" onClick={handleUpdatedImage}>
            <h3>{props.animal.name}</h3>
            <div className="img-container">
                <img src={props.animal.imageUrl} alt={altText} onError={handleErrorAlt}/>
            </div>
            <button className="to-the-animal"  
            onClick={() => {
                 navigate ("/animal/" + props.animal.id);
                }}>
            Gå in till djuret ➜
            </button>
        </div>
    )

}