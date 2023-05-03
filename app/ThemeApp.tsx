'use client';

import { AnimatePresence, motion } from "framer-motion";
import React, { FC, PropsWithChildren } from "react";
import { useTheme } from "../redux/hooks";

const ThemeApp: FC<PropsWithChildren> = ({children}) => {
    const theme = useTheme();

    return (
        <>
        {/* <AnimatePresence>
            {
                <motion.div style={{position: 'absolute', width: '100vw', height: '100vh', backgroundColor: 'rgba(125,125,125)'}} />
            }
        </AnimatePresence> */}
        {
            !!theme && 
            <div style={{backgroundColor: theme?.backgroundColor, color: theme?.fontFull}}>
                {children}
            </div>
        }
        </>
    )
}

export default ThemeApp;