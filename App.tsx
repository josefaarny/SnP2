import React, { useState, useEffect, useCallback } from 'react';
import WelcomePage from './components/WelcomePage';
import RulesPage from './components/RulesPage';
import TrickPage from './components/TrickPage';
import QuestionPage from './components/QuestionPage';
import CompletedPage from './components/CompletedPage';
import AdminPage from './components/AdminPage'; // New import for the admin panel
import { GAME_DATA } from './constants/gameData';

const App: React.FC = () => {
    // Initialize state from URL on first load
    const [step, setStep] = useState<string | null>(() => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('step');
    });

    // Function to update URL and state without reloading
    const navigate = useCallback((newStep: string) => {
        const url = new URL(window.location.href);
        url.searchParams.delete('admin'); // Ensure admin flag is cleared on navigation
        if (newStep === '0' || newStep === null) {
            url.search = '';
        } else {
            url.searchParams.set('step', newStep);
        }
        window.history.pushState({ step: newStep }, '', url.toString());
        setStep(url.searchParams.get('step'));
    }, []);

    // Listen for browser back/forward buttons
    useEffect(() => {
        const handlePopState = () => {
            const urlParams = new URLSearchParams(window.location.search);
            setStep(urlParams.get('step'));
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const getPage = () => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('admin') === 'true') {
            return <AdminPage navigate={navigate} />;
        }
        
        const savedProgress = parseInt(localStorage.getItem('pumpkinQuestProgress') || '0', 10);

        if (step === null || step === '0') {
            return <WelcomePage navigate={navigate} />;
        }
        if (step === '0.1') {
            return <RulesPage navigate={navigate} />;
        }
        if (step === 'trick') {
            return <TrickPage navigate={navigate} />;
        }
        
        // If the quest is fully completed, always show the completed page.
        if (step === 'completed' || savedProgress === GAME_DATA.length) {
            return <CompletedPage navigate={navigate} />;
        }
        
        const currentStepId = parseInt(step, 10);

        // If the step is invalid, show the trick page.
        if (isNaN(currentStepId) || currentStepId < 1 || currentStepId > GAME_DATA.length) {
            return <TrickPage navigate={navigate} />;
        }
        
        // Prevent skipping ahead. Allow step 1 even if progress is 0.
        if (currentStepId > 1 && currentStepId > savedProgress + 1) {
            return <TrickPage navigate={navigate} />;
        }

        return <QuestionPage stepId={currentStepId} navigate={navigate} />;
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center p-4 font-sans text-white">
            <div className="w-full max-w-lg mx-auto">
                 <div className="page-container" key={step || 'welcome'}>
                    {getPage()}
                </div>
            </div>
        </main>
    );
};

export default App;