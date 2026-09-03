import React from 'react';
import { Participant, AppConfig } from '../types';

interface ParticipantCardProps {
  participant: Participant;
  config: AppConfig;
  roomName?: string;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ participant, config, roomName }) => {
  return (
    <div className="w-[8cm] h-[5cm] border-[3px] border-double border-text-main p-2 flex flex-col justify-between bg-card-bg text-text-main rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.1)] print:shadow-none print:border-black break-inside-avoid mb-4 mr-4 print:mb-0 print:mr-0 print:border-1 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
        <img src={config.logoRight} alt="" className="w-32 h-32 object-contain" referrerPolicy="no-referrer" />
      </div>

      <div className="text-center border-b border-black pb-1 mb-1 flex items-center justify-between gap-1 relative z-10">
        <img src={config.logoLeft} alt="" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
        <div className="flex-1">
          <h2 className="text-[9px] font-extrabold uppercase tracking-tight text-text-main leading-none mb-0.5">{config.schoolName}</h2>
          <h1 className="text-[10px] font-black uppercase text-primary leading-none mb-0.5">{config.activityName}</h1>
          <p className="text-[8px] font-bold text-text-muted leading-none">{config.academicYear}</p>
        </div>
        <img src={config.logoRight} alt="" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow relative z-10">
        <span className="text-[42px] font-black text-black leading-none drop-shadow-sm">{participant.number}</span>
      </div>
      
      <div className="flex justify-between items-center border-t border-slate-200 pt-1 mt-1 relative z-10">
        <div className="flex flex-col">
          <span className="text-[8px] uppercase font-bold text-text-muted leading-none">Ruang / Kelas</span>
          <span className="text-[10px] font-extrabold">{roomName || 'RUANG 01'}</span>
        </div>
        <div className="bg-accent text-black px-2 py-0.5 rounded-sm font-black text-[9px] uppercase shadow-sm">
          {participant.className}
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
