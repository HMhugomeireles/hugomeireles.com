import { breakpoints, spacings, shadows, gradients } from "./shared"
import { colors, blue } from "./colors"

export default {
  colors: {
    ...colors,
    hub: {
      blue: {
        ...blue,
      },
    },
  },
  gradients: {
    ...gradients,
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

export const Light = {
  background: colors.white,
  color: colors.grey,
  buttons: {
    background: colors.primary,
    color: colors.white,
  },
}

export const Dark = {
  background: colors.dark,
  color: colors.greyLight,
  buttons: {
    background: colors.primary,
    color: colors.white,
  },
}
