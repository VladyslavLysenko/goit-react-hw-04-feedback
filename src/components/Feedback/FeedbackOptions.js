import React from 'react';
import PropTypes from 'prop-types';
import { BtnList, Btn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <BtnList>
    {options.map((item, index) => (
     
      <li key={index}>
        <Btn type="button" onClick={onLeaveFeedback} name={item}>
          {item}
        </Btn>
      </li>
    ))}
  </BtnList>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
