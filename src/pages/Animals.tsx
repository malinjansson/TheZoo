import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import { ShowAnimals } from "../components/ShowAnimals";
import "./../styles/animalsListingPage.scss";
import fallback1 from './../assets/horse.jpg';
import fallback2 from './../assets/Chinchilla.jpg';

export const Animals = () => {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getAnimals();

            const updateImage = (data.map((a) => {
                if(a.id === 8) {
                   return {...a, imageUrl: fallback1}
                 }
                 if (a.id === 13) {
                    return{...a, imageUrl: fallback2}
                 } else {
                    return a; 
                 }
              }));
              
            setAnimals(updateImage);
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