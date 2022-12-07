import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
          <button type="button" name={options[0]} onClick={onLeaveFeedback}>Good</button>
          <button type="button" name={options[1]} onClick={onLeaveFeedback}>Neutral</button>
          <button type="button" name={options[2]} onClick={onLeaveFeedback}>Bad</button>
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;