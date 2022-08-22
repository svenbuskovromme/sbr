import type { NextPage } from 'next'
import {motion} from 'framer-motion';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import Link from 'next/link';
import {paddings, colors} from '../styles/inlines';

const NavButton: FC<{children: ReactNode, href: string}> = ({children, href}) => {
  return <Link href={href}>
    <motion.div style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.darkblue, borderRadius: 5, padding: paddings.button}} whileHover={{scale: 1.1}}>
      {children}
    </motion.div>
  </Link>
}

const Home: NextPage = () => {
  return (
    <motion.div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh'}}>
      <h1>Sven Buskov Romme</h1>
      <NavButton href={'cv'}>cv</NavButton>
      {/* <NavButton href={'apps'}>apps</NavButton>
      <NavButton href={'admin'}>admin</NavButton>
      <NavButton href={'users'}>admin</NavButton> */}
    </motion.div>
  )
}

export default Home
