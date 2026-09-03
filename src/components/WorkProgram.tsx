import React from 'react';
import { AppConfig } from '../types';

interface WorkProgramProps {
  appConfig: AppConfig;
}

const WorkProgram: React.FC<WorkProgramProps> = ({ appConfig }) => {
  const currentDate = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="w-full max-w-[21cm] min-h-[29.7cm] mx-auto bg-white p-16 border-[1px] border-slate-200 shadow-sm print:shadow-none print:border-none print:p-8 print:m-0 break-after-page mb-8 font-serif leading-relaxed text-slate-900">
      {/* Header / Kop */}
      <div className="text-center border-b-4 border-double border-slate-900 pb-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <img src={appConfig.logoLeft} alt="" className="w-24 h-24 object-contain" referrerPolicy="no-referrer" />
          <div className="flex-1 px-4">
            <h1 className="text-lg font-bold uppercase">{appConfig.govName}</h1>
            <h1 className="text-lg font-bold uppercase">{appConfig.deptName}</h1>
            <h1 className="text-2xl font-black uppercase text-primary">{appConfig.schoolName}</h1>
            <p className="text-xs italic">{appConfig.address}</p>
          </div>
          <img src={appConfig.logoRight} alt="" className="w-24 h-24 object-contain" referrerPolicy="no-referrer" />
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-xl font-bold uppercase underline decoration-2 underline-offset-4">PROGRAM KERJA</h2>
        <h2 className="text-xl font-bold uppercase">{appConfig.activityName}</h2>
        <h2 className="text-xl font-bold uppercase">{appConfig.academicYear}</h2>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 text-sm text-justify">
        <section>
          <h3 className="font-bold uppercase mb-2">I. PENDAHULUAN</h3>
          <p className="mb-2">
            Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa, atas limpahan rahmat-Nya sehingga kami dapat menyusun Program Kerja {appConfig.activityName} ini. 
            Pelaksanaan evaluasi ini merupakan upaya sistematis untuk mengukur ketercapaian kompetensi peserta didik selama satu semester terakhir pada {appConfig.academicYear}.
          </p>
        </section>

        <section>
          <h3 className="font-bold uppercase mb-2">II. DASAR HUKUM</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional.</li>
            <li>Peraturan Pemerintah Nomor 4 Tahun 2022 tentang Perubahan atas PP Nomor 57 Tahun 2021 tentang Standar Nasional Pendidikan.</li>
            <li>Permendikbudristek Nomor 21 Tahun 2022 tentang Standar Penilaian Pendidikan pada PAUD, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah.</li>
            <li>Kalender Pendidikan {appConfig.schoolName} {appConfig.academicYear}.</li>
          </ol>
        </section>

        <section>
          <h3 className="font-bold uppercase mb-2">III. TUJUAN</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Menilai pencapaian kompetensi lulusan secara nasional pada mata pelajaran tertentu.</li>
            <li>Mengukur mutu pendidikan di tingkat sekolah berdasarkan hasil belajar siswa.</li>
            <li>Sebagai umpan balik dalam perbaikan proses belajar mengajar di {appConfig.schoolName}.</li>
            <li>Sebagai salah satu syarat penentuan kenaikan kelas / kelulusan.</li>
          </ol>
        </section>

        <section>
          <h3 className="font-bold uppercase mb-2">IV. PESERTA KEGIATAN</h3>
          <p className="mb-2">Peserta {appConfig.activityName} di {appConfig.schoolName} terdiri dari:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Seluruh Siswa Kelas VII (Tujuh)</li>
            <li>Seluruh Siswa Kelas VIII (Delapan)</li>
          </ul>
          <p className="mt-2 text-xs italic">* Peserta wajib mengikuti seluruh rangkaian penilaian sesuai jadwal yang telah ditentukan.</p>
        </section>

        <section>
          <h3 className="font-bold uppercase mb-2">V. WAKTU PELAKSANAAN</h3>
          <p className="mb-2">Kegiatan {appConfig.activityName} dilaksanakan pada:</p>
          <table className="w-full border-collapse border border-slate-300 mb-2">
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2 font-bold w-1/3 text-left">Hari/Tanggal</td>
                <td className="border border-slate-300 p-2 text-left">: Sesuai Kalender Pendidikan / Jadwal Terlampir</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2 font-bold text-left">Waktu</td>
                <td className="border border-slate-300 p-2 text-left">: 07.30 WITA s/d Selesai</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2 font-bold text-left">Tempat</td>
                <td className="border border-slate-300 p-2 text-left">: Gedung {appConfig.schoolName}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3 className="font-bold uppercase mb-2">VI. BENTUK PENILAIAN</h3>
          <p className="mb-2">Bentuk penilaian dalam {appConfig.activityName} ini meliputi:</p>
          <ol className="list-decimal ml-6 space-y-1">
            <li><strong>Tes Tertulis:</strong> Mengukur ranah kognitif melalui instrumen tes objektif (Pilihan Ganda/Menjodohkan) dan uraian.</li>
            <li><strong>Penilaian Kinerja/Praktik:</strong> Mengukur ranah psikomotorik pada mata pelajaran tertentu (SBK, PJOK, dll).</li>
            <li><strong>Penilaian Sikap:</strong> Observasi karakter selama pelaksanaan kegiatan.</li>
          </ol>
        </section>

        <section>
          <h3 className="font-bold uppercase mb-2">VII. MEKANISME PENILAIAN</h3>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <span className="font-bold lowercase">Tahap Persiapan:</span> Penyusunan panitia, pembuatan kisi-kisi, penyusunan naskah soal, dan penggandaan logistik.
            </li>
            <li>
              <span className="font-bold lowercase">Tahap Pelaksanaan:</span> Peserta mengerjakan soal berbasis kertas/digital di bawah pengawasan ketat petugas.
            </li>
            <li>
              <span className="font-bold lowercase">Tahap Pengolahan:</span> Pemeriksaan jawaban oleh guru mata pelajaran dan penginputan nilai ke sistem raport.
            </li>
            <li>
              <span className="font-bold lowercase">Tahap Pelaporan:</span> Verifikasi hasil melalui rapat dewan guru dan penyerahan hasil kepada orang tua/wali murid.
            </li>
          </ol>
        </section>

        <section>
          <h3 className="font-bold uppercase mb-2">VIII. PENGORGANISASIAN</h3>
          <p className="mb-4">Panitia Pelaksana ditetapkan melalui Surat Keputusan Kepala Sekolah dengan susunan sebagai berikut:</p>
          <div className="grid grid-cols-2 gap-4 border p-4 rounded-lg bg-slate-50">
            <div>
              <p className="font-bold">Penanggung Jawab:</p>
              <p>Kepala {appConfig.schoolName}</p>
            </div>
            <div>
              <p className="font-bold">Ketua Panitia:</p>
              <p>__________________________</p>
            </div>
            <div>
              <p className="font-bold">Sekretaris:</p>
              <p>__________________________</p>
            </div>
            <div>
              <p className="font-bold">Bendahara:</p>
              <p>__________________________</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold uppercase mb-2">IX. PENUTUP</h3>
          <p>
            Demikian Program Kerja ini disusun untuk dijadikan acuan dalam pelaksanaan kegiatan {appConfig.activityName}. 
            Keberhasilan kegiatan ini sangat tergantung pada kerjasama dan partisipasi aktif dari seluruh warga sekolah.
          </p>
        </section>
      </div>

      {/* Signature Area */}
      <div className="mt-16 flex justify-between px-8">
        <div className="text-center">
          <p>&nbsp;</p>
          <p>Mengetahui,</p>
          <p className="font-bold">Kepala Sekolah</p>
          <div className="h-20"></div>
          <p className="font-black underline truncate">__________________________</p>
          <p className="text-xs">NIP. __________________________</p>
        </div>
        <div className="text-center">
          <p>Kediri, {currentDate}</p>
          <p>&nbsp;</p>
          <p className="font-bold">Ketua Panitia</p>
          <div className="h-20"></div>
          <p className="font-black underline truncate">__________________________</p>
          <p className="text-xs">NIP. __________________________</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProgram;
