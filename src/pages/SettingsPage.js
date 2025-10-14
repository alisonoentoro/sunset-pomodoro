import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import Panel from "../component/Panel"
import Dropdown from "../component/Dropdown"
import Button from "../component/Button"
import GradientBackground from "../component/GradientBackground"

const TIME_OPTIONS = Array.from({ length: 12 }, (_, i) => {
  const m = (i + 1) * 5 // 5-60 minutes
  return { label: `${m} minutes`, value: m }
})

const SettingsPage= ({ timerMinutes, setTimerMinutes }) => {
  const navigate = useNavigate()

  // default to 25 minutes or selected minutes
  // useMemo to re-render only when the time option is selected! 
  const initial = useMemo(
    () => TIME_OPTIONS.find((o) => o.value === timerMinutes) ?? TIME_OPTIONS[4],
    [timerMinutes]
  )

  const [selected, setSelected] = useState(initial)
  const hasChanges = selected?.value !== timerMinutes

  const handleSave = () => {
    if (selected) {
      setTimerMinutes(selected.value)
    } // go back to Pomodoro page
  }
  return (
    <div>
        <GradientBackground/>
        <main className="max-w-md mx-auto p-6 z-10">
        <Panel className="w-full bg-white/70 backdrop-blur rounded-2xl p-6 shadow">
            <h1 className="text-xl font-semibold mb-4">Settings</h1>

            {/* Timer Selection */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Pomodoro Duration
                </label>
                <Dropdown
                    options={TIME_OPTIONS}
                    value={selected}
                    onChange={setSelected}
                    placeholder="Select duration…"
                />

                <div className="">
                    <span className="text-sm text-gray-600">
                    Current: <strong>{timerMinutes} min</strong>
                    </span>
                    <div className="flex gap-4 w-full pt-6">
                        <Button primary onClick={handleSave} disabled={!hasChanges}>
                        Save
                        </Button>
                        
                        <Button tertiary onClick={() => navigate(-1)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </Panel>
        </main>
    </div>
  );
}

export default SettingsPage