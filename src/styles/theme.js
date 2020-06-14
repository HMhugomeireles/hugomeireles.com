import { breakpoints, spacings, shadows, gradients } from "./shared"
import { colors, mono } from "./colors"

export default {
  colors: {
    ...colors,
    mono: {
      ...mono,
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
