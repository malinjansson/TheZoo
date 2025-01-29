import { IAnimal } from "./IAnimal";

export interface IAnimalDetails extends IAnimal {
    latinName: string;
    yearOfBirth: number;
    shortDescription: string;
    medicine: string;
    isFed: boolean;
    lastFed: string;
}