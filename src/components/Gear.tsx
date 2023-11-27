import React, { useEffect, useState } from 'react';

interface Props {
    imageURL: string;
    ratio: number;
    direction: 'left' | 'right';
    initialAngle?: number;
    left?: number;
    top?: number;
}

function Gear(props: Props) {
    const { imageURL, top, left, initialAngle = 0, ratio, direction } = props;

    const [rotation, setRotation] = useState(initialAngle);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const rotationAmount = (direction === 'left' ? -1 : 1) * scrollY * 0.1 / ratio;
        setRotation(initialAngle + rotationAmount);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [initialAngle, direction, ratio]);

    const style: React.CSSProperties = {
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        transform: `rotate(${rotation}deg)`,
    };

    return (
        <div style={style}>
            <img src={imageURL} alt="Gear Image" />
        </div>
    );
}

export default Gear;
