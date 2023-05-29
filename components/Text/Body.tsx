import { FC, HTMLAttributes, PropsWithChildren } from "react"
import themeStyles from '../themeStyles.module.css'

const Component: FC<PropsWithChildren<HTMLAttributes<HTMLSpanElement>>> = ({children, ...props}) => {
    props.style = {fontSize: 17, fontWeight: 300, lineHeight: 1.3, ...props.style};
    
    return <p {...props} >{children}</p>;
}

export default Component;