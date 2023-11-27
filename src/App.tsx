import React, { useState } from 'react';
import './App.css';
import GearTrain, { Gear } from './components/GearTrain.tsx';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';

const gearsData: Gear[] = [
    { imageURL: '/gears/gear-4.svg', diameter: 254 },
    { imageURL: '/gears/gear-1.svg', diameter: 424, angleToPrevious: 225 },
    { imageURL: '/gears/gear-2.svg', diameter: 325, angleToPrevious: 315, initialAngle: 50 },
    { imageURL: '/gears/gear-3.svg', diameter: 333, angleToPrevious: 225, initialAngle: 100 },
    { imageURL: '/gears/gear-5.svg', diameter: 256, angleToPrevious: 315 },
];

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <GearTrain gears={gearsData} />
            <p>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
                Test<br/>
            </p>
        </>
    );
}

export default App;
