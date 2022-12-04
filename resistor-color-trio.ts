export enum ResistorColor {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

type Color = keyof typeof ResistorColor;

function addOhms(totalValue: string): string {
  if (totalValue.endsWith('000')) {
    return `${totalValue.slice(0, -3) + ' kiloohms'}`;
    
  }

  return totalValue + ' ohms';
  
}
  
  
export function decodedResistorValue([firstColor, secondColor, thirdColor]: Color[]): string {
  const firstValue = ResistorColor[firstColor];
  const secondValue = ResistorColor[secondColor]
  const thirdValue = "0".repeat(ResistorColor[thirdColor]);

  const totalValue = `${firstValue}${secondValue}${thirdValue}`;


  return addOhms(totalValue);

}
