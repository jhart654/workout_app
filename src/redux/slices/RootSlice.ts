import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        body_part: "Body Part",
        equipment: "Equipment",
        sets: "Sets",
        reps: "Reps"
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        chooseBody_Part: (state, action) => {state.body_part = action.payload},
        chooseEquipment: (state, action) => {state.equipment = action.payload},
        chooseSets: (state, action) => {state.sets = action.payload},
        chooseReps: (state, action) => {state.reps = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseBody_Part, chooseEquipment, chooseSets, chooseReps } = rootSlice.actions