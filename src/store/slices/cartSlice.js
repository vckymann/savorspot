import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    drinks:[],
    itemAdded: false,
    orderConfirmed: false
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);            
            
            if (existingItem) {
                // If the item already exists, update the quantity
                existingItem.quantity += action.payload.quantity;
            } else {
                // If the item doesn't exist, add it to the cart
                state.items.push(action.payload);
            }
        },
        addDrinks : (state, action) => {
            if(Array.isArray(action.payload)) {

                action.payload.forEach(drink => {
                    const existingDrink = state.drinks.find(d => d.name === drink.name)
    
                    if (existingDrink) {
                        existingDrink.quantity += drink.quantity
                    } else {
                        state.drinks.push(drink)
                    }
                    
                });
            } else {
                const itemToAdd = state.drinks.find(d => d.name === action.payload.name)
                itemToAdd.quantity += 1
            }
        },
        removeItem: (state, action) => {
            const itemToRemove = state.items.find(item => item.id === action.payload);
            if (itemToRemove.quantity > 1) {
                    itemToRemove.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
        },
        removeDrinks: (state, action) => {
            const itemToRemove = state.drinks.find(item => item.name === action.payload);
            if (itemToRemove.quantity > 1) {
                    itemToRemove.quantity -= 1;
                } else {
                    state.drinks = state.drinks.filter(item => item.name !== action.payload);
            }  
        },
        setItemAdded: (state, action) => {
            state.itemAdded = action.payload;            
        },
        setOrderConfirmed: (state, action) => {
            state.orderConfirmed = action.payload
            state.items = []
            state.drinks = []
        }
    }
});

export const { addItem, removeItem, setItemAdded, addDrinks, removeDrinks, setOrderConfirmed } = cartSlice.actions;

export default cartSlice.reducer;
