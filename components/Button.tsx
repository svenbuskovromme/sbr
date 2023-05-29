'use client';

import { FC, PropsWithChildren } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { colors, paddings } from "../styles/inlines";
import themeStyles from './themeStyles.module.css';

const Button: FC<PropsWithChildren<{onClick?: () => void}>> = ({children, onClick}) => {
    return <motion.div className={themeStyles.button} onClick={onClick} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 5, padding: paddings.button}}>
        {children}
    </motion.div>
}

export default Button;