import { IAnimal } from "../models/IAnimal"

interface IShowAnimal {
    animal: IAnimal;
}

export const ShowAnimal = (props: IShowAnimal) => {
    return (
        <div className="animal-card">
            <h3>{props.animal.name}</h3>
            <div className="img-container">
                <img src={props.animal.imageUrl} alt={props.animal.name} />
            </div>
        </div>
    )

}