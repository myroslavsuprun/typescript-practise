enum ResistorColor {
  black = 0,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

type Color = keyof typeof ResistorColor;

export function decodedValue([first, second]: Color[]): number {

  return Number(`${ResistorColor[first]}${ResistorColor[second]}`)
}

console.log(decodedValue(["yellow", "green"]));