import { colorOptions } from "./mock-data"

export const rupeeConverter = (amount: number) => {
  return `\u20B9${amount.toLocaleString('en-IN')}`
}

export const themeSelector = (color: string, theme: "light" | "dark") => {
  return colorOptions.find((colorOpt) => colorOpt.value === color)?.options[theme]
}
