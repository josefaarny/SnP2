import React from 'react';

interface IconProps {
    size?: number;
    className?: string;
}

const defaultSize = 24;

export const PlayIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
);

export const ImportantIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export const CrossIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const HintIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 8.5c0 3.8-3.33 7-6 7s-6-3.2-6-7c0-3.8 2.5-7.5 6-7.5s6 3.7 6 7.5z"></path>
        <path d="M12 15.5V18"></path>
        <path d="M10 20h4"></path>
    </svg>
);


export const PumpkinIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 10c0-1.11-.9-2-2-2h-1V6c0-1.11-.9-2-2-2h-2c-1.11 0-2 .89-2 2v2H9V6c0-1.11-.9-2-2-2H5c-1.11 0-2 .89-2 2v2H2c-1.11 0-2 .89-2 2v1c0 .53.21 1.04.59 1.41.01.01 0 .02-.01.03C.21 12.8 0 13.4 0 14c0 1.11.9 2 2 2h1v1c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-1h1c1.11 0 2-.89 2-2 0-.59-.2-1.15-.58-1.54.01-.01.01-.02.02-.03.38-.38.56-.9.56-1.43v-1zM9 16c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2zm6 0c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2z"/>
    </svg>
);

export const RewardIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 12 20 22 4 22 4 12"></polyline>
        <rect x="2" y="7" width="20" height="5"></rect>
        <line x1="12" y1="22" x2="12" y2="7"></line>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
);

export const VolumeUpIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    </svg>
);

export const CameraIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
    </svg>
);

export const SilentModeOffIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
        <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
        <path d="M18 8a6 6 0 0 0-9.33-5"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
);


// --- New Scare Icons ---

export const DemonicFaceIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.24 13.76L12 15l-2.24.76L8.2 18h7.6l-1.56-2.24zM9.5 9C8.67 9 8 9.67 8 10.5S8.67 12 9.5 12s1.5-.67 1.5-1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S15.33 9 14.5 9z"/>
    </svg>
);

export const GhostIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.486 2 2 6.486 2 12v10h20V12C22 6.486 17.514 2 12 2zm-3 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm6 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
    </svg>
);

export const SkullIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.486 2 2 6.486 2 12v4c0 2.206 1.794 4 4 4h12c2.206 0 4-1.794 4-4v-4C22 6.486 17.514 2 12 2zm-3 12c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm6 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/>
        <path d="M12 17c-1.654 0-3 .897-3 2h6c0-1.103-1.346-2-3-2z"/>
    </svg>
);

export const SpiderIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 10c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-7-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM5 10c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm15.905 5.586L23 18l-2.414-2.095-2.5 1.443L19 15zM8.5 17.443L6.086 15.905 4 18l2.095-2.414L8.5 17.443zM12 20.944l-1.5-2.598L12 17l1.5 1.346L12 20.944zM12 3.056l1.5 2.598L12 7l-1.5-1.346L12 3.056zM8.5 6.557L10.914 8.095 13 6l-2.095-2.414L8.5 6.557zM15.5 6.557L13.086 8.095 11 6l2.095-2.414L15.5 6.557z"/>
    </svg>
);

export const DollIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <circle cx="12" cy="12" r="10" fill="#E0E0E0"/>
        <circle cx="9.5" cy="10.5" r="1.5" fill="black"/>
        <circle cx="14.5" cy="10.5" r="1.5" fill="black"/>
        <path d="M 8 15 Q 12 14, 16 15" stroke="black" strokeWidth="1" fill="transparent"/>
        <path d="M 14 3 L 18 8" stroke="black" strokeWidth="2"/>
        <path d="M 11 20 L 7 16" stroke="black" strokeWidth="2"/>
    </svg>
);

export const HandprintIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M8.5 2.5C4.91 2.5 2 5.41 2 9c0 2.28 1.21 4.35 3.09 5.5l.39.24V21c0 .55.45 1 1 1h1.5c.55 0 1-.45 1-1v-5h1v5c0 .55.45 1 1 1h1.5c.55 0 1-.45 1-1v-5h1v5c0 .55.45 1 1 1H16c.55 0 1-.45 1-1v-5.03c1.61-.99 2.75-2.81 2.96-4.97H22v-2h-2.04c-.3-4.04-3.48-7-7.46-7H10c-.55 0-1 .45-1 1s.45 1 1 1h2.5c2.97 0 5.45 2.21 5.92 5H8.5V4.5C8.5 3.95 8.05 3.5 7.5 3.5S6.5 3.95 6.5 4.5v10.38C5.07 13.97 4 12.28 4 10.5 4 6.91 5.91 5 8.5 5h3c.55 0 1-.45 1-1s-.45-1-1-1h-3z"/>
    </svg>
);

export const ShadowFigureIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2a4 4 0 100 8 4 4 0 000-8zM8 14a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2H9z" clipRule="evenodd"/>
        <path d="M3 21a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"/>
    </svg>
);

export const DistortedFaceIcon: React.FC<IconProps> = ({ size = defaultSize, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M8 12H16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9H9.01" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 9H15.01" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7H21" />
        <path d="M3 15H21" />
        <path d="M8 16C8 16 9.5 14 12 14C14.5 14 16 16 16 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);