import { FC, PropsWithChildren } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { colors, paddings } from "../styles/inlines";
import Button from "./Button";

const NavButton: FC<PropsWithChildren<{href: string}>> = ({children, href}) => {
    return <Link href={href}>
        <a>
            <Button>
                {children}
            </Button>
        </a>
    </Link>
  }

  export default NavButton;