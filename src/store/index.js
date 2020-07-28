import { createRef } from "react"
import { paragraphs } from "./state-paragraphs"

const state = {
  sections: 5,
  pages: 4,
  zoom: 75,
  top: createRef(),
  paragraphs: [...paragraphs],
}

export default state
