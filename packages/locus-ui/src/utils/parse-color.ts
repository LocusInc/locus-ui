/**
 * Parses a color string (hex, rgb, or raw r,g,b) into a raw "r, g, b" string
 * suitable for use with CSS rgba().
 *
 * Supported formats:
 * - Hex: "#7BEB34", "#7beb34", "#abc"
 * - RGB function: "rgb(125, 235, 52)"
 * - Raw: "125, 235, 52"
 *
 * Returns the original string unchanged if parsing fails.
 */
export function parseColor(value: string): string {
  const trimmed = value.trim();

  // Hex color: #RGB or #RRGGBB
  const hexMatch = trimmed.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  }

  // rgb(r, g, b) or rgb(r g b)
  const rgbMatch = trimmed.match(
    /^rgba?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*(?:[,/]\s*[\d.]+%?\s*)?\)$/,
  );
  if (rgbMatch) {
    return `${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}`;
  }

  // Already raw "r, g, b" or unknown — return as-is
  return trimmed;
}
