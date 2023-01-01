
import React from 'react'
import PropTypes from 'prop-types';
import {StatList} from './Statistics.styled'
export const Statistics = ({
    valueGood,
    valueNeutral,
    valueBad,
    totalFeedback,
    positiveFeedbackPercentage }) => {

      return (
          <>
              <StatList>
                  <li><span>Good: {valueGood}</span></li>
                  <li> <span>Neutral: {valueNeutral}</span></li>
                  <li><span>Bad: {valueBad}</span></li>
                  <li><span>Total: {totalFeedback}</span></li>
                  <li><span>Positive feedback: {positiveFeedbackPercentage}%</span></li>
                 
                  
              </StatList>
        </>
          

    )
  
}

Statistics.propTypes = {
  valueGood: PropTypes.number.isRequired,
  valueBad: PropTypes.number.isRequired,
  valueNeutral: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};