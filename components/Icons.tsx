import React from 'react';

interface IconProps {
    size?: number;
    className?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`text-green-400 ${className}`} width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l5 5l10 -10" />
    </svg>
);

export const CrossIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={`text-red-400 ${className}`} width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export const HintIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
       <path d="M12 9h.01" />
       <path d="M11 12h1v4h1" />
    </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ size = 32, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 4v16l13 -8z" />
    </svg>
);

export const ImportantIcon: React.FC<IconProps> = ({ size = 32, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 9v2m0 4v.01" />
        <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
    </svg>
);

export const PumpkinIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M11.246 3.014a5.246 5.246 0 0 1 7.508 7.507" />
        <path d="M11.25 3c-1.882 2.82 -2.78 5.64 -2.5 8.5" />
        <path d="M12.75 3c1.882 2.82 2.78 5.64 2.5 8.5" />
        <path d="M18 10c1.333 2.667 2 5.333 2 8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4a14.053 14.053 0 0 1 2 -8" />
        <path d="M12 3.014a5.246 5.246 0 0 0 -7.508 7.507" />
        <path d="M12.003 22.003c-2.43 0 -4.685 -1.05 -6.248 -3.003" />
        <path d="M11.997 22.003c2.43 0 4.685 -1.05 6.248 -3.003" />
        <path d="M10 14h.01" />
        <path d="M14 14h.01" />
        <path d="M10 17a2 2 0 0 0 4 0" />
    </svg>
);

export const RewardIcon: React.FC<IconProps> = ({ size = 28, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </svg>
);

export const ScaryFaceIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 3c7.2 0 9 5.4 9 9s-1.8 9 -9 9s-9 -5.4 -9 -9s1.8 -9 9 -9z" fill="currentColor" />
      <path d="M9 10h.01" strokeWidth="0" fill="#ff0000" />
      <path d="M15 10h.01" strokeWidth="0" fill="#ff0000" />
      <path d="M10 16a3.5 3.5 0 0 0 4 0" />
    </svg>
);