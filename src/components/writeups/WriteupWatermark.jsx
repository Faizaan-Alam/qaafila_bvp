import logo from "../../assets/logo/qaafila-logo.png";

export default function WriteupWatermark({ compact = false }) {
  return (
    <div
      className={`pointer-events-none select-none ${
        compact
          ? "absolute top-3 right-3 h-12 w-12 opacity-40"
          : "absolute inset-0 flex items-center justify-center opacity-[0.09]"
      }`}
      aria-hidden="true"
    >
      <img
        src={logo}
        alt=""
        className={compact ? "h-full w-full object-contain" : "h-[min(72%,28rem)] w-auto object-contain"}
      />
    </div>
  );
}
