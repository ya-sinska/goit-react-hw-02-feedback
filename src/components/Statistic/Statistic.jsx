import propTypes from 'prop-types';
export const Statistic = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
        
  )
};

Statistic.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};