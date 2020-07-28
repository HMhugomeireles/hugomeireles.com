import React, { useEffect, useRef, createRef, useMemo } from "react"
//import { Container, Section, HeroInfo, Image, About, Bio } from "../components"

import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import { Block, useBlock } from "../components/threejs/blocks"
import { Text, MultilineText } from "../components/threejs/Text"
import Plane from "../components/threejs/Plane"
import Paragraph from "../components/threejs/Paragraph"

import state from "../store/index"

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [
    images,
  ])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text
            left
            size={w * 0.08}
            position={[-w / 3.2, 0.5, -1]}
            color="#d40749"
          >
            MOKSHA
          </Text>
        </Block>
        <Block factor={1.0}>
          <Dom position={[-w / 3.2, -w * 0.08 + 0.25, -1]}>
            It was the year 2076.{mobile ? <br /> : " "}The substance had
            arrived.
          </Dom>
        </Block>
      </Block>
      <Block factor={1.2} offset={5.7}>
        <MultilineText
          top
          left
          size={w * 0.15}
          lineHeight={w / 5}
          position={[-w / 3.5, 0, -1]}
          color="#2fe8c3"
          text={"four\nzero\nzero"}
        />
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane
            args={[50, height, 32, 32]}
            shift={-4}
            color={color}
            rotation={[0, 0, Math.PI / 8]}
            position={[0, 0, -10]}
          />
        </Block>
      ))}
      <Block factor={1.25} offset={8}>
        <Dom
          className="bottom-left"
          position={[-canvasWidth / 2, -canvasHeight / 2, 0]}
        >
          Culture is not your friend.
        </Dom>
      </Block>
    </>
  )
}

function IndexPage(props) {
  const scrollArea = useRef()

  const onScroll = e => (state.top.current = e.target.scrollTop)

  useEffect(() => {
    onScroll({ target: scrollArea.current })
  }, [])

  return (
    <React.Fragment>
      <Canvas
        style={{ position: "fixed", backgroundColor: "#323538" }}
        concurrent
        pixelRatio={1}
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <Content />
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div
            key={index}
            id={"0" + index}
            style={{ height: `${(state.pages / state.sections) * 100}vh` }}
          />
        ))}
      </div>
      {/* <Container>
        <Section>
          <HeroInfo />
          <Image
            imageSrc={
              "https://www.efdemon.com/wp-content/uploads/2020/02/hippie-viking-300x432.jpg"
            }
            gridColumn={"3 / 4"}
          />
        </Section>
      </Container> */}
    </React.Fragment>
  )
}

export default IndexPage
