import { breakpoints, spacings, shadows } from "./shared"
import { colors, blue, grey } from "./colors"

export const Light = {
  pageBackground: grey.darkGrey,
  highlighBackground: grey.midDarkGrey,
  textColor: grey.grey,
  highlighColor: colors.white,
  button: {
    background: colors.primary,
    color: colors.white,
  },
}

/* export const Dark = {
  background: colors.dark,
  color: colors.greyLight,
  button: {
    background: colors.primary,
    color: colors.white,
  },
} */

export const Dark = {
  pageBackground: grey.darkGrey,
  highlighBackground: grey.midDarkGrey,
  textColor: grey.grey,
  highlighColor: colors.white,
  button: {
    background: colors.primary,
    color: colors.white,
  },
}

export default {
  colors: {
    ...colors,
    hub: {
      blue: {
        ...blue,
      },
    },
  },
  currentTheme: {
    ...Dark,
  },
  breakpoints: {
    ...breakpoints,
  },
  spacings: {
    ...spacings,
  },
  shadows: {
    ...shadows,
  },
}
