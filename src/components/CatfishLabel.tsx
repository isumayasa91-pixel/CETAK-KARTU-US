import React from 'react';
import { Fish, Sparkles, Waves } from 'lucide-react';
import { ClassConfig, AppConfig } from '../types';

interface CatfishLabelProps {
  classConfig: ClassConfig;
  appConfig: AppConfig;
}

const CatfishLabel: React.FC<CatfishLabelProps> = ({ classConfig, appConfig }) => {
  return (
    <div className="w-[19cm] max-w-full h-[9.5cm] bg-white p-4 flex flex-col items-center justify-between border-[5px] border-cyan-600 shadow-sm print:shadow-none print:border-cyan-700 break-inside-avoid mb-6 print:mb-4 relative overflow-hidden mx-auto font-sans rounded-xl print:rounded-none box-border">
      {/* Background Catfish Image */}
      <img 
        src="/catfish_background.jpg" 
        alt="Latar Belakang Lele" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0 mix-blend-multiply" 
        referrerPolicy="no-referrer" 
      />

      {/* Logos & Header */}
      <div className="w-full flex justify-between items-center border-b-2 border-cyan-600/30 pb-2 relative z-10 bg-white/60 backdrop-blur-[1px] rounded-t-md">
        <img 
          src={appConfig.logoLeft} 
          alt="Logo Kiri" 
          className="w-12 h-12 object-contain" 
          referrerPolicy="no-referrer" 
        />
        <div className="text-center flex-1 mx-3">
          <h1 className="text-[9px] font-black uppercase tracking-widest text-cyan-900 leading-tight">
            {appConfig.govName || 'PEMERINTAH KABUPATEN TABANAN'}
          </h1>
          <h2 className="text-xs font-black uppercase tracking-wider text-cyan-950 leading-tight">
            {appConfig.schoolName}
          </h2>
          <p className="text-[8px] font-bold text-cyan-800 uppercase tracking-widest leading-none mt-0.5">
            {appConfig.activityName} • {appConfig.academicYear.replace(/Tahun Pelajaran/i, 'Tahun Ajaran')}
          </p>
        </div>
        <img 
          src={appConfig.logoRight} 
          alt="Logo Kanan" 
          className="w-12 h-12 object-contain" 
          referrerPolicy="no-referrer" 
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full my-1 relative z-10">
        {/* Banner Title */}
        <div className="flex items-center gap-2 px-6 py-1.5 bg-cyan-700 text-white rounded-lg shadow-sm mb-2">
          <Fish size={22} className="text-amber-300" />
          <h2 className="text-xl font-black uppercase tracking-[0.2em]">
            BUDIDAYA IKAN LELE
          </h2>
          <Sparkles size={18} className="text-amber-300" />
        </div>

        {/* Class Name Highlight */}
        <div className="text-center">
          <div className="text-4xl font-black text-slate-900 uppercase tracking-widest border-2 border-cyan-600 px-8 py-2 rounded-xl bg-cyan-50/90 shadow-inner inline-block backdrop-blur-xs">
            KELAS {classConfig.name}
          </div>
        </div>
      </div>

      {/* Footer Slogan */}
      <div className="w-full border-t-2 border-cyan-600/30 pt-1.5 flex justify-between items-center text-[9px] font-black uppercase text-cyan-900 tracking-wider relative z-10 bg-white/60 backdrop-blur-[1px] rounded-b-md">
        <span className="flex items-center gap-1">
          <Waves size={12} className="text-cyan-600" /> PROGRAM BUDIDAYA IKAN LELE
        </span>
        <span>JAGA & MERAWAT BERSAMA 🐟</span>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-cyan-600 z-10"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-cyan-600 z-10"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-cyan-600 z-10"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-cyan-600 z-10"></div>
    </div>
  );
};

export default CatfishLabel;
