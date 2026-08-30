export default function FilterBar({ items, value, onChange, label }) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0"
    >
      {items.map((item) => {
        const active = item === value;
        return (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item)}
            className={`shrink-0 px-3 py-2 text-[0.68rem] tracking-[0.2em] uppercase border-b ${
              active
                ? "text-parchment border-gold"
                : "text-cream/55 border-transparent hover:text-parchment"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
