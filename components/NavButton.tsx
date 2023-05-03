import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { colors, paddings } from "../styles/inlines";
import Button from "./Button";
import { LinkProps } from "next/link";

const NavButton: FC<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps>> = ({children, ...props}) => {
    return <Link {...props}>
        <Button>
            {children}
        </Button>
    </Link>
  }

  export default NavButton;