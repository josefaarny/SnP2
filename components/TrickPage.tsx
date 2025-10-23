import React, { useEffect, useState, useMemo } from 'react';
import { PageProps } from '../types';
import { ScaryFaceIcon, GhostIcon, SkullIcon } from './Icons';

// NOTE: These are short, safe placeholder sounds.
// For more dramatic effects, you can record your own sounds, encode them to base64, and replace these strings.
const SCARE_SOUND_FACE = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
const SCARE_SOUND_GHOST = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAA='; // Slightly different pop
const SCARE_SOUND_SKULL = 'data:audio/wav;base64,UklGRjwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YRAAAABUaGlzIGlzIGEgcGxhY2Vob2xkZXI='; // Different again

const TrickPage: React.FC<PageProps> = ({ navigate }) => {
    const [scareFinished, setScareFinished] = useState(false);

    // useMemo ensures the scare is chosen only once when the component first renders.
    const selectedScare = useMemo(() => {
        const scares = [
            { icon: ScaryFaceIcon, sound: SCARE_SOUND_FACE, animation: 'animate-jump-scare', background: 'bg-red-900 animate-ping' },
            { icon: GhostIcon, sound: SCARE_SOUND_GHOST, animation: 'animate-ghostly-float', background: 'bg-blue-900/50 animate-pulse' },
            { icon: SkullIcon, sound: SCARE_SOUND_SKULL, animation: 'animate-sudden-glitch', background: 'bg-white/20' },
        ];
        const randomIndex = Math.floor(Math.random() * scares.length);
        return scares[randomIndex];
    }, []);

    useEffect(() => {
        // --- The Scare Sequence ---
        // 1. Vibrate the phone
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 200]);
        }
        
        // 2. Play the selected sound
        try {
            const audio = new Audio(selectedScare.sound);
            audio.play();
        } catch (error) {
            console.error("Audio playback failed.", error);
        }

        // 3. After the scare is over, show the regular page content
        const timer = setTimeout(() => {
            setScareFinished(true);
        }, 1500); // The scare lasts for 1.5 seconds

        return () => clearTimeout(timer);
    }, [selectedScare]);

    const handleRestart = () => {
        localStorage.removeItem('pumpkinQuestProgress');
        navigate('1');
    };

    if (!scareFinished) {
        const ScareIcon = selectedScare.icon;
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden animate-screen-shake">
                <div className={`absolute inset-0 opacity-30 ${selectedScare.background}`}></div>
                <ScareIcon size={300} className={`text-white ${selectedScare.animation}`} />
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-black/60 backdrop-blur-md rounded-2xl border border-red-800/50 shadow-lg shadow-red-500/20">
            <h1 className="text-8xl font-bold text-red-500 drop-shadow-[0_2px_2px_rgba(255,0,0,0.5)]" style={{textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000'}}>Tricked!</h1>
            <p className="mt-4 text-2xl text-white font-sans">That wasn't the right QR code.</p>
            <p className="mt-2 text-xl text-gray-300 font-sans">Your progress has been reset. Return to the Reception to restart your quest.</p>
            <button 
                onClick={handleRestart}
                className="mt-8 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-xl transition-all transform hover:scale-105 shadow-md shadow-red-900 hover:shadow-red-700"
            >
                Return to Start
            </button>
        </div>
    );
};

export default TrickPage;