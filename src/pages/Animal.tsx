import { useEffect, useState } from "react";
import { IAnimalDetails } from "../models/IAnimalDetails";
import { getAnimalById } from "../services/animalService";
import { useParams } from "react-router";
import { ShowAnimalDetails } from "../components/ShowAnimalDetails";
import "./../styles/animalDetailPage.scss";

export const Animal = () => {
    const {id} = useParams();
    const [animal, setAnimal] = useState<IAnimalDetails>();

    useEffect(() => {
        const getData = async () => {
            if(id) {
                const data = await getAnimalById(id);
                setAnimal(data);
            }
        };

        if(animal) return;
        getData();
    })

    return <>{animal && <ShowAnimalDetails animal={animal}/>}</>
    
};