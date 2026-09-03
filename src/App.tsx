/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Printer, Plus, Trash2, RefreshCw, Settings2, LayoutGrid, Map as MapIcon, CreditCard, FileText, MonitorCheck, Fish } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ParticipantCard from './components/ParticipantCard';
import SeatingPlan from './components/SeatingPlan';
import RoomLabel from './components/RoomLabel';
import MapLabel from './components/MapLabel';
import WorkProgram from './components/WorkProgram';
import SupervisorLabel from './components/SupervisorLabel';
import TrashBinLabel from './components/TrashBinLabel';
import CatfishLabel from './components/CatfishLabel';
import { Participant, ClassConfig, AppConfig } from './types';

const DEFAULT_CLASSES = [
  'VIIA', 'VIIB', 'VIIC', 'VIID', 'VIIE',
  'VIIIA', 'VIIIB', 'VIIIC', 'VIIID', 'VIIIE',
  'IXA', 'IXB', 'IXC', 'IXD', 'IXE'
];

export default function App() {
  const [config, setConfig] = useState<AppConfig>({
    schoolName: 'SMP NEGERI 3 KEDIRI',
    activityName: 'PENGELOLAAN SAMPAH BERBASIS SUMBER (PSBS)',
    academicYear: 'Tahun Ajaran 2026/2027',
    headerImg: 'https://i.imgur.com/GvJfOR3.jpeg',
    logoLeft: 'https://i.imgur.com/3gkzf9B.png',
    logoRight: 'https://i.imgur.com/qIiuWyK.png',
    govName: 'PEMERINTAH KABUPATEN TABANAN',
    deptName: 'DINAS PENDIDIKAN',
    address: 'Jl. By Pass Nyanyi NO 27 X Desa Beraban, Kediri, Tabanan-Bali'
  });

  const [classConfigs, setClassConfigs] = useState<ClassConfig[]>(
    DEFAULT_CLASSES.map((name, index) => {
      let endNo = 32;
      const cleanName = name.replace(/\s/g, '').toUpperCase();
      
      if (cleanName === 'VIID') {
        endNo = 27;
      } else if (cleanName === 'VIIE') {
        endNo = 28;
      } else if (['VIIIA', 'VIIIB'].includes(cleanName)) {
        endNo = 31;
      } else if (['VIIIC', 'VIIID', 'VIIIE'].includes(cleanName)) {
        endNo = 30;
      }
      
      return { 
        name, 
        startNo: 1, 
        endNo, 
        columns: 8,
        roomName: `Ruang ${(index + 1).toString().padStart(2, '0')}`
      };
    })
  );

  const [selectedClass, setSelectedClass] = useState<string | 'all'>('all');
  const [view, setView] = useState<'cards' | 'seating' | 'labels' | 'map-labels' | 'work-program' | 'supervisor' | 'trash' | 'catfish'>('cards');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const participants = useMemo(() => {
    const list: Participant[] = [];
    classConfigs.forEach(cls => {
      if (selectedClass !== 'all' && cls.name !== selectedClass) return;
      
      for (let i = cls.startNo; i <= cls.endNo; i++) {
        list.push({
          id: `${cls.name}-${i}`,
          number: i.toString().padStart(3, '0'),
          className: cls.name
        });
      }
    });
    return list;
  }, [classConfigs, selectedClass]);

  const handlePrint = () => {
    window.print();
  };

  const updateClassConfig = (index: number, field: keyof ClassConfig, value: string | number) => {
    const newConfigs = [...classConfigs];
    newConfigs[index] = { ...newConfigs[index], [field]: value };
    setClassConfigs(newConfigs);
  };

  const removeClass = (index: number) => {
    setClassConfigs(classConfigs.filter((_, i) => i !== index));
  };

  const addClass = () => {
    setClassConfigs([...classConfigs, { name: 'Baru', startNo: 1, endNo: 32 }]);
  };

  return (
    <div className="min-h-screen bg-app-bg font-sans text-text-main flex flex-col">
      {/* Header - Hidden on Print */}
      <header className="no-print bg-primary text-white px-8 py-4 flex items-center justify-between border-b-4 border-accent shadow-md">
        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-2 rounded">
            <LayoutGrid className="text-accent w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-widest uppercase">SAT 2026 • GENERATOR NOMOR BANGKU</h1>
            <p className="text-[10px] opacity-80 font-bold uppercase tracking-tight">Admin: {config.schoolName}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex bg-white/10 p-1 rounded-lg">
            <button 
              onClick={() => setView('cards')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                view === 'cards' ? 'bg-accent text-black shadow-sm' : 'text-white hover:bg-white/5'
              }`}
            >
              <CreditCard size={14} />
              Kartu
            </button>
            <button 
              onClick={() => setView('seating')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                view === 'seating' ? 'bg-accent text-black shadow-sm' : 'text-white hover:bg-white/5'
              }`}
            >
              <MapIcon size={14} />
              Denah
            </button>
            <button 
              onClick={() => setView('labels')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                view === 'labels' ? 'bg-accent text-black shadow-sm' : 'text-white hover:bg-white/5'
              }`}
            >
              <LayoutGrid size={14} />
              Label Ruang
            </button>
            <button 
              onClick={() => setView('map-labels')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                view === 'map-labels' ? 'bg-accent text-black shadow-sm' : 'text-white hover:bg-white/5'
              }`}
            >
              <CreditCard size={14} />
              Label Map
            </button>
            <button 
              onClick={() => setView('work-program')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                view === 'work-program' ? 'bg-accent text-black shadow-sm' : 'text-white hover:bg-white/5'
              }`}
            >
              <FileText size={14} />
              Proker
            </button>
            <button 
              onClick={() => setView('supervisor')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                view === 'supervisor' ? 'bg-accent text-black shadow-sm' : 'text-white hover:bg-white/5'
              }`}
            >
              <MonitorCheck size={14} />
              Label Meja
            </button>
            <button 
              onClick={() => setView('trash')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                view === 'trash' ? 'bg-accent text-black shadow-sm' : 'text-white hover:bg-white/5'
              }`}
            >
              <Trash2 size={14} />
              Label Fermentasi Pocari
            </button>
            <button 
              onClick={() => setView('catfish')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest transition-all ${
                view === 'catfish' ? 'bg-accent text-black shadow-sm' : 'text-white hover:bg-white/5'
              }`}
            >
              <Fish size={14} />
              Label Budidaya Lele
            </button>
          </div>

          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest text-white hover:bg-white/10 rounded transition-colors"
          >
            <Settings2 size={16} />
            Konfigurasi
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-accent hover:bg-amber-500 text-black text-xs font-black uppercase tracking-widest rounded shadow-lg transition-all active:scale-95"
          >
            <Printer size={16} />
            Cetak Semua
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Hidden on Print */}
        <aside className="no-print w-64 bg-white border-r border-border-main p-6 flex flex-col gap-4 overflow-y-auto">
          <h3 className="text-[11px] font-black uppercase text-text-muted tracking-widest mb-2">Pilih Kelas</h3>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setSelectedClass('all')}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
                selectedClass === 'all' 
                ? 'bg-primary border-primary text-white shadow-md' 
                : 'bg-white border-border-main text-text-main hover:border-primary'
              }`}
            >
              <span className="text-sm font-bold">Semua Kelas</span>
            </button>
            
            {classConfigs.map((cls, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                <button 
                  onClick={() => setSelectedClass(cls.name)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
                    selectedClass === cls.name 
                    ? 'bg-primary border-primary text-white shadow-md' 
                    : 'bg-white border-border-main text-text-main hover:border-primary'
                  }`}
                >
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-black whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]">{cls.name}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-tight ${selectedClass === cls.name ? 'text-white/60' : 'text-text-muted'}`}>
                      {cls.roomName || 'Tanpa Ruang'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-black block ${selectedClass === cls.name ? 'text-white' : 'text-text-muted'}`}>
                      {cls.endNo - cls.startNo + 1}
                    </span>
                    <span className={`text-[8px] font-bold uppercase ${selectedClass === cls.name ? 'text-white/60' : 'text-text-muted'}`}>Siswa</span>
                  </div>
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSettingsOpen(true);
                  }}
                  className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-accent text-black p-1.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  title="Edit Detail"
                >
                  <Settings2 size={12} />
                </button>
              </div>
            ))}
            <button 
              onClick={addClass}
              className="mt-4 flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-dashed border-border-main text-text-muted hover:text-primary hover:border-primary transition-all text-xs font-bold"
            >
              <Plus size={14} /> Tambah Kelas
            </button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
          {/* Settings Panel - Hidden on Print */}
          <AnimatePresence>
            {isSettingsOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="no-print overflow-hidden"
              >
                <div className="bg-white rounded-xl border border-border-main p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase text-primary tracking-widest">Informasi Umum</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] font-black text-text-muted uppercase mb-1 block">Nama Sekolah</label>
                        <input 
                          type="text" 
                          value={config.schoolName}
                          onChange={e => setConfig({...config, schoolName: e.target.value})}
                          className="w-full px-4 py-2 bg-app-bg border border-border-main rounded text-sm font-bold focus:border-primary outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-text-muted uppercase mb-1 block">Nama Kegiatan</label>
                        <input 
                          type="text" 
                          value={config.activityName}
                          onChange={e => setConfig({...config, activityName: e.target.value})}
                          className="w-full px-4 py-2 bg-app-bg border border-border-main rounded text-sm font-bold focus:border-primary outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-text-muted uppercase mb-1 block">Tahun Pelajaran</label>
                        <input 
                          type="text" 
                          value={config.academicYear}
                          onChange={e => setConfig({...config, academicYear: e.target.value})}
                          className="w-full px-4 py-2 bg-app-bg border border-border-main rounded text-sm font-bold focus:border-primary outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                      <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase text-primary tracking-widest">Edit Daftar Kelas</h3>
                        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                          {classConfigs.map((cls, idx) => (
                            <div key={idx} className="bg-app-bg p-4 rounded-xl border border-border-main flex flex-col gap-3 shadow-sm">
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <label className="text-[9px] font-black text-text-muted uppercase">Nama</label>
                                  <input 
                                    type="text" 
                                    value={cls.name}
                                    onChange={e => updateClassConfig(idx, 'name', e.target.value)}
                                    className="w-20 px-2 py-1 bg-white border border-border-main rounded text-xs font-black"
                                  />
                                </div>
                                <div className="flex items-center gap-2">
                                  <label className="text-[9px] font-black text-text-muted uppercase">Ruang</label>
                                  <input 
                                    type="text" 
                                    value={cls.roomName || ''}
                                    onChange={e => updateClassConfig(idx, 'roomName', e.target.value)}
                                    className="w-24 px-2 py-1 bg-white border border-border-main rounded text-xs font-bold"
                                    placeholder="Ruang"
                                  />
                                </div>
                                <button 
                                  onClick={() => removeClass(idx)}
                                  className="text-text-muted hover:text-red-600 transition-colors p-1"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                              
                              <div className="grid grid-cols-4 gap-2 items-end">
                                <div>
                                  <label className="text-[9px] font-black text-text-muted uppercase block mb-1 text-center">No Awal</label>
                                  <input 
                                    type="number" 
                                    value={cls.startNo}
                                    onChange={e => updateClassConfig(idx, 'startNo', parseInt(e.target.value) || 0)}
                                    className="w-full px-2 py-1 bg-white border border-border-main rounded text-xs text-center font-bold"
                                  />
                                </div>
                                <div>
                                  <label className="text-[9px] font-black text-text-muted uppercase block mb-1 text-center">Jml Siswa</label>
                                  <input 
                                    type="number" 
                                    value={cls.endNo - cls.startNo + 1}
                                    onChange={e => {
                                      const count = parseInt(e.target.value) || 0;
                                      updateClassConfig(idx, 'endNo', cls.startNo + count - 1);
                                    }}
                                    className="w-full px-2 py-1 bg-primary text-white border border-primary rounded text-xs text-center font-black"
                                  />
                                </div>
                                <div>
                                  <label className="text-[9px] font-black text-text-muted uppercase block mb-1 text-center">No Akhir</label>
                                  <input 
                                    type="number" 
                                    value={cls.endNo}
                                    onChange={e => updateClassConfig(idx, 'endNo', parseInt(e.target.value) || 0)}
                                    className="w-full px-2 py-1 bg-white border border-border-main rounded text-xs text-center font-bold"
                                  />
                                </div>
                                <div>
                                  <label className="text-[9px] font-black text-text-muted uppercase block mb-1 text-center">Kolom</label>
                                  <input 
                                    type="number" 
                                    value={cls.columns || 8}
                                    onChange={e => updateClassConfig(idx, 'columns', parseInt(e.target.value) || 1)}
                                    className="w-full px-2 py-1 bg-white border border-border-main rounded text-xs text-center font-bold"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats Bar - Hidden on Print */}
          <div className="no-print flex gap-6 bg-white p-6 rounded-xl border border-border-main shadow-sm">
            <div className="flex-1 border-r border-border-main last:border-0">
              <p className="text-[10px] font-black uppercase text-text-muted tracking-widest mb-1">Total Peserta</p>
              <p className="text-2xl font-black text-primary">{participants.length}</p>
            </div>
            <div className="flex-1 border-r border-border-main last:border-0">
              <p className="text-[10px] font-black uppercase text-text-muted tracking-widest mb-1">Total Kelas</p>
              <p className="text-2xl font-black text-primary">{classConfigs.length}</p>
            </div>
            <div className="flex-1 border-r border-border-main last:border-0">
              <p className="text-[10px] font-black uppercase text-text-muted tracking-widest mb-1">Status Sistem</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-lg font-black text-emerald-600 uppercase tracking-tighter">Siap Cetak</p>
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="flex flex-col gap-6">
            <div className="no-print flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-primary uppercase tracking-tight">Preview Cetak</h2>
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Menampilkan seluruh label peserta</p>
              </div>
              <p className="text-[10px] font-black text-text-muted uppercase bg-white px-3 py-1 rounded-full border border-border-main">
                Estimasi: {Math.ceil(participants.length / 8)} Lembar A4
              </p>
            </div>

            <div className={`flex flex-wrap justify-center gap-6 print:gap-0 ${
              view === 'cards' 
                ? 'print:grid print:grid-cols-2 print:w-[17cm] print:mx-auto print-grid' 
                : view === 'supervisor'
                ? 'print:block print-landscape'
                : (view === 'trash' || view === 'catfish')
                ? 'print:block print-3-per-page'
                : 'print:block'
            }`}>
              {view === 'cards' ? (
                participants.map(p => {
                  const clsConfig = classConfigs.find(c => c.name === p.className);
                  return (
                    <ParticipantCard 
                      key={p.id} 
                      participant={p} 
                      config={config} 
                      roomName={clsConfig?.roomName} 
                    />
                  );
                })
              ) : view === 'seating' ? (
                classConfigs
                  .filter(cls => selectedClass === 'all' || cls.name === selectedClass)
                  .map(cls => (
                    <SeatingPlan key={cls.name} classConfig={cls} appConfig={config} />
                  ))
              ) : view === 'labels' ? (
                classConfigs
                  .filter(cls => selectedClass === 'all' || cls.name === selectedClass)
                  .map(cls => (
                    <RoomLabel key={cls.name} classConfig={cls} appConfig={config} />
                  ))
              ) : view === 'map-labels' ? (
                classConfigs
                  .filter(cls => selectedClass === 'all' || cls.name === selectedClass)
                  .map(cls => (
                    <MapLabel key={cls.name} classConfig={cls} appConfig={config} />
                  ))
              ) : view === 'work-program' ? (
                <WorkProgram appConfig={config} />
              ) : view === 'supervisor' ? (
                classConfigs
                  .filter(cls => selectedClass === 'all' || cls.name === selectedClass)
                  .map(cls => (
                    <SupervisorLabel key={cls.name} classConfig={cls} appConfig={config} />
                  ))
              ) : view === 'trash' ? (
                classConfigs
                  .filter(cls => selectedClass === 'all' || cls.name === selectedClass)
                  .map(cls => (
                    <TrashBinLabel key={cls.name} classConfig={cls} appConfig={config} />
                  ))
              ) : (
                classConfigs
                  .filter(cls => selectedClass === 'all' || cls.name === selectedClass)
                  .map(cls => (
                    <CatfishLabel key={cls.name} classConfig={cls} appConfig={config} />
                  ))
              )}
            </div>
            
            {participants.length === 0 && (
              <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border-2 border-dashed border-border-main text-text-muted">
                <RefreshCw size={48} className="mb-4 opacity-20 animate-spin-slow" />
                <p className="font-black uppercase tracking-widest text-sm">Data Kosong</p>
                <p className="text-xs font-bold">Silakan tambahkan kelas di panel konfigurasi.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer - Hidden on Print */}
      <footer className="no-print py-6 border-t border-border-main bg-white text-center text-text-muted text-[10px] font-black uppercase tracking-[0.2em]">
        SAT Label Management System &bull; &copy; 2026
      </footer>
    </div>
  );
}
