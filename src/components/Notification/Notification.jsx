import css from "./Notification.module.css";

export default function Notification({hideNotification}) {
    return hideNotification && (<div>
        <p className={css.text}>No feedback yet</p>
    </div>)
}