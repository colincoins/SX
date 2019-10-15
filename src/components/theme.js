import { theme } from '@chakra-ui/core';


const bgColor = { light: "white.500", dark: "gray.800" }
const color = { light: "gray.800", dark: "white" }

const customTheme = {
  ...theme,
  extendedColors: {
    ...bgColor,
    ...color
  }
}

export default customTheme