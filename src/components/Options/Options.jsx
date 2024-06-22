import css from "./Options.module.css";

const ClicksTracker = ({ text, onUpdateFeedback }) => {
    return (
        <button className={css.button} onClick={onUpdateFeedback}>
            {text}
        </button>
    );
};

const ClicksResetter = ({ onResetFeedback }) => {
    return (
        <button className={css.button} onClick={onResetFeedback}>
            Reset
        </button>
    );
};



export default function Options({onUpdateFeedback, onResetFeedback, showReset}) {
     return (
        <>
            <div className={css.buttons}>
            <ClicksTracker
                text="Good"
                onUpdateFeedback={() => onUpdateFeedback("good")}
            />
            <ClicksTracker
                text="Neutral"
                onUpdateFeedback={() => onUpdateFeedback("neutral")}
            />
            <ClicksTracker
                text="Bad"
                onUpdateFeedback={() => onUpdateFeedback("bad")}
            />
            {showReset && (<ClicksResetter onResetFeedback={onResetFeedback} />)}
            
        </div>
        </>
    );
}
