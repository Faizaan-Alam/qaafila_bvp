export const NAME_PLACEHOLDER = "Name forthcoming";
export const DATE_PLACEHOLDER = "Date to be archived";
export const TITLE_PLACEHOLDER = "Title forthcoming";
export function displayName(value, fallback = NAME_PLACEHOLDER) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}
export function isFilled(value) {
  return Boolean(value && String(value).trim().length > 0);
}
export function memberInitials(member) {
  if (isFilled(member.name)) {
    return member.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }
  return member.position
    .split(/\s+/)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);
}
export function resultLabel(entry) {
  return isFilled(entry.name) ? entry.name : "Awaiting announcement";
}
export function readingTime(content, fallback) {
  if (fallback && fallback > 0) return fallback;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}
