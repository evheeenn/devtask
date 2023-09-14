import { colorBase } from "./colorBase";

export function getRandomColor() {
  const randomIndex = Math.round(Math.random() * colorBase.length);
  const colorCombination = colorBase[randomIndex];

  return colorCombination;
}
