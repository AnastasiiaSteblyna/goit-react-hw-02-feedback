import React from "react";

class FeedbackCounter extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    addGoodFeedback = () => {this.setState((prevState => { return {good: prevState.good +1, }}))}
    addNeutralFeedback = () => {this.setState((prevState => { return {neutral: prevState.neutral +1, }}))}
    addBadFeedback = () => {this.setState((prevState => { return {bad: prevState.bad +1, }}))}



    render() {
        return (
        <div>
        <h1>Please leave feedback</h1>
        <div>
            <button type="button" onClick={this.addGoodFeedback}>Good</button>
            <button type="button" onClick={this.addNeutralFeedback}>Neutral</button>
            <button type="button" onClick={this.addBadFeedback}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
        <li>Good: {this.state.good}</li>
        <li>Neutral: {this.state.neutral}</li>
        <li>Bad: {this.state.bad}</li>
        </ul>
        </div>)
            }
}

export default FeedbackCounter;