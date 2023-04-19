import type { NextPage } from 'next'
import {motion} from 'framer-motion';
import Image from 'next/image';
import { createContext, FC, Fragment, PropsWithChildren, ReactElement, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import NavButton from '../../components/NavButton';

interface ICVContext {
  setSelectedType: (type: CVType) => void,
  selectedType: CVType | undefined
}

const CVContext = createContext({} as ICVContext);

type CVType = 'react' | 'generic';

const CVIndex: NextPage = () => {
  const [context, setContext] = useState<ICVContext>();
  const [selectedType, setSelectedType] = useState<CVType>();

  useEffect(() => {
    setContext({selectedType, setSelectedType});
  }, [selectedType, setSelectedType]);

  return !!context ? 
      <CVContext.Provider value={context}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 20, flex: 1, height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{display: 'flex', padding: 20, justifyContent: 'center'}}>
            <NavButton href='/cv/react'>React</NavButton>
            </div>
        </div>
      </CVContext.Provider>
     : null;
}

export default CVIndex;
