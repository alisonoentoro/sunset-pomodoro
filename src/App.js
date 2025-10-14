import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './component/NavBar'

import PomodoroPage from './pages/PomodoroPage'
import AboutPage from './pages/AboutPage'
import SettingsPage from "./pages/SettingsPage";



const App = () => {
  const [timerMinutes, setTimerMinutes] = useState(25); 
  return (
    <div className="flex flex-col hstack top-0">
      <Navbar />
      <div className='col-span-5'>
      <Routes>
        <Route
          path="/"
          element={<PomodoroPage timerMinutes={timerMinutes} />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/settings"
          element={
            <SettingsPage
              timerMinutes={timerMinutes}
              setTimerMinutes={setTimerMinutes}
            />
          }
        />
      </Routes>
      </div>
    </div>

  )
}
export default App


