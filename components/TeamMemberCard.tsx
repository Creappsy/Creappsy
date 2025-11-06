import React, { useState, useCallback } from 'react';
import type { TeamMember } from '../types';

const LinkedinIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
);

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
);


interface TeamMemberCardProps {
    member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    const [imageStyle, setImageStyle] = useState<React.CSSProperties>({});

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const { clientWidth: width, clientHeight: height } = e.currentTarget;
        const { offsetX: x, offsetY: y } = e.nativeEvent;

        const rotateY = 7 * ((x - width / 2) / (width / 2));
        const rotateX = -7 * ((y - height / 2) / (height / 2));

        setImageStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`,
            transition: 'transform 0.1s linear'
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setImageStyle({
            transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
        });
    }, []);

    return (
        <div className="team-member-card bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center flex flex-col items-center">
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-32 h-32 rounded-full mb-4"
                style={{ perspective: '400px' }}
            >
                <img 
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full rounded-full object-cover border-4 border-slate-700"
                    style={imageStyle}
                />
            </div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-cyan-400 font-semibold">{member.role}</p>
            <p className="mt-2 text-sm text-slate-400 flex-grow">{member.bio}</p>
            <div className="mt-4 flex space-x-4 text-slate-400">
                <a href={member.socials.linkedin} className="hover:text-cyan-400 transition-colors" aria-label={`Perfil de LinkedIn de ${member.name}`}>
                    <LinkedinIcon />
                </a>
                <a href={member.socials.twitter} className="hover:text-cyan-400 transition-colors" aria-label={`Perfil de Twitter de ${member.name}`}>
                    <XIcon />
                </a>
            </div>
        </div>
    );
};

export default TeamMemberCard;