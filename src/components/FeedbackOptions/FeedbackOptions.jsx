import { Btn, BtnList } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types'
const FeedbackOptions = ({ onLeaveFeedBack }) => {
    return (
        <BtnList>
            <Btn onClick={() => onLeaveFeedBack('good')}>Good</Btn>
            <Btn onClick={() => onLeaveFeedBack('neutral')}>Neutral</Btn>
            <Btn onClick={() => onLeaveFeedBack('bad')}>Bad</Btn>
        </BtnList>)
}

FeedbackOptions.propTypes = {
    onLeaveFeedBack: PropTypes.func.isRequired
}

export default FeedbackOptions;