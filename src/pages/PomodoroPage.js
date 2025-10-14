import { useState, useMemo } from "react";
import Pomodoro from "../component/Pomodoro";
import Dropdown from "../component/Dropdown"; 
import GradientBackground from "../component/GradientBackground";
import Panel from "../component/Panel";

// City options
const CITY_OPTIONS = [
  { label: "New York", value: "nyc" },
  { label: "San Francisco", value: "sf" },
  { label: "Tokyo", value: "tokyo" },
  { label: "London", value: "london" },
]


export default function PomodoroPage({ timerMinutes }) {
  // const [timerMinutes, setTimerMinutes] = useState(25)

  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <div className="relative overflow-x-hidden">
      <GradientBackground city={selectedCity?.value} />
      {/* Dropdown for city selection */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 py-8 space-y-6">
        <section className="rounded-2xl p-4 bg-white/50 shadow">
          <h2 className="text-lg font-semibold mb-2 text-gray-900">Choose a city</h2>
          <Dropdown
            options={CITY_OPTIONS}
            value={selectedCity}
            onChange={setSelectedCity}
            placeholder="Select a city…"
          />
        </section>
        {/* Pomodoro Timer */}
        <section>
          <Panel className="rounded-2xl p-4 bg-white/70 backdrop-blur w-full">
            <header className="sticky top-0 z-20">
              <div className="mx-auto w-full">
                <Pomodoro timerMinutes={timerMinutes}/>
              </div>
            </header>
          </Panel>
        </section>
      </main>
    </div>
  )
}
