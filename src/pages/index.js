import React from "react"
import { Container, Section, HeroInfo, Image, About, Bio } from "../components"

import { Canvas, useFrame } from "react-three-fiber"

function Box() {
  const meshRef = React.useRef()
  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  )

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

function IndexPage(props) {
  return (
    <React.Fragment>
      <Canvas style={{ position: "fixed", backgroundColor: "#323538" }}>
        <ambientLight intensity={0.3} />
        <Box />
      </Canvas>
      <Container>
        <Section>
          <HeroInfo />
          <Image
            imageSrc={
              "https://www.efdemon.com/wp-content/uploads/2020/02/hippie-viking-300x432.jpg"
            }
            gridColumn={"3 / 4"}
          />
        </Section>
        <Section>
          <Image
            imageSrc={
              "https://www.efdemon.com/wp-content/uploads/2020/02/hippie-viking-300x432.jpg"
            }
            gridColumn={"2 / 3"}
          />
          <About />
        </Section>
        <Section>
          <Bio />
          <Image
            imageSrc={
              "https://www.efdemon.com/wp-content/uploads/2020/02/hippie-viking-300x432.jpg"
            }
            gridColumn={"3 / 4"}
          />
        </Section>
      </Container>
    </React.Fragment>
  )
}

export default IndexPage
