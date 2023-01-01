
import React from 'react'
import { FeedbackOptions } from './Feedback/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'
import { SectionPart } from './Section/Section';
import { GlobalStyle } from "../GlobalStyle";


export class App extends  React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
    
    handleIncrement = e => {
        const target = e.target.name;
        this.setState(prevState => ({
            [target]: prevState[target] + 1,
        })
        );
    };
    
    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
    
    countPositiveFeedbackPercentage = () => Math.round(this.state.good / (this.countTotalFeedback() || 1) * 100);
    
    render() {
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        const totalFeedback = this.countTotalFeedback();
        const { good, neutral, bad } = this.state;
        return (
            <>
                <GlobalStyle />
                <SectionPart title="Please leave feedback">
                    <FeedbackOptions
                                options={Object.keys(this.state)}

                        onLeaveFeedback={this.handleIncrement} 
                        
                    />
                </SectionPart>
                <SectionPart title="Statistics">
                    {totalFeedback
                        ? (
                            <Statistics
                                valueGood={good}
                                valueNeutral={neutral}
                                valueBad={bad}
                                totalFeedback={totalFeedback}
                                positiveFeedbackPercentage={positiveFeedbackPercentage}
                                
                            />
                        )
                        : (
                            <Notification message="There is no feedback" />
                        )
                    }
                </SectionPart>
            </>
        );
    }
};

