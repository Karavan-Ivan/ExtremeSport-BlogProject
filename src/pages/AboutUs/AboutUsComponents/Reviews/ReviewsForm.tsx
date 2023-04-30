import { TextField, TextareaAutosize } from '@mui/material'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addReview } from 'redux/reviewsReducer'

type Props = {}

type Review = {
    name: string
    text: string
    image: string
    value: number | undefined
}

const ReviewsForm = (props: Props) => {
    const arrReviews = useAppSelector((state) => state.reviews)
    const dispatch = useAppDispatch()

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
        image: '/images/UnknownUser.png',
        value: 0,
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const handleRating = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            value: parseInt(e.target.value),
        }))
    }

    const sendReview = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(addReview(newReview))

        setNewReview({
            name: '',
            text: '',
            image: '/images/UnknownUser.png',
            value: 0,
        })
    }

    return (
        <div className="reviews">
            <form onSubmit={sendReview} className="reviewform">
                <h3>Your review</h3>
                <hr />
                <div className="reviewField">
                    <div className="textArea">
                        <div className="textAreaName">
                            <TextField
                                className="textAreaNameField"
                                label="Name"
                                value={newReview.name}
                                onChange={handleName}
                                required
                            />
                        </div>
                        <div className="textAreaText">
                            <TextareaAutosize
                                className="textAreaTextField"
                                minRows={5}
                                maxLength={50}
                                maxRows={10}
                                placeholder="Your message"
                                value={newReview.text}
                                onChange={handleText}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewsForm
