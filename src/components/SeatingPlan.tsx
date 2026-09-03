import React from 'react';
import { ClassConfig, AppConfig } from '../types';
import { UserCheck } from 'lucide-react';

interface SeatingPlanProps {
  classConfig: ClassConfig;
  appConfig: AppConfig;
}

const SeatingPlan: React.FC<SeatingPlanProps> = ({ classConfig, appConfig }) => {
  const { name, startNo, endNo, columns = 8 } = classConfig;
  const total = endNo - startNo + 1;
  const rows = Math.ceil(total / columns);

  // Updated to user request: Supervisor at bottom (South), No Door
  const supervisorPos: 'north' | 'south' | 'east' | 'west' = 'south';

  const grid = [];
  // Numbering starts from bottom-right relative to supervisor at bottom
  for (let r = 0; r < rows; r++) {
    const row = [];
    const rowFromBottom = rows - 1 - r;
    for (let c = 0; c < columns; c++) {
      let index;
      // Start smallest at supervisor's right (which is rightmost column in south view)
      if (rowFromBottom % 2 === 0) {
        index = rowFromBottom * columns + (columns - 1 - c);
      } else {
        index = rowFromBottom * columns + c;
      }
      
      if (index < total) {
        row.push((startNo + index).toString().padStart(3, '0'));
      } else {
        row.push(null);
      }
    }
    grid.push(row);
  }

  const renderIndicator = (type: 'supervisor', pos: string) => {
    let positionClasses = "";
    let rotateClass = "";

    if (pos === 'north') {
      positionClasses = "absolute -top-10 left-1/2 -translate-x-1/2";
    } else if (pos === 'south') {
      positionClasses = "absolute -bottom-20 left-1/2 -translate-x-1/2";
    }

    return (
      <div className={`${positionClasses} ${rotateClass} flex flex-col items-center z-20`}>
        {/* Supervisor's Desk */}
        <div className="w-32 h-12 bg-amber-50 border-2 border-amber-600 rounded-sm flex flex-col items-center justify-center shadow-lg relative z-20">
          <div className="absolute -top-5 w-10 h-6 bg-amber-600/20 border-2 border-amber-600 border-b-0 rounded-t-md flex items-center justify-center">
             <div className="w-5 h-1.5 bg-amber-600 rounded-full"></div>
          </div>
          <UserCheck size={18} className="text-amber-700 mb-0.5" />
          <span className="text-[9px] font-black text-amber-800 uppercase tracking-wider leading-none">MEJA PENGAWAS</span>
        </div>
        
        {/* Supervisor's Chair (Top Down) */}
        <div className="w-16 h-8 border-2 border-amber-500 rounded-b-xl bg-amber-100 mt-[-2px] shadow-inner flex justify-center items-end pb-1 border-t-0 opacity-80 z-10">
          <div className="w-10 h-1 bg-amber-300 rounded-full"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[18cm] mx-auto bg-white p-6 border-[6px] border-double border-primary shadow-sm print:shadow-none print:border-primary break-after-page mb-8 relative overflow-hidden print:overflow-visible print:m-0 print:max-w-none print:w-full print:scale-[0.92] print:origin-top print:pt-[1.5cm]">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <img src={appConfig.logoRight} alt="" className="w-[10cm] h-[10cm] object-contain" referrerPolicy="no-referrer" />
      </div>

      <div className="text-center pb-3 mb-4 flex items-center justify-between gap-4 relative z-10">
        <img src={appConfig.logoLeft} alt="" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
        <div className="flex-1">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-main leading-tight">{appConfig.govName}</h4>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-main leading-tight">{appConfig.deptName}</h4>
          <h2 className="text-lg font-black uppercase tracking-[0.1em] text-primary leading-tight my-1">{appConfig.schoolName}</h2>
          <p className="text-[8px] font-bold text-text-muted italic leading-tight mb-1">{appConfig.address}</p>
          <div className="h-[1.5px] bg-primary w-full mb-1"></div>
          <h3 className="text-sm font-black text-text-main uppercase tracking-widest">Denah Tempat Duduk Peserta</h3>
          <p className="text-[9px] font-bold text-text-muted uppercase tracking-tighter">{appConfig.activityName} • {classConfig.roomName || 'Ruang'} / Kelas: {name}</p>
        </div>
        <img src={appConfig.logoRight} alt="" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
      </div>

      <div className="relative flex justify-center pt-8 pb-24 z-10 print:pt-4 print:pb-20">
        <div className="relative border-2 border-slate-800 pt-8 pb-16 px-4 rounded-lg bg-slate-50 min-w-full print:pt-4 print:pb-12 print:px-3 print:border-slate-400">
          {/* Indicators */}
          {renderIndicator('supervisor', supervisorPos)}

          <div 
            className="grid gap-2 print:gap-1.5" 
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {grid.map((row, rIdx) => (
              row.map((seat, cIdx) => (
                <div 
                  key={`${rIdx}-${cIdx}`}
                  className={`aspect-square flex flex-col items-center justify-center border-2 rounded shadow-sm transition-all relative overflow-hidden ${
                    seat 
                    ? 'bg-white border-slate-800' 
                    : 'bg-transparent border-dashed border-slate-200'
                  }`}
                >
                  {seat && (
                    <>
                      {/* Stylized Chair (Top View) */}
                      <div className="absolute top-0.5 w-6 h-4 border border-slate-300 rounded-sm bg-slate-50 flex items-start justify-center">
                        <div className="w-4 h-0.5 bg-slate-300 rounded-full mt-0.5"></div>
                      </div>
                      
                      {/* Number Content */}
                      <div className="mt-3 flex flex-col items-center z-10">
                        <span className="text-[6px] font-black text-slate-400 uppercase leading-none mb-0.5">No</span>
                        <span className="text-lg font-black text-slate-900 leading-none">{seat}</span>
                      </div>
                      
                      {/* Desk Edge Accent */}
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-slate-100 border-t border-slate-200"></div>
                    </>
                  )}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-8 text-center">
        <div className="text-[8px] font-bold text-text-muted italic">
          * Alur nomor mengikuti pola huruf S mulai dari baris depan.
        </div>
        <div className="text-[8px] font-bold text-text-muted">
          Dicetak pada: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default SeatingPlan;
