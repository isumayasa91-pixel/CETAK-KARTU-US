import React from 'react';
import { ClassConfig, AppConfig } from '../types';

interface MapLabelProps {
  classConfig: ClassConfig;
  appConfig: AppConfig;
}

const MapLabel: React.FC<MapLabelProps> = ({ classConfig, appConfig }) => {
  return (
    <div className="w-[14cm] max-w-full h-[9cm] bg-white p-5 flex flex-col items-center justify-between border-[6px] border-double border-primary shadow-sm print:shadow-none print:border-primary break-inside-avoid mb-4 print:mb-2 relative overflow-hidden mx-auto box-border">
      {/* Logos & Header (Compact) */}
      <div className="w-full flex justify-between items-center mb-4 border-b border-primary/30 pb-2">
        <img src={appConfig.logoLeft} alt="" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
        <div className="text-center flex-1 mx-2">
          <h1 className="text-[8px] font-black uppercase tracking-wider text-text-main leading-tight">
            {appConfig.govName}
          </h1>
          <h2 className="text-[10px] font-black uppercase tracking-widest text-primary leading-tight">
            {appConfig.schoolName}
          </h2>
        </div>
        <img src={appConfig.logoRight} alt="" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="text-center space-y-2">
          <div className="inline-block px-6 py-2 bg-primary text-white rounded-lg mb-2">
            <h2 className="text-xl font-black uppercase tracking-[0.2em]">RUANGAN</h2>
          </div>
          
          <div className="relative">
            <span className="text-8xl font-black leading-none text-primary tracking-tighter tabular-nums drop-shadow-lg">
              {classConfig.roomName?.match(/\d+/)?.[0] || '00'}
            </span>
          </div>
          
          <div className="mt-4">
             <h3 className="text-xl font-black text-text-main uppercase tracking-widest border border-primary/20 px-4 py-2 rounded-lg inline-block">
               KELAS : {classConfig.name}
             </h3>
          </div>
        </div>
      </div>

      {/* Footer (Compact) */}
      <div className="w-full border-t border-primary/30 pt-2 text-center">
        <h4 className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">
          {appConfig.activityName}
        </h4>
        <p className="text-[8px] font-bold text-text-muted uppercase tracking-tight leading-none mt-1">
          {appConfig.academicYear}
        </p>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-accent/40"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-accent/40"></div>
    </div>
  );
};

export default MapLabel;
