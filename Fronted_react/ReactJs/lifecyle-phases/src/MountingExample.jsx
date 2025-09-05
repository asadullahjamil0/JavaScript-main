import React, { useEffect, useState } from 'react'

// Example of Mounting Phase using Functional Component and useEffect Hook
const ExampleOfMounting = () => {

    const [timer, setTimer] = useState(1);

    // useEffect with empty dependency array to mimic componentDidMount 
    useEffect(() => {
        // Similar to componentDidMount
        console.log("Component Mounted");
        const intervalId = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000)

        // Cleanup function to clear the interval on unmount
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <h1>Timer: {timer}</h1>
            <button>Timer</button>
        </div>
    )
}

export default ExampleOfMounting
