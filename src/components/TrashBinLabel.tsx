import React from 'react';
import { Trash2, Sparkles } from 'lucide-react';
import { ClassConfig, AppConfig } from '../types';

interface TrashBinLabelProps {
  classConfig: ClassConfig;
  appConfig: AppConfig;
}

const TrashBinLabel: React.FC<TrashBinLabelProps> = ({ classConfig, appConfig }) => {
  return (
    <div className="w-[19cm] max-w-full h-[9.5cm] bg-white p-4 flex flex-col items-center justify-between border-[5px] border-emerald-600 shadow-sm print:shadow-none print:border-emerald-700 break-inside-avoid mb-6 print:mb-4 relative overflow-hidden mx-auto font-sans rounded-xl print:rounded-none box-border">
      {/* Logos & Header */}
      <div className="w-full flex justify-between items-center border-b-2 border-emerald-600/30 pb-2">
        <img 
          src={appConfig.logoLeft} 
          alt="Logo Kiri" 
          className="w-12 h-12 object-contain" 
          referrerPolicy="no-referrer" 
        />
        <div className="text-center flex-1 mx-3">
          <h1 className="text-[9px] font-black uppercase tracking-widest text-emerald-800 leading-tight">
            {appConfig.govName || 'PEMERINTAH KABUPATEN TABANAN'}
          </h1>
          <h2 className="text-xs font-black uppercase tracking-wider text-emerald-900 leading-tight">
            {appConfig.schoolName}
          </h2>
          <p className="text-[8px] font-bold text-emerald-700 uppercase tracking-widest leading-none mt-0.5">
            {appConfig.activityName} • {appConfig.academicYear}
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
      <div className="flex-1 flex flex-col items-center justify-center w-full my-1">
        {/* Banner Title */}
        <div className="flex items-center gap-2 px-6 py-1.5 bg-emerald-600 text-white rounded-lg shadow-sm mb-2">
          <Trash2 size={20} className="text-amber-300" />
          <h2 className="text-xl font-black uppercase tracking-[0.25em]">
            PERMENTASI POCARI
          </h2>
          <Sparkles size={18} className="text-amber-300" />
        </div>

        {/* Class Name Highlight */}
        <div className="text-center">
          <div className="text-4xl font-black text-slate-900 uppercase tracking-widest border-2 border-emerald-600 px-8 py-2 rounded-xl bg-emerald-50 shadow-inner inline-block">
            KELAS {classConfig.name}
          </div>
        </div>
      </div>

      {/* Footer Slogan */}
      <div className="w-full border-t-2 border-emerald-600/30 pt-1.5 flex justify-between items-center text-[9px] font-black uppercase text-emerald-800 tracking-wider">
        <span>🌱 FERMENTASI SAMPAH ORGANIK</span>
        <span>PRODUKSI PUPUK POCARI (POC) 🧪</span>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-emerald-600"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-emerald-600"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-emerald-600"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-emerald-600"></div>
    </div>
  );
};

export default TrashBinLabel;
