import JoinUs from 'components/JoinUs/JoinUs'
import Stats from 'components/Stats/Stats'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <div className="container">
                <JoinUs />
                <Stats />
            </div>
        </>
    )
}

export default Main
