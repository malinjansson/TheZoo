import { IAnimal } from "../models/IAnimal"
import { ShowAnimal } from "./ShowAnimal";

interface IShowAnimalsProps {
    animals: IAnimal[];
}

export const ShowAnimals = (props: IShowAnimalsProps) => {
    return (
        <div className="animal-container">
            {props.animals.map((a) => {
                return <ShowAnimal animal={a} key={a.id}></ShowAnimal>
            })}
        </div>
    );
};