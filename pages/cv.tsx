import type { NextPage } from 'next'
import {motion} from 'framer-motion';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

const CVCard: FC<{children: ReactNode}> = ({children}) => {
  return <motion.div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)'}}>
    {children}
</motion.div>;
}

const CV: NextPage = () => {
  return (
    <motion.div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh'}}>
      <motion.div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: 'min(100vh, 140vw)', width: 'min(70vh, 100vw)', gap: 10, margin: 10}}>
        <CVCard>a</CVCard>
        <CVCard>b</CVCard>
        <CVCard>c</CVCard>
        <CVCard>d</CVCard>
      </motion.div>
    </motion.div>
  )
}

export default CV;
