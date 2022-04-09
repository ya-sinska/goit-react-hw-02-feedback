import propTypes from 'prop-types';
import { OptionBtn, Container } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Container>
            {options.map(option => (
            <OptionBtn key={option} type='button'
            onClick={() => onLeaveFeedback(option)}>{option}
            </OptionBtn>))}
        </Container>
    )
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string),
    onLeaveFeedback: propTypes.func,
}