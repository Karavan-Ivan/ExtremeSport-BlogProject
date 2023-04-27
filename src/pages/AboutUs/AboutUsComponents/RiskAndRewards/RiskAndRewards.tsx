import RiskAndRewardsInfo from './RiskAndRewardsInfo'
import './RiskAndRewards.scss'

type Props = {}

const RiskAndRewards = (props: Props) => {
    return (
        <>
            <div className="RiskAndRewards mainContainer">
                <h2>Make Calculated Risks and Reap the Rewards</h2>
                <h1>Extreme Sports</h1>
            </div>
            <RiskAndRewardsInfo />
        </>
    )
}

export default RiskAndRewards
