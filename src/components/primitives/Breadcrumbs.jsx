export function Breadcrumbs({ segments }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
      {segments.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className={`${s.active ? 'text-slate-900 dark:text-white font-medium' : ''}`}>{s.label}</span>
          {i < segments.length - 1 && <span className="opacity-50">/</span>}
        </div>
      ))}
    </nav>
  )
}
