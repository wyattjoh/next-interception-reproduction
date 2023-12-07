export function Modal({ children }) {
  return (
    <aside className="border prose-headings:m-0 p-5 bg-slate-200">
      <div>Modal</div>
      {children}
    </aside>
  )
}
