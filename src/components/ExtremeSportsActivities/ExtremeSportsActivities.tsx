import Slider from 'components/Slider/Slider'
import './ExtremeSportsActivities.scss'

type Props = {}

const ExtremeSportsActivities = (props: Props) => {
    return (
        <>
            <div className="ExtremeSportsActivities">
                <div>
                    <h2>Live The Excitement</h2>
                    <h1>Extreme Sports Activities</h1>
                    <hr />
                </div>
                <h3>
                    Dolor sit amet consectetur adipiscing elit sed con eiusmod
                    tempor incididunt labore etys dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida risus ipsum dolore
                    commodo viverra maecenas.
                </h3>
            </div>
            <Slider />
        </>
    )
}

export default ExtremeSportsActivities
