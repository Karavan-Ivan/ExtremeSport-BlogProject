import './Instructors.scss'
import InstructorsSlider from './InstructorsSlider'

type Props = {}

const Instructors = (props: Props) => {
    return (
        <div className="Instructors">
            <div className="InstructorsInfo">
                <h2>Feel The Excitement</h2>
                <h1>Club Instructors</h1>
                <hr />
            </div>
            <InstructorsSlider />
        </div>
    )
}

export default Instructors
