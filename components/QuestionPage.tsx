import React, { useState, useCallback } from 'react';
import { GAME_DATA } from '../constants/gameData';
import QrScanner from './QrScanner';
import Confetti from './Confetti';
import { CheckIcon, CrossIcon, HintIcon } from './Icons';
import { NavigateFunction } from '../types';

interface QuestionPageProps {
    stepId: number;
    navigate: NavigateFunction;
}

const QuestionPage: React.FC<QuestionPageProps> = ({ stepId, navigate }) => {
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
    const [showScanner, setShowScanner] = useState(false);

    const stepData = GAME_DATA.find(step => step.id === stepId);

    if (!stepData) {
        return <div className="text-center text-red-500">Error: Question not found.</div>;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedAnswer = answer.trim().toLowerCase();
        if (!trimmedAnswer) return;

        let isCorrect = false;
        if (stepData.isNumericRange) {
            const num = parseInt(trimmedAnswer, 10);
            if (!isNaN(num) && num >= 0 && num <= 50) {
                isCorrect = true;
            }
        } else {
            isCorrect = stepData.answers.includes(trimmedAnswer);
        }

        if (isCorrect) {
            setStatus('correct');
            const savedProgress = parseInt(localStorage.getItem('pumpkinQuestProgress') || '0', 10);
            if (stepData.id > savedProgress) {
                localStorage.setItem('pumpkinQuestProgress', stepData.id.toString());
            }
        } else {
            setStatus('incorrect');
            setTimeout(() => setStatus('idle'), 2000);
        }
    };
    
    const handleScanSuccess = useCallback((scannedUrl: string) => {
        try {
            // By providing window.location.href as a base, we can correctly
            // parse both full URLs and relative paths (e.g., "/?step=2").
            const url = new URL(scannedUrl, window.location.href);
            const newStep = url.searchParams.get('step');
            if (newStep) {
                // Navigate internally without a page reload
                navigate(newStep);
            } else {
                // If the URL is valid but has no step, it's a "trick"
                navigate('trick');
            }
        } catch (_) {
            console.error("Scanned QR is not a valid URL.");
            alert("Scanned QR code is not a valid link.");
            setShowScanner(false);
        }
    }, [navigate]);

    const handleCloseScanner = useCallback(() => {
        setShowScanner(false);
    }, []);


    if (status === 'correct') {
        if (stepData.id === GAME_DATA.length) {
            // Navigate to a dedicated 'completed' state instead of reusing the final step ID
            navigate('completed');
            return null; // Return null to prevent rendering anything else while navigating
        }

        return (
            <div className="relative text-center space-y-6 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-green-500/50">
                <Confetti />
                <div className="flex justify-center">
                   <CheckIcon size={80} />
                </div>
                <h2 className="text-5xl font-bold text-green-400">Correct!</h2>
                <div className="p-4 bg-purple-900/50 rounded-lg">
                    <h3 className="text-3xl font-semibold text-yellow-400 flex items-center justify-center gap-2"><HintIcon/> Your next hint:</h3>
                    <p className="text-lg text-gray-200 mt-2 font-sans">"{stepData.hint}"</p>
                </div>
                <button 
                    onClick={() => setShowScanner(true)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md"
                >
                    Scan Next QR Code
                </button>
                {showScanner && <QrScanner onClose={handleCloseScanner} onScanSuccess={handleScanSuccess} />}
            </div>
        );
    }
    
    return (
        <div className="text-center space-y-6 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-red-700/50">
             <h2 className="text-3xl font-semibold text-gray-300">Step {stepData.id}: <span className="text-yellow-400">{stepData.location}</span></h2>
            <p className="text-4xl font-bold font-sans">{stepData.question}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full text-center bg-gray-900/50 border-2 border-purple-500 text-white text-2xl rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition font-sans"
                />
                <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md disabled:opacity-50"
                    disabled={!answer}
                >
                    Submit Answer
                </button>
            </form>
            {status === 'incorrect' && (
                <div className="flex items-center justify-center gap-2 text-red-400 text-xl font-semibold animate-screen-shake font-sans">
                    <CrossIcon />
                    Incorrect. Try again.
                </div>
            )}
        </div>
    );
};

export default QuestionPage;