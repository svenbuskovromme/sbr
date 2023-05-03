import { FC, PropsWithChildren } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { colors, paddings } from "../styles/inlines";

const Button: FC<PropsWithChildren<{onClick?: () => void}>> = ({children, onClick}) => {
    return <motion.div onClick={onClick} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.darkblue, borderRadius: 5, padding: paddings.button}}>
        {children}
    </motion.div>
  }

  export default Button;