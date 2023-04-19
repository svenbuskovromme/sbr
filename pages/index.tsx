import type { NextPage } from 'next'
import {motion} from 'framer-motion';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import Link from 'next/link';
import {paddings, colors} from '../styles/inlines';
import NavButton from '../components/NavButton';

const Home: NextPage = () => {
  return (
    <motion.div style={{display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
      <h1>Sven Buskov Romme</h1>
      <NavButton href={'cv'}>cv</NavButton>
      <NavButton href={'apps'}>apps</NavButton>
      {/* <NavButton href={'apps'}>apps</NavButton>
      <NavButton href={'admin'}>admin</NavButton>
      <NavButton href={'users'}>admin</NavButton> */}
    </motion.div>
  )
}

export default Home
