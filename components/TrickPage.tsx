import React, { useState, useEffect } from 'react';
import { PageProps } from '../types';
import {
    DemonicFaceIcon,
    GhostIcon,
    SkullIcon,
    SpiderIcon,
    DollIcon,
    HandprintIcon,
    ShadowFigureIcon,
    DistortedFaceIcon,
} from './Icons';

const scares = [
    {
        name: 'The Classic Jolt',
        Icon: DemonicFaceIcon,
        sound: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=', // Short silence, sound is implied by visual
        animation: 'animate-jump-scare',
        bgColor: 'bg-black',
        iconColor: 'text-red-600',
        duration: 1500,
    },
    {
        name: 'The Ghostly Apparition',
        Icon: GhostIcon,
        sound: 'data:audio/wav;base64,UklGRjwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YSQAAAD//////v/9//7/+/3/9v/y//L/8f/x/vH+8f7v/u/+7/7r/uv+6v7q/un+6f7n/ub+5f7l/uT+5P7j/uP+4f7h/t/+3v7c/tz+2v7a/to=',
        animation: 'animate-ghostly-float',
        bgColor: 'bg-gray-900',
        iconColor: 'text-white',
        duration: 2000,
    },
    {
        name: 'The Glitching Skull',
        Icon: SkullIcon,
        sound: 'data:audio/wav;base64,UklGRlIAAABXQVZFZm10IBAAAAABAAIARKwAACLWAEAEABAAZGF0YSJIAAAnnHHIIYj/9/757b322HvvfeWd99hxyCGG///3//v/CBxxyCGE/+///+299th7733lnffeYcghhv/v/w==',
        animation: 'animate-sudden-glitch',
        bgColor: 'bg-black',
        iconColor: 'text-gray-300',
        duration: 1200,
    },
    {
        name: 'The Spider Drop',
        Icon: SpiderIcon,
        sound: 'data:audio/wav;base64,UklGRkAAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAADb/tX+0P7N/s/+zv7P/tH+0v7Y/tr+3f7h/un/8f/4//8A',
        animation: 'animate-spider-drop',
        bgColor: 'bg-gray-800',
        iconColor: 'text-black',
        duration: 1500,
    },
    {
        name: 'The Creepy Doll',
        Icon: DollIcon,
        sound: 'data:audio/wav;base64,UklGRlAAAABXQVZFZm10IBAAAAABAAIARKwAACLWAEAEABAAZGF0YSJIAAAAAAAAaGhoaGhoY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2hoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGg=',
        animation: 'animate-doll-appear',
        bgColor: 'bg-black',
        iconColor: 'text-gray-300',
        duration: 2200,
    },
    {
        name: 'The Bloody Slap',
        Icon: HandprintIcon,
        sound: 'data:audio/wav;base64,UklGRlwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YRIAAACpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=',
        animation: 'animate-handprint-slap',
        bgColor: 'bg-black',
        iconColor: 'text-red-700',
        duration: 1000,
    },
    {
        name: 'The Shadow Figure',
        Icon: ShadowFigureIcon,
        sound: 'data:audio/wav;base64,UklGRkgAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAADw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8A==',
        animation: 'animate-shadow-fade',
        bgColor: 'bg-black',
        iconColor: 'text-black',
        duration: 2500,
    },
    {
        name: 'The Static Scream',
        Icon: DistortedFaceIcon,
        sound: 'data:audio/wav;base64,UklGRmAAAABXQVZFZm10IBAAAAABAAIARKwAACLWAEAEABAAZGF0YSOIAAAAAAAAaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaA==',
        animation: 'animate-static-flicker',
        bgColor: 'bg-gray-900',
        iconColor: 'text-white',
        duration: 1800,
    },
];


const TrickPage: React.FC<PageProps> = ({ navigate }) => {
    const [selectedScare] = useState(() => scares[Math.floor(Math.random() * scares.length)]);
    const [showScare, setShowScare] = useState(true);

    useEffect(() => {
        const audio = new Audio(selectedScare.sound);
        audio.play().catch(e => console.error("Audio playback failed. User interaction might be required.", e));

        // Vibrate the phone for a haptic effect. Note: Not supported on iOS.
        if ('vibrate' in navigator) {
            navigator.vibrate([200, 100, 200]); // Vibrate, pause, vibrate
        }

        const timer = setTimeout(() => {
            setShowScare(false);
        }, selectedScare.duration);

        return () => clearTimeout(timer);
    }, [selectedScare]);


    const handleRestart = () => {
        localStorage.removeItem('pumpkinQuestProgress');
        navigate('0');
    };

    if (showScare) {
        const { Icon, animation, bgColor, iconColor } = selectedScare;
        return (
            <div className={`scare-container ${bgColor}`}>
                <Icon size={300} className={`${animation} ${iconColor}`} />
            </div>
        );
    }

    return (
        <div className="text-center space-y-6 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-red-700/50 animate-screen-shake">
            <div className="text-7xl">👻</div>
            <h1 className="font-['Creepster'] text-6xl font-bold text-red-500 drop-shadow-lg">TRICK!</h1>
            <div className="text-lg text-gray-200 space-y-3 font-sans">
                <p>You scanned a fake QR code or tried to skip a step!</p>
                <p>Your progress has been reset. Better luck next time!</p>
            </div>
            <button
                onClick={handleRestart}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md">
                Start Over
            </button>
        </div>
    );
};

export default TrickPage;