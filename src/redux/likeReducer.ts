import { createSlice } from '@reduxjs/toolkit'

type ActivitiesLike = {
    [id: number]: boolean
}

export const initialState: ActivitiesLike = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toogleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toogleLike } = likeSlice.actions
export default likeSlice.reducer
