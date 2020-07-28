/*
  In mathematics, linear interpolation is a method of curve fitting using
  linear polynomials to construct new data points within 
  the range of a discrete set of known data points.
  Lerp operations are built into the hardware of all modern computer graphics processors.
*/
export function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t
}
