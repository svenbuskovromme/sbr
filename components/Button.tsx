'use client';

import { FC, PropsWithChildren } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { colors, paddings } from "../styles/inlines";
import { useTheme } from "../redux/hooks";

const Button: FC<PropsWithChildren<{onClick?: () => void}>> = ({children, onClick}) => {
    const theme = useTheme();
    return <motion.div onClick={onClick} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme?.buttonColor, borderRadius: 5, padding: paddings.button}}>
        {children}
    </motion.div>
}

export default Button;