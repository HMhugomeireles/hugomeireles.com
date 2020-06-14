import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const MenuShapeSvg = styled(motion.svg)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
`

export function MenuShape() {
  return (
    <MenuShapeSvg
      viewBox="0 0 1173 880"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M162 252L15 0H1141V884H740.5L510.5 690.5L440.5 382L162 252Z"
          fill="#516E8B"
        />
      </g>
      <path
        d="M194 252L47 0H1173V884H772.5L542.5 690.5L472.5 382L194 252Z"
        fill="#293745"
        stroke="#516E8B"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="-11"
          width="1156"
          height="914"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="7.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </MenuShapeSvg>
  )
}
