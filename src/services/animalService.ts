import { AnimalResponse } from "../models/AnimalResponse";
import { IAnimalDetails } from "../models/IAnimalDetails";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals/";

export const getAnimals = async () => {
    const data = await get<AnimalResponse>(`${BASE_URL}`);
    return data;
}

export const getAnimalById = async (id: string) => {
    const data = await get<IAnimalDetails>(`${BASE_URL}${id}`);
    return data;
}