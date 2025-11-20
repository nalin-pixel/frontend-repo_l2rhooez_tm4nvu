import { useEffect, useState } from 'react'
import { LayoutGrid, CalendarClock, GraduationCap, FileText, Wallet, User, LogOut, Moon, Sun } from 'lucide-react'

const PRIMARY = '#bd081c'

export default function Sidebar({ collapsed, onToggleTheme, theme }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640)
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const items = [
    { label: 'Dashboard', icon: <LayoutGrid size={20} />, active: true },
    { label: 'Class Schedule', icon: <CalendarClock size={20} /> },
    { label: 'Grades / GWA', icon: <GraduationCap size={20} /> },
    { label: 'Enrollment', icon: <FileText size={20} /> },
    { label: 'Student Accounts', icon: <Wallet size={20} /> },
    { label: 'Profile', icon: <User size={20} /> },
  ]

  if (isMobile) {
    // Bottom navigation for mobile
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-5 gap-1 p-2 text-xs">
          {items.slice(0,5).map((it, idx) => (
            <button key={idx} className={`flex flex-col items-center justify-center py-2 rounded-xl transition-colors ${it.active ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`} style={it.active ? { backgroundColor: PRIMARY } : {}}>
              {it.icon}
              <span className="mt-1">{it.label.split(' ')[0]}</span>
            </button>
          ))}
          <button onClick={onToggleTheme} className="flex flex-col items-center justify-center py-2 rounded-xl text-slate-700 dark:text-slate-200">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            <span className="mt-1">Theme</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <aside className={`hidden sm:flex flex-col h-screen sticky top-0 p-4 gap-4 transition-all duration-300`} style={{ width: collapsed ? 88 : 260 }}>
      <div className="flex-1 rounded-2xl border border-white/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <div className="p-4 pb-2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white" style={{ backgroundColor: PRIMARY }}>B</div>
          {!collapsed && (
            <div>
              <div className="font-semibold text-slate-900 dark:text-white leading-tight">BatStateU Portal</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">The National Engineering University</div>
            </div>
          )}
        </div>
        <nav className="px-2 py-2 space-y-1">
          {items.map((it, idx) => (
            <button key={idx} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition transform hover:-translate-y-0.5 hover:shadow ${it.active ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`} style={it.active ? { backgroundColor: PRIMARY } : { backgroundColor: 'transparent' }}>
              <span className="opacity-90">{it.icon}</span>
              {!collapsed && <span className="text-sm font-medium">{it.label}</span>}
            </button>
          ))}
        </nav>
        <div className="mt-auto border-t border-slate-200/60 dark:border-white/10 p-3 space-y-2">
          <button onClick={onToggleTheme} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-white/10 transition">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {!collapsed && <span className="text-sm font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-white/10 transition">
            <LogOut size={18} />
            {!collapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}
