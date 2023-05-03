import { FC, PropsWithChildren } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { colors, paddings } from "../styles/inlines";
import Button from "./Button";
import { LinkProps } from "next/link";
import { RouteType } from "next/dist/lib/load-custom-routes";

const NavButton: FC<PropsWithChildren<{href: LinkProps<RouteType>['href']}>> = ({children, href}) => {
    return <Link href={href}>
        <Button>
            {children}
        </Button>
    </Link>
  }

  export default NavButton;