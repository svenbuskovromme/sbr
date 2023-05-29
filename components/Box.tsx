import { FC, HTMLAttributes, PropsWithChildren } from "react"
import themeStyles from './themeStyles.module.css'

const Component: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({children, ...props}) => {
    return <div className={themeStyles.box} {...props} >{children}</div>
}

export default Component;