
import React from 'react';

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute w-2 h-4 rounded-sm" style={style}></div>
);

const Confetti: React.FC = () => {
    const colors = ['#f59e0b', '#fbbf24', '#a855f7', '#ec4899', '#34d399'];
    const pieces = Array.from({ length: 100 }).map((_, i) => {
        const style: React.CSSProperties = {
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animation: `fall ${2 + Math.random() * 4}s linear ${Math.random() * 2}s infinite`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: Math.random() + 0.2
        };
        return <ConfettiPiece key={i} style={style} />;
    });

    return <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">{pieces}</div>;
};

export default Confetti;
