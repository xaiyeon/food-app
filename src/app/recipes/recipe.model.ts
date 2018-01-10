import { Ingredient } from '../shared/models/ingredient.model';
// Our model class
// This is for recipes
export class Recipe {
    public name: string;
    public description: string;
    public imageURL: string;

    // For
    public ingredients: Ingredient[];


    constructor(name: string, desc: string, imageURL: string, ingredeints: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imageURL = imageURL;
        this.ingredients = ingredeints;
    }

}