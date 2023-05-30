'use client';

import type { NextPage } from 'next'
import {motion} from 'framer-motion';
import Image from 'next/image';
import { createContext, FC, Fragment, PropsWithChildren, ReactElement, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import NavButton from '../../components/NavButton';
import Center from '../../components/Center';
import Row from '../../components/Row';

interface ICVContext {
  setSelectedType: (type: CVType) => void,
  selectedType: CVType | undefined
}

const CVContext = createContext({} as ICVContext);

type CVType = 'react' | 'generic';

const CVIndex: FC = () => {
  const [context, setContext] = useState<ICVContext>();
  const [selectedType, setSelectedType] = useState<CVType>();

  useEffect(() => {
    setContext({selectedType, setSelectedType});
  }, [selectedType, setSelectedType]);

  return !!context ? 
      <CVContext.Provider value={context}>
        <Center style={{flexDirection: 'row', gap: 20, flex: 1, height: '100%'}}>
            <NavButton href='/cv/general'>General</NavButton>
            <NavButton href='/cv/react'>React</NavButton>
        </Center>
      </CVContext.Provider>
     : null;
}

export default CVIndex;
