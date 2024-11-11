import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    selectedItem: {}
}

const  menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.items = action.payload
        },

        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload
        }
    }
})

export const { setMenu, setSelectedItem } = menuSlice.actions

export default menuSlice.reducer
