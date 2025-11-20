import { motion } from 'framer-motion'
import { Gauge, BookOpen, ReceiptText, Download } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const PRIMARY = '#bd081c'

const Card = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${className}`}
  >
    {children}
  </motion.div>
)

export default function Dashboard({ user }) {
  return (
    <div className="space-y-6 pb-24 sm:pb-6">
      <div className="h-56 sm:h-72 w-full overflow-hidden rounded-2xl relative">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-slate-950 dark:via-slate-950/50 pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:bottom-8 text-slate-900 dark:text-white">
          <div className="text-xs uppercase tracking-wide opacity-70">Batangas State University</div>
          <div className="text-2xl sm:text-4xl font-semibold">Welcome back, {user.name.split(' ')[0]}!</div>
          <div className="mt-1 text-sm sm:text-base flex items-center gap-2"><span className="px-2 py-1 rounded-full text-white" style={{ backgroundColor: PRIMARY }}>Enrolled</span> 1st Sem 2025-2026</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="md:col-span-3 p-5">
          <div className="text-slate-900 dark:text-white text-lg font-semibold">Next Class</div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold">Technopreneurship</div>
              <div className="text-slate-500 dark:text-slate-400">2:00 PM - 3:30 PM • Room 305</div>
            </div>
            <div className="px-3 py-1.5 rounded-full text-white text-sm" style={{ backgroundColor: PRIMARY }}>Today</div>
          </div>
        </Card>

        <Card className="md:col-span-2 p-5">
          <div className="flex items-center justify-between">
            <div className="text-slate-900 dark:text-white text-lg font-semibold">Current GWA</div>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <div className="relative w-24 h-24">
              <svg viewBox="0 0 36 36" className="w-24 h-24">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                <path d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831" fill="none" stroke={PRIMARY} strokeWidth="3" strokeLinecap="round" strokeDasharray={`${(1- (1.48/5)) * 100}, 100`} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">1.48</div>
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">General Weighted Average based on your current semester performance.</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-0 overflow-hidden">
          <div className="px-5 pt-5 pb-3 flex items-center justify-between">
            <div className="text-slate-900 dark:text-white text-lg font-semibold">Announcements</div>
            <span className="text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: PRIMARY }}>Red Spartan</span>
          </div>
          <div className="max-h-64 overflow-y-auto px-2 pb-4">
            {['Enrollment for 1st Sem opens on July 15','Red Spartan Hackathon: Call for Teams','Library extended hours during midterms','New shuttle routes effective next week','Tuition payment portal maintenance on Friday'].map((a, i) => (
              <div key={i} className="mx-3 mb-2 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
                <div className="text-sm font-medium text-slate-900 dark:text-white">{a}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Posted {i+1}d ago</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="text-slate-900 dark:text-white text-lg font-semibold mb-3">Quick Actions</div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'View Grades', icon: <Gauge /> },
              { label: 'Pay Tuition', icon: <ReceiptText /> },
              { label: 'Download COR', icon: <Download /> },
            ].map((q, i) => (
              <button key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:-translate-y-0.5 transition transform text-slate-700 dark:text-slate-200">
                <div className="p-2 rounded-lg text-white" style={{ backgroundColor: PRIMARY }}>{q.icon}</div>
                <span className="text-xs text-center">{q.label}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="text-slate-900 dark:text-white text-lg font-semibold mb-3">At a Glance</div>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex justify-between"><span>Units Enrolled</span><span className="font-semibold">21</span></li>
            <li className="flex justify-between"><span>Clearances</span><span className="font-semibold">No Holds</span></li>
            <li className="flex justify-between"><span>Outstanding Balance</span><span className="font-semibold">₱ 8,250</span></li>
            <li className="flex justify-between"><span>Adviser</span><span className="font-semibold">Engr. Santos</span></li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
