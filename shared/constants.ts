export const WIDTH = 75;
export const HEIGHT = 39;

export const PIXEL_SIZE = 25;

export const COLORS_NAMES = {
  red: "#FF0000",
  redlight: "#FFAAAA",
  green: "#00FF00",
  greenlight: "#AAFFAA",
  blue: "#0000FF",
  bluelight: "#AAAAFF",
  yellow: "#FFFF00",
  brightBlue: "#00FFFF",
  pink: "#FF00FF",
  gray: "#AAAAAA",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export const COLORS = Object.values(COLORS_NAMES);

export const KEYS = {
  tiles: "tiles",
} as const;

export const CHANNELS = {
  PIXEL_UPDATE: "pixel-update",
};
