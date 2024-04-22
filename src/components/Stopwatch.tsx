import { useState, useEffect } from 'react';
import calculateTimeInSeconds from '../components/Helpers/TimerHelper';
import Controls from '../components/WatchControls/WatchControls';
import './Stopwatch.css'

function Stopwatch() {
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [timeArray, setTimeArray] = useState<Array<number|string>>([]);

    useEffect(() => {
        setTimeArray(calculateTimeInSeconds(timeInSeconds));
    }, [timeInSeconds]);

    return(
        <main className="stopwatch-container">
            <div className="timer-display">
                <p id="hour">{timeArray[0]}</p>
                <span>:</span>
                <p id="minute">{timeArray[1]}</p>
                <span>:</span>
                <p id="second">{timeArray[2]}</p>
            </div>
            <Controls setTimeInSeconds={setTimeInSeconds} />
        </main>
    );
}

export default Stopwatch