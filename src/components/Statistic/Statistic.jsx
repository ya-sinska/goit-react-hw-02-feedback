import propTypes from 'prop-types';
import {List, Item, Total} from './Statistic.styled'
export const Statistic = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
      </List>
      <Total>Total: {total}</Total>
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