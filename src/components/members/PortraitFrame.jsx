import { isFilled, memberInitials } from "../../utils/format";
export default function PortraitFrame({
  name,
  position,
  image,
  large = false,
  compact = false,
}) {
  const filled = isFilled(image);
  const label = isFilled(name) ? name : `${position} portrait forthcoming`;
  return (
    <div
      className={`relative overflow-hidden portrait-void paper-edge ${large ? "aspect-[4/5]" : "aspect-[3/4]"}`}
    >
      {filled ? (
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          loading="lazy"
        />
      ) : (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center ${
            compact ? "gap-1 px-2" : "gap-4 px-6"
          }`}
        >
          <span
            className={`font-display text-gold/50 ${compact ? "text-3xl" : "text-5xl"}`}
            aria-hidden="true"
          >
            {memberInitials({ name, position })}
          </span>
          {compact ? null : (
            <span className="kicker text-gold/55">Portrait forthcoming</span>
          )}
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
    </div>
  );
}
