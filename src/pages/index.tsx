import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import gsap, { Back } from 'gsap'
import {Logo} from '../components/logo'

export default function Home() {
  

  return (
    <div>
      <h1>Hello</h1>
      <Logo />
    </div>
  )
}
