import { useState, useRef, useEffect } from "react";
import Button from "../component/Button";

function Pomodoro({ timerMinutes = 25 }) {
  const [timeLeft, setTimeLeft] = useState(timerMinutes * 60)
  const intervalRef = useRef(null)

  const isRunning = intervalRef.current !== null

  function startTimer() {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          return 0
        }
        return prev - 1
      });
    }, 1000)
  }

  function stopTimer() {
    if (!intervalRef.current) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  function resetTimer() {
    stopTimer()
    setTimeLeft(timerMinutes * 60)
  }

  // When settings change, stop and reset to the new duration
  useEffect(() => {
    stopTimer();
    setTimeLeft(timerMinutes * 60)
  }, [timerMinutes]);

  // Cleanup 
  useEffect(() => () => stopTimer(), [])

  return (
    <div className="flex flex-col items-center rounded-lg">
      <h1 className="mb-4 text-4xl">Pomodoro Timer</h1>
      <div className="text-6xl font-mono tabular-nums">
        <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(timeLeft % 60).toString().padStart(2, "0")}</span>
      </div>

      <div className="flex gap-4 m-4 mt-10">
        <Button primary onClick={startTimer} disabled={isRunning}>Start</Button>
        <Button secondary onClick={stopTimer}>Stop</Button>
        <Button tertiary onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
}

export default Pomodoro
