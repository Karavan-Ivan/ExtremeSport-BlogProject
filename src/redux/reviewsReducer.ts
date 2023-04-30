import { createSlice } from '@reduxjs/toolkit'

type Review = {
    name: string
    text: string
    image: string
    value: number | undefined
}

const initialState: Review[] = [
    {
        name: 'Jonson Trimph',
        text: 'Praesent posuere, risus nec aliquet lorem diam tempor est vitae finibus tortor erat sit amet dolor. Sed ipsumus neque congue biats con quatasy venenatis augue.',
        image: '/images/JonsonTrimphComment.jpg',
        value: 5,
    },
    {
        name: 'Sierray Williams',
        text: 'Praesent posuere, risus nec aliquet lorem diam tempor est vitae finibus tortor erat sit amet dolor. Sed ipsumus neque congue biats con quatasy venenatis augue.',
        image: '/images/SierrayWilliamsComment.jpg',
        value: 5,
    },
    {
        name: 'Alex Haysman',
        text: 'Praesent posuere, risus nec aliquet lorem diam tempor est vitae finibus tortor erat sit amet dolor. Sed ipsumus neque congue biats con quatasy venenatis augue.',
        image: '/images/AlexHaysmanComment.jpg',
        value: 4,
    },
]

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => [...state, action.payload],
    },
})

export const { addReview } = reviewsSlice.actions

export default reviewsSlice.reducer
