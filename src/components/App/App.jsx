import Description from '../Description/Description';
import Options from '../Options/Options';
import css from "./App.module.css";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
    
    const [clicks, setClicks] = useState(() => {
        const savedClicks = localStorage.getItem('feedback-stats');
        return savedClicks ? JSON.parse(savedClicks) : { good: 0, neutral: 0, bad: 0 };
    })

    const updateFeedback = (feedbackType) => {
        setClicks((prevClicks) => ({
            ...prevClicks,
            [feedbackType]: prevClicks[feedbackType] + 1,
        }));
        
    };

    const resetFeedback = () => {
        setClicks({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

   useEffect(() => {
    localStorage.setItem('feedback-stats', JSON.stringify(clicks));
   }, [clicks])

    const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
    const positiveFeedback = clicks.good > 0 ? Math.round((clicks.good / totalFeedback) * 100) : 0;
 
    return (
    <div className={css.container}>
      <Description/>
      <Options
      onUpdateFeedback={updateFeedback}
      onResetFeedback={resetFeedback}
      showReset={totalFeedback > 0}
      />
      <Notification hideNotification={totalFeedback === 0}/>
        <Feedback 
        good={clicks.good}
        neutral={clicks.neutral}
        bad={clicks.bad}
        total={totalFeedback}
        positive={positiveFeedback}
        showFeedback={totalFeedback > 0}
        />
    </div>
 )
}
