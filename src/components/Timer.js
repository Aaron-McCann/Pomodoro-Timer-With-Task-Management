import React, { useState, useEffect } from 'react';
import { Button, TimerDisplay } from './styledComponents';

const Timer = () => {
    // States for the timer
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    // Effect to handle the timer functionality
    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1);
            }, 1000);
        } else if (!isActive && timeLeft !== 0 && isPaused) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isPaused]);

    // Start timer
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    // Pause timer
    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    // Reset timer
    const handleReset = () => {
        setTimeLeft(25 * 60);
        setIsActive(false);
        setIsPaused(true);
    };

    // Formatting timeLeft into minutes and seconds
    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <div>
            <TimerDisplay>
                {formatTime()}
            </TimerDisplay>
            <div>
                {!isActive && <Button onClick={handleStart}>Start</Button>}
                {isActive && <Button onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</Button>}
                <Button onClick={handleReset}>Reset</Button>
            </div>
        </div>
    );
};

export default Timer;
