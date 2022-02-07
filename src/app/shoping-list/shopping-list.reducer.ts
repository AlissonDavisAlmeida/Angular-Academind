import { Ingredient } from "../shared/Ingredient.model";

const initialState = {
    ingredients :[
        new Ingredient("Maçã",10),
        new Ingredient("Melancia",4)
    ]
}

export function shoppingListReducer(state  =initialState, action){

}