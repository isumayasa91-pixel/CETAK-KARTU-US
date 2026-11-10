import React from 'react';
import { ClassConfig, AppConfig } from '../types';

interface SupervisorLabelProps {
  classConfig: ClassConfig;
  appConfig: AppConfig;
}

const SupervisorLabel: React.FC<SupervisorLabelProps> = ({ classConfig, appConfig }) => {
  return (
    <div className="w-[30cm] max-w-full h-[7cm] print:w-[28.5cm] print:h-[6.8cm] bg-white px-8 py-3 flex flex-col items-center justify-between border-[3px] border-primary shadow-sm print:shadow-none print:border-black break-inside-avoid mb-6 print:mb-3 relative overflow-hidden mx-auto font-sans box-border rounded-lg print:rounded-none">
      {/* Logos & Header */}
      <div className="w-full flex justify-between items-center border-b-2 border-primary/20 pb-2">
        <img src={appConfig.logoLeft} alt="Logo" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
        <div className="text-center flex-1 mx-4">
          <h1 className="text-[10px] font-black uppercase tracking-widest text-text-muted leading-tight">
            PANITIA {appConfig.activityName}
          </h1>
          <h2 className="text-sm font-black uppercase tracking-[0.15em] text-primary leading-tight mt-0.5">
            {appConfig.schoolName}
          </h2>
          <p className="text-[9px] font-bold text-text-muted uppercase tracking-wider mt-0.5">
            {appConfig.govName} &bull; {appConfig.deptName}
          </p>
        </div>
        <img src={appConfig.logoRight} alt="Logo" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
      </div>

      {/* Main Content - Ruang Romawi */}
      <div className="flex-1 flex items-center justify-center w-full gap-8 my-1">
        <div className="text-left">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-text-muted">TEMPAT SOAL & BERKAS</h3>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">ADMINISTRASI PENGAWAS</span>
        </div>
        <div className="relative inline-block px-14 py-2 bg-primary text-white rounded-xl shadow-md border-2 border-primary">
          <span className="text-5xl font-black uppercase tracking-widest block">
            {classConfig.roomName || 'RUANG 00'}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary block">KELAS {classConfig.name}</span>
          <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">KAPASITAS: {classConfig.endNo - classConfig.startNo + 1} SISWA</span>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-center border-t border-slate-200 pt-1.5 text-[8px] font-black uppercase text-text-muted tracking-widest">
        <span>{appConfig.academicYear}</span>
        <span className="text-center text-primary font-bold">TEMPAT DUDUK PENGAWAS &bull; HARAP MENJAGA KETERTIBAN RUANG</span>
        <span className="text-right italic">SMP NEGERI 3 KEDIRI</span>
      </div>

      {/* Decorative Side Accents */}
      <div className="absolute top-0 bottom-0 left-0 w-3 bg-accent opacity-40"></div>
      <div className="absolute top-0 bottom-0 right-0 w-3 bg-accent opacity-40"></div>
    </div>
  );
};

export default SupervisorLabel;
