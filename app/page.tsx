'use client';

import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Users, MessageSquare, FileText, Gauge, Lightbulb } from 'lucide-react';

// Dummy Data
const statsCards = [
  { title: 'Pengguna Aktif', value: '15,234', icon: Users, color: 'bg-blue-500' },
  { title: 'Laporan Masuk', value: '3,456', icon: FileText, color: 'bg-green-500' },
  { title: 'Rata-rata Kecepatan', value: '68 km/h', icon: Gauge, color: 'bg-orange-500' },
  { title: 'Topik Pertanyaan', value: '142', icon: MessageSquare, color: 'bg-purple-500' },
];

const demographicsLocation = [
  { name: 'Jakarta', value: 4200 },
  { name: 'Bandung', value: 2800 },
  { name: 'Surabaya', value: 3100 },
  { name: 'Medan', value: 1900 },
  { name: 'Semarang', value: 1600 },
  { name: 'Lainnya', value: 1634 },
];

const demographicsAge = [
  { name: '17-25', value: 3500 },
  { name: '26-35', value: 5200 },
  { name: '36-45', value: 3800 },
  { name: '46-55', value: 1900 },
  { name: '56+', value: 834 },
];

const demographicsGender = [
  { name: 'Laki-laki', value: 9100 },
  { name: 'Perempuan', value: 6134 },
];

const topicData = [
  { topic: 'SIM & STNK', count: 1250 },
  { topic: 'Tilang & Denda', count: 980 },
  { topic: 'Kecelakaan', count: 720 },
  { topic: 'Info Lalu Lintas', count: 650 },
  { topic: 'Perpanjangan SIM', count: 580 },
  { topic: 'Kehilangan STNK', count: 276 },
];

const reportTypes = [
  { month: 'Jan', kecelakaan: 65, pelanggaran: 120, kehilangan: 45 },
  { month: 'Feb', kecelakaan: 59, pelanggaran: 110, kehilangan: 38 },
  { month: 'Mar', kecelakaan: 80, pelanggaran: 135, kehilangan: 52 },
  { month: 'Apr', kecelakaan: 81, pelanggaran: 142, kehilangan: 49 },
  { month: 'Mei', kecelakaan: 56, pelanggaran: 98, kehilangan: 41 },
  { month: 'Jun', kecelakaan: 72, pelanggaran: 125, kehilangan: 47 },
];

const speedData = [
  { area: 'Tol Jakarta-Cikampek', avgSpeed: 85, limit: 100 },
  { area: 'Jl. Sudirman', avgSpeed: 52, limit: 60 },
  { area: 'Jl. Gatot Subroto', avgSpeed: 48, limit: 60 },
  { area: 'Tol Cipularang', avgSpeed: 92, limit: 100 },
  { area: 'Jl. TB Simatupang', avgSpeed: 65, limit: 80 },
];

const reportsList = [
  { id: 'RPT-001', date: '2026-01-07', time: '14:30', type: 'Kecelakaan', location: 'Tol Cipularang KM 92', description: 'Kecelakaan tunggal mobil menabrak pembatas jalan', severity: 'Tinggi', status: 'Selesai', reporter: 'Ahmad Rizki' },
  { id: 'RPT-002', date: '2026-01-07', time: '13:15', type: 'Pelanggaran', location: 'Jl. Sudirman Jakarta', description: 'Pelanggaran rambu lalu lintas saat jam sibuk', severity: 'Rendah', status: 'Proses', reporter: 'Siti Nurhaliza' },
  { id: 'RPT-003', date: '2026-01-06', time: '09:45', type: 'Kehilangan', location: 'Bandung Kota', description: 'Kehilangan STNK motor', severity: 'Rendah', status: 'Selesai', reporter: 'Budi Santoso' },
  { id: 'RPT-004', date: '2026-01-06', time: '16:20', type: 'Kecelakaan', location: 'Jl. Gatot Subroto', description: 'Tabrakan 2 mobil di persimpangan', severity: 'Sedang', status: 'Proses', reporter: 'Dewi Lestari' },
  { id: 'RPT-005', date: '2026-01-05', time: '11:30', type: 'Pelanggaran', location: 'Tol JORR', description: 'Kendaraan melintas jalur khusus', severity: 'Sedang', status: 'Selesai', reporter: 'Rudi Hermawan' },
  { id: 'RPT-006', date: '2026-01-05', time: '08:00', type: 'Info Lalu Lintas', location: 'Surabaya', description: 'Kemacetan parah di jalan protokol', severity: 'Sedang', status: 'Proses', reporter: 'Linda Wijaya' },
  { id: 'RPT-007', date: '2026-01-05', time: '15:40', type: 'Kecelakaan', location: 'Jl. Raya Bogor', description: 'Motor vs truk, korban luka ringan', severity: 'Tinggi', status: 'Selesai', reporter: 'Andi Wijaya' },
  { id: 'RPT-008', date: '2026-01-04', time: '12:10', type: 'Pelanggaran', location: 'Tol Jagorawi KM 15', description: 'Kendaraan melebihi batas kecepatan', severity: 'Sedang', status: 'Selesai', reporter: 'Maya Sari' },
  { id: 'RPT-009', date: '2026-01-04', time: '10:25', type: 'Kehilangan', location: 'Medan Kota', description: 'SIM hilang saat perjalanan', severity: 'Rendah', status: 'Proses', reporter: 'Rahmat Hidayat' },
  { id: 'RPT-010', date: '2026-01-04', time: '17:50', type: 'Kecelakaan', location: 'Jl. Ahmad Yani Semarang', description: 'Kecelakaan beruntun 3 kendaraan', severity: 'Tinggi', status: 'Proses', reporter: 'Putri Amanda' },
  { id: 'RPT-011', date: '2026-01-03', time: '14:15', type: 'Pelanggaran', location: 'Jl. Diponegoro Jakarta', description: 'Parkir sembarangan di badan jalan', severity: 'Rendah', status: 'Selesai', reporter: 'Teguh Santoso' },
  { id: 'RPT-012', date: '2026-01-03', time: '09:30', type: 'Info Lalu Lintas', location: 'Tol Cikampek', description: 'Perbaikan jalan menyebabkan kemacetan', severity: 'Sedang', status: 'Selesai', reporter: 'Fitri Handayani' },
  { id: 'RPT-013', date: '2026-01-03', time: '11:45', type: 'Kecelakaan', location: 'Jl. Pasteur Bandung', description: 'Mobil menabrak sepeda motor', severity: 'Sedang', status: 'Selesai', reporter: 'Arief Rahman' },
  { id: 'RPT-014', date: '2026-01-02', time: '16:00', type: 'Pelanggaran', location: 'Jl. HR Rasuna Said', description: 'Melawan arus lalu lintas', severity: 'Tinggi', status: 'Selesai', reporter: 'Diana Puspita' },
  { id: 'RPT-015', date: '2026-01-02', time: '13:20', type: 'Kehilangan', location: 'Surabaya Timur', description: 'Plat nomor kendaraan hilang', severity: 'Rendah', status: 'Proses', reporter: 'Hendra Gunawan' },
];

const quizRankings = [
  { rank: 1, name: 'Ahmad Fauzi', score: 950, region: 'Jakarta', badge: '🥇', quizzesTaken: 12, accuracy: 95 },
  { rank: 2, name: 'Siti Rahmawati', score: 925, region: 'Bandung', badge: '🥈', quizzesTaken: 11, accuracy: 92 },
  { rank: 3, name: 'Budi Setiawan', score: 910, region: 'Surabaya', badge: '🥉', quizzesTaken: 10, accuracy: 91 },
  { rank: 4, name: 'Dewi Kusuma', score: 885, region: 'Jakarta', badge: '', quizzesTaken: 13, accuracy: 88 },
  { rank: 5, name: 'Rina Marlina', score: 870, region: 'Medan', badge: '', quizzesTaken: 9, accuracy: 87 },
  { rank: 6, name: 'Agus Prasetyo', score: 855, region: 'Semarang', badge: '', quizzesTaken: 11, accuracy: 86 },
  { rank: 7, name: 'Lina Wati', score: 840, region: 'Jakarta', badge: '', quizzesTaken: 10, accuracy: 84 },
  { rank: 8, name: 'Yudi Hermawan', score: 820, region: 'Bandung', badge: '', quizzesTaken: 8, accuracy: 82 },
  { rank: 9, name: 'Nurul Hidayah', score: 805, region: 'Surabaya', badge: '', quizzesTaken: 9, accuracy: 81 },
  { rank: 10, name: 'Rudi Hartono', score: 790, region: 'Jakarta', badge: '', quizzesTaken: 7, accuracy: 79 },
];

const recommendations = [
  { title: 'Perbanyak SIM Keliling', description: 'Tingkatkan jumlah layanan SIM keliling di area Jakarta dan Bandung', priority: 'Tinggi' },
  { title: 'Edukasi Keselamatan Berkendara', description: 'Program sosialisasi untuk usia 17-25 tahun yang memiliki tingkat pelanggaran tertinggi', priority: 'Tinggi' },
  { title: 'Pengawasan Tol Cipularang', description: 'Peningkatan patroli di area dengan kecepatan rata-rata tinggi', priority: 'Sedang' },
  { title: 'Layanan Digital STNK', description: 'Digitalisasi proses perpanjangan STNK untuk mengurangi antrian', priority: 'Sedang' },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Polantas Menyapa Korlantas Polri</h1>
          <p className="text-gray-600 mt-2">Monitoring dan Analisis Data Lalu Lintas</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demographics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Demografi: Lokasi</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={demographicsLocation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {demographicsLocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Demografi: Umur</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={demographicsAge}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Demografi: Jenis Kelamin</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={demographicsGender}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#3b82f6" />
                  <Cell fill="#ec4899" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Topics and Report Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Topik Pertanyaan Terbanyak</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topicData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="topic" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="count" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Jenis Laporan (6 Bulan Terakhir)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={reportTypes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="kecelakaan" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="pelanggaran" stroke="#f59e0b" strokeWidth={2} />
                <Line type="monotone" dataKey="kehilangan" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Speed Data */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Rata-rata Kecepatan Berkendara per Area</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={speedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgSpeed" fill="#3b82f6" name="Kecepatan Rata-rata" />
              <Bar dataKey="limit" fill="#10b981" name="Batas Kecepatan" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <h2 className="text-lg font-semibold text-gray-900">Rekomendasi Kebijakan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    rec.priority === 'Tinggi' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {rec.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Daftar Laporan Kejadian Terbaru</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tingkat</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelapor</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reportsList.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.id}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{report.time}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{report.type}</td>
                    <td className="px-4 py-4 text-sm text-gray-500">{report.location}</td>
                    <td className="px-4 py-4 text-sm text-gray-500 max-w-xs">{report.description}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        report.severity === 'Tinggi' ? 'bg-red-100 text-red-800' : 
                        report.severity === 'Sedang' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {report.severity}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{report.reporter}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        report.status === 'Selesai' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quiz Rankings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Ranking Kuis Polantas Menyapa</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peringkat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wilayah</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kuis Diikuti</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Akurasi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {quizRankings.map((participant) => (
                  <tr key={participant.rank} className={`hover:bg-gray-50 ${participant.rank <= 3 ? 'bg-yellow-50' : ''}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      {participant.badge} {participant.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{participant.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{participant.region}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">{participant.score}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{participant.quizzesTaken}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="mr-2">{participant.accuracy}%</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${participant.accuracy}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
