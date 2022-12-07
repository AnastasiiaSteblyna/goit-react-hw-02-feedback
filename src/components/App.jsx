import React, { Component } from 'react'
import Section from "components/Section/Section";
import Statistics from './Statistics/Statistics';


export default class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }

  addGoodFeedback = () => {this.setState((prevState => { return {good: prevState.good +1, }}))}
  addNeutralFeedback = () => {this.setState((prevState => { return {neutral: prevState.neutral +1, }}))}
  addBadFeedback = () => {this.setState((prevState => { return {bad: prevState.bad +1, }}))}

  countTotalFeedback = () => { 
      const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
      return totalFeedback}

  countPositiveFeedbackPercentage = () => {
      const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
      if(totalFeedback !== 0){
      return Math.round((this.state.good/(totalFeedback))*100);} 
      else { return "0";}
  }    

  render() {
      return (
      <>
      <Section title="Please leave feedback">
          <button type="button" onClick={this.addGoodFeedback}>Good</button>
          <button type="button" onClick={this.addNeutralFeedback}>Neutral</button>
          <button type="button" onClick={this.addBadFeedback}>Bad</button>
      </Section>

      {this.countTotalFeedback() === 0 ? 
      (<h2>No feedback given</h2>) 
      : 
      (
      <Section title="Statictics">
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
      </Section>
      )}
      
      </>)
          }
}
