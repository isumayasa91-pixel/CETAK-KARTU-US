import React from 'react';
import { ClassConfig, AppConfig } from '../types';

interface SupervisorLabelProps {
  classConfig: ClassConfig;
  appConfig: AppConfig;
}

const SupervisorLabel: React.FC<SupervisorLabelProps> = ({ classConfig, appConfig }) => {
  return (
    <div className="w-[25.9cm] h-[5.9cm] bg-white px-8 py-3 flex flex-col items-center justify-between border-[2px] border-primary shadow-sm print:shadow-none print:border-black break-inside-avoid mb-6 relative overflow-hidden mx-auto font-sans">
      {/* Logos & Header (More compact for 5.9cm height) */}
      <div className="w-full flex justify-between items-center border-b border-primary/20 pb-1">
        <img src={appConfig.logoLeft} alt="" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
        <div className="text-center flex-1 mx-2">
          <h1 className="text-[8px] font-black uppercase tracking-widest text-text-muted leading-tight">
            PANITIA {appConfig.activityName}
          </h1>
          <h2 className="text-[11px] font-black uppercase tracking-[0.1em] text-primary leading-tight">
            {appConfig.schoolName}
          </h2>
        </div>
        <img src={appConfig.logoRight} alt="" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
      </div>

      {/* Main Content - Adjusted for width 25.9cm */}
      <div className="flex-1 flex items-center justify-center w-full gap-8">
        <div className="text-left">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">TEMPAT SOAL</h2>
        </div>
        <div className="relative inline-block px-12 py-1 bg-primary text-white rounded-lg shadow-md transform -skew-x-6">
          <span className="text-5xl font-black uppercase tracking-widest block transform skew-x-6">
            {classConfig.roomName || 'RUANG 00'}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-end text-[7px] font-black uppercase text-text-muted opacity-60 tracking-widest">
        <span>{appConfig.academicYear}</span>
        <span className="text-right italic">ADMINISTRASI PENGAWAS RUANG</span>
      </div>

      {/* Decorative Side Accents */}
      <div className="absolute top-0 bottom-0 left-0 w-2 bg-accent opacity-30"></div>
      <div className="absolute top-0 bottom-0 right-0 w-2 bg-accent opacity-30"></div>
    </div>
  );
};

export default SupervisorLabel;
