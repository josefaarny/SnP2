import React from 'react';
import Confetti from './Confetti';
import { PumpkinIcon, RewardIcon } from './Icons';
import { PageProps } from '../types';

const CompletedPage: React.FC<PageProps> = ({ navigate }) => {
    const handleRestart = () => {
        localStorage.removeItem('pumpkinQuestProgress');
        navigate('0');
    };

    return (
        <div className="relative text-center space-y-6 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-yellow-400/50">
            <Confetti />
            <div className="flex justify-center text-yellow-400">
                <PumpkinIcon size={80} />
            </div>
            <h1 className="font-['Creepster'] text-6xl font-bold text-yellow-400 drop-shadow-lg">Quest Completed!</h1>
            <p className="text-xl text-gray-200 font-sans">Show this screen at the prize counter to claim your reward.</p>
            
            <div className="p-6 bg-purple-900/50 rounded-lg text-left space-y-4">
                 <h2 className="font-['Creepster'] text-4xl font-bold text-yellow-400 flex items-center gap-3"><RewardIcon/> Rewards:</h2>
                 <ul className="list-disc list-inside space-y-2 text-lg text-gray-200 font-sans">
                    <li><b>Kids:</b> lollipop or candy &amp; a free pass to bring your friend to skate.</li>
                    <li><b>Adults:</b> discover and purchase a secret Halloween cocktail or mocktail at EXIT Lounge.</li>
                 </ul>
            </div>

            <button 
                onClick={handleRestart}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md mt-4"
            >
                Play Again
            </button>
        </div>
    );
};

export default CompletedPage;