import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'

const PRIMARY = '#bd081c'

function App() {
  const [theme, setTheme] = useState('light')
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(preferred)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.classList.add('bg-slate-950')
      document.body.classList.remove('bg-[#f4f4f5]')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('bg-slate-950')
      document.body.classList.add('bg-[#f4f4f5]')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const user = { name: 'Juan Dela Cruz', program: 'BS Civil Engineering' }

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100">
      <div className="flex">
        <Sidebar collapsed={collapsed} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} theme={theme} />
        <main className="flex-1 min-h-screen">
          <Topbar user={user} />

          <div className="px-4 sm:px-6 py-6">
            {/* Collapsible trigger */}
            <div className="hidden sm:flex mb-4">
              <button onClick={() => setCollapsed(c => !c)} className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:-translate-y-0.5 transition" style={{ color: PRIMARY }}>
                {collapsed ? 'Expand Menu' : 'Collapse Menu'}
              </button>
            </div>

            <Dashboard user={user} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
