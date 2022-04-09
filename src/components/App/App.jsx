import { Component } from 'react';
import {Container, Title} from './App.styled'

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  makeFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }))
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good+neutral+bad 
  }
  countPositiveFeedbackPercentage = (feedbackValues) => {
    const sum = this.countTotalFeedback();
    const { good } = this.state;
    let percent= 0;
    percent = good > 0 ?
      Number.parseInt(good / sum * 100) : 0;
    return percent
  }
  render() {
    const options = Object.keys(this.state)
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Title>Please leave feedback</Title>
        {options.map(option => (
          <button key={option} type='button'onClick={()=>this.makeFeedback(option)}>{option}
          </button>))}
        <h2>Statistic</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </Container>
      );
  }

};
export { App };
