import React from 'react'
import GradientBackground from '../component/GradientBackground'

const AboutPage = () => {
    return (
    <>
        <GradientBackground/>
        <div className='relative z-10 max-w-3xl mx-auto px-4 py-24'>
             <div className="rounded-2xl p-6 bg-white/80 backdrop-blur shadow">
                <h1 className="text-2xl font-semibold mb-3">What is Sunset Pomodoro?</h1>
                <p className="text-gray-800">
                    Sunset Pomodoro is an interactive timer that shifts with time and place. As you select a city, 
                    the background transforms into its own sunset gradient, slowly fading from light to dark as the 
                    timer runs. It’s a calm, visual way to stay grounded and present while you work, inspired by the 
                    passing light of the day.
                </p>
            </div>
        </div>
    </>
        
    )
}

export default AboutPage