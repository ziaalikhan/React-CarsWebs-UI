import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ['Model S', 'Model Y', 'Model Z', 'Model B']
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer;
