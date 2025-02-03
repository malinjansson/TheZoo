import { useNavigate } from "react-router";
import { IAnimal } from "../models/IAnimal"

interface IShowAnimal {
    animal: IAnimal;
    updateAnimalImage: () => void
}

export const ShowAnimal = (props: IShowAnimal) => {
    const navigate = useNavigate();
    
    return (
        <div className="animal-card" onClick={props.updateAnimalImage}>
            <h3>{props.animal.name}</h3>
            <div className="img-container">
                <img src={props.animal.imageUrl} alt={props.animal.name} />
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