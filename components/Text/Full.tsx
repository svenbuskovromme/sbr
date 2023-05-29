import { FC, HTMLAttributes, PropsWithChildren } from "react"
import themeStyles from '../themeStyles.module.css'

const Component: FC<PropsWithChildren<HTMLAttributes<HTMLSpanElement>>> = ({children, ...props}) => {
    return <span className={themeStyles.textFull} {...props} >{children}</span>
}

export default Component;