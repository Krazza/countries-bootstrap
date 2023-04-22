import { createSlice } from "@reduxjs/toolkit";
import countryService from "../services/countries";

export const countriesSlice = createSlice(
    {
        name: "countries",
        initialState: {
            countries: [],
            isLoading: true
        },
        reducers: {
            getCountries(state, action)
            {
                state.countries = action.payload
            },
            isLoading(state, action)
            {
                state.isLoading = action.payload;
            }
        }
    }
)

export function InitializeCountries()
{
    return async function (dispatch)
    {
        const countries = await countryService.GetAll();
        dispatch(getCountries(countries));
        dispatch(isLoading(false));
    }
}

export const { getCountries, isLoading } = countriesSlice.actions;
export default countriesSlice.reducer;