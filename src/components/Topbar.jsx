import { Breadcrumbs } from './primitives/Breadcrumbs'
import { Bell, Search } from 'lucide-react'

export default function Topbar({ user }) {
  return (
    <div className="sticky top-0 z-30 bg-white/70 dark:bg-slate-900/60 backdrop-blur border-b border-slate-200/60 dark:border-white/10">
      <div className="px-4 sm:px-6 py-3 flex items-center gap-4">
        <Breadcrumbs segments={[{ label: 'Home' }, { label: 'Dashboard', active: true }]} />
        <div className="ml-auto flex items-center gap-3">
          <div className="relative hidden sm:block">
            <input className="w-72 rounded-xl bg-slate-100/80 dark:bg-white/10 border border-transparent focus:border-slate-300 dark:focus:border-white/20 px-10 py-2 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 outline-none transition" placeholder="Search subjects, fees, etc." />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
          <button className="relative p-2 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/10 transition text-slate-700 dark:text-slate-200">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#bd081c]"></span>
          </button>
          <div className="flex items-center gap-3">
            <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=bd081c&color=fff`} className="w-9 h-9 rounded-full" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">{user.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{user.program}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
