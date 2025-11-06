import React from 'react';
import type { TeamMember } from '../types';

const LinkedinIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
)

const TwitterIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.623 1.933 2.434 3.337 4.583 3.374-1.794 1.403-4.062 2.197-6.524 2.197-.424 0-.84-.025-1.249-.073 2.313 1.491 5.071 2.358 8.04 2.358 9.648 0 14.93-7.996 14.93-14.93 0-.227-.005-.452-.014-.676.984-.707 1.838-1.592 2.52-2.624z"/></svg>
)

interface TeamMemberCardProps {
    member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    return (
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center flex flex-col items-center">
            <img 
                src={member.imageUrl}
                alt={`Foto de ${member.name}`}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-slate-700"
            />
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-cyan-400 font-semibold">{member.role}</p>
            <p className="mt-2 text-sm text-slate-400 flex-grow">{member.bio}</p>
            <div className="mt-4 flex space-x-4 text-slate-400">
                <a href={member.socials.linkedin} className="hover:text-cyan-400 transition-colors" aria-label={`Perfil de LinkedIn de ${member.name}`}>
                    <LinkedinIcon />
                </a>
                <a href={member.socials.twitter} className="hover:text-cyan-400 transition-colors" aria-label={`Perfil de Twitter de ${member.name}`}>
                    <TwitterIcon />
                </a>
            </div>
        </div>
    );
};

export default TeamMemberCard;
