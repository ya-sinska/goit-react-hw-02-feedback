import { Component } from 'react';
import { Statistic } from '../Statistic/Statistic'
import { FeedbackOptions } from '../FeedbackBtn/FeedbackOptions'
import { Section } from '../Section/Section'
import {Notification} from '../Notification/Notification'
import {Container} from './App.styled'

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
  countPositiveFeedbackPercentage = () => {
    const sum = this.countTotalFeedback();
    const { good } = this.state;
    let percent;
    percent = good > 0 ?
      Number.parseInt(good / sum * 100) : 0;
    return percent
  }
  render() {
    const options = Object.keys(this.state)
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options}
          onLeaveFeedback={this.makeFeedback} />
        </Section>
        {this.countTotalFeedback() === 0 ? 
        (<Notification message="There is no feedback"/>):
        (<Section title="Statistics">
          <Statistic good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>)}
      </Container> 
      );
  }
};
export { App };
