import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
    name: "favourites",
    initialState: {
        favourites: [],
    },
    reducers: {
        GetFavourites(state, action){

        },
        AddFavourites(state, action){
            state.favourites = [...state.favourites, action.payload];
            localStorage.setItem("Favourites", JSON.stringify(state.favourites));
        },
        ClearFavourites(state, action){
            localStorage.removeItem("Favourites");
            state.favourites = [];
        }
    }
})

export const { GetFavourites, AddFavourites, ClearFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;