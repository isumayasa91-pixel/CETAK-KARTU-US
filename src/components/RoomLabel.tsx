import React from 'react';
import { ClassConfig, AppConfig } from '../types';

interface RoomLabelProps {
  classConfig: ClassConfig;
  appConfig: AppConfig;
}

const RoomLabel: React.FC<RoomLabelProps> = ({ classConfig, appConfig }) => {
  return (
    <div className="w-full max-w-[19cm] h-[25cm] mx-auto bg-white p-8 flex flex-col items-center justify-between border-[12px] border-double border-primary shadow-sm print:shadow-none print:border-primary break-after-page mb-8 relative overflow-hidden print:overflow-visible print:m-0 print:w-[19cm] print:h-[26cm] print:scale-[0.95] print:origin-top print:pt-2 box-border">
      {/* Logos & Header */}
      <div className="w-full flex justify-between items-center mb-8">
        <img src={appConfig.logoLeft} alt="" className="w-24 h-24 object-contain" referrerPolicy="no-referrer" />
        <div className="text-center flex-1 mx-4 border-b-2 border-primary pb-2">
          <h1 className="text-xl font-black uppercase tracking-[0.2em] text-text-main leading-tight mb-1">
            {appConfig.govName}
          </h1>
          <h2 className="text-lg font-black uppercase tracking-widest text-text-main leading-tight">
            {appConfig.deptName}
          </h2>
          <h1 className="text-3xl font-black uppercase tracking-[0.1em] text-primary leading-tight mt-2">
            {appConfig.schoolName}
          </h1>
        </div>
        <img src={appConfig.logoRight} alt="" className="w-24 h-24 object-contain" referrerPolicy="no-referrer" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full py-4">
        <div className="text-center space-y-6">
          <div className="inline-block px-10 py-4 border-4 border-primary rounded-2xl bg-primary text-white mb-6 shadow-xl">
            <h2 className="text-5xl font-black uppercase tracking-[0.3em]">RUANGAN</h2>
          </div>
          
          <div className="relative">
            <span className="text-[18rem] font-black leading-none text-primary tracking-tighter tabular-nums drop-shadow-2xl">
              {classConfig.roomName?.match(/\d+/)?.[0] || '00'}
            </span>
          </div>
          
          <div className="mt-8">
             <div className="h-1.5 w-32 bg-accent mx-auto mb-6 rounded-full"></div>
             <h3 className="text-3xl font-black text-text-main uppercase tracking-widest border-2 border-primary/20 px-6 py-3 rounded-full inline-block">
               KELAS : {classConfig.name}
             </h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t-4 border-primary pt-6 text-center">
        <h4 className="text-xl font-black text-primary uppercase tracking-[0.2em] mb-1">
          {appConfig.activityName}
        </h4>
        <p className="text-lg font-bold text-text-muted uppercase tracking-widest">
          {appConfig.academicYear}
        </p>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-accent"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-accent"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-accent"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-8 border-r-8 border-accent"></div>
    </div>
  );
};

export default RoomLabel;
