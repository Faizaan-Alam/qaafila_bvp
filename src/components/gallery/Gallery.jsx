import { useMemo, useState } from "react";
import Lightbox from "../ui/Lightbox";
import Reveal from "../ui/Reveal";
export default function Gallery({ photos }) {
  const [active, setActive] = useState(null);
  const current = useMemo(
    () => (active === null ? null : photos[active]),
    [active, photos],
  );
  if (!photos.length) {
    return (
      <p className="font-display italic text-2xl text-parchment/80">
        Photographs will be placed here as they are collected.
      </p>
    );
  }
  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {photos.map((photo, index) => (
          <Reveal
            key={photo.id}
            className="mb-5 break-inside-avoid"
            delay={index * 0.03}
          >
            <button
              type="button"
              className="group relative block w-full overflow-hidden paper-edge text-left"
              onClick={() => setActive(index)}
              aria-label={`Open ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors" />
              <span className="absolute bottom-0 inset-x-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="kicker text-cream">{photo.category}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox
        open={Boolean(current)}
        src={current?.src ?? ""}
        alt={current?.alt ?? ""}
        caption={current?.caption}
        onClose={() => setActive(null)}
        onPrev={() =>
          setActive((index) =>
            index === null ? 0 : (index + photos.length - 1) % photos.length,
          )
        }
        onNext={() =>
          setActive((index) =>
            index === null ? 0 : (index + 1) % photos.length,
          )
        }
      />
    </>
  );
}
