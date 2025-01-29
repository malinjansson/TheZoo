import { AnimalResponse } from "../models/AnimalResponse";
import { get } from "./serviceBase";

export const getAnimals = async () => {
    const data = await get<AnimalResponse>("https://animals.azurewebsites.net/api/animals");
    return data;
}