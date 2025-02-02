import { useEffect, useState } from "react";
import { IAnimalDetails } from "../models/IAnimalDetails";
import { getAnimalById } from "../services/animalService";
import { useParams } from "react-router";
import { ShowAnimalDetails } from "../components/ShowAnimalDetails";
import "./../styles/animalDetailPage.scss";
import fallback1 from './../assets/horse.jpg';
import fallback2 from './../assets/Chinchilla.jpg';

export const Animal = () => {
    const {id} = useParams();
    const [animal, setAnimal] = useState<IAnimalDetails | null>(
        JSON.parse(localStorage.getItem(`animal_${id}`) || "null")
    );

    useEffect(() => {
        const getData = async () => {
            if(id) {
                const data = await getAnimalById(id);

                const updatedAnimal = {
                    ...data, imageUrl:
                      id === '8' ? fallback1 : 
                      id === '13' ? fallback2 : 
                      data.imageUrl
                  };

                setAnimal(updatedAnimal);
            }
        };

        getData();
    })

    const fedAnimal = (id: number) => {
        if (animal && animal.id === id) {
            setAnimal({...animal, isFed: !animal.isFed, lastFed: new Date().toLocaleString()});
        }
    };
 
    localStorage.setItem(`animal_${id}`, JSON.stringify(animal));

    return <>{animal && <ShowAnimalDetails animal={animal} fedAnimal={fedAnimal}/>}</>
    
};