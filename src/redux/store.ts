import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import reviewsReducer, { reviewsSlice } from './reviewsReducer'

export const store = configureStore({
    reducer: {
        productsLike: likeReducer,
        reviews: reviewsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
