export default function PageShell({ children, className = "" }) {
  return (
    <div className={`pt-28 pb-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </div>
  );
}
