import { breakpoints, spacings, shadows } from "./shared"
import { colors, blue } from "./colors"

export const Light = {
  background: colors.white,
  color: colors.grey,
  button: {
    background: colors.primary,
    color: colors.white,
  },
}

export const Dark = {
  background: colors.dark,
  color: colors.greyLight,
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
