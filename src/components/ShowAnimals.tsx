import { IAnimal } from "../models/IAnimal"
import { ShowAnimal } from "./ShowAnimal";

interface IShowAnimalsProps {
    animals: IAnimal[];
    updateAnimalImage: () => void
}

export const ShowAnimals = (props: IShowAnimalsProps) => {
    return (
        <div className="animal-container">
            {props.animals.map((a) => {
                return <ShowAnimal animal={a} key={a.id} updateAnimalImage= {props.updateAnimalImage}></ShowAnimal>
            })}
        </div>
    );
};