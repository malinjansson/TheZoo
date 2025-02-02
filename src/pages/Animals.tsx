import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { ShowAnimals } from "../components/ShowAnimals";
import "./../styles/animalsListingPage.scss";

export const Animals = () => {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getAnimals();
            setAnimals(data);
        };

        if(animals.length > 0) return;
        getData();
    });

    return (
        <>
        <ShowAnimals animals={animals}></ShowAnimals>
        </>
    );
};