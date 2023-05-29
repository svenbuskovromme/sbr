import { FC, HTMLAttributes, PropsWithChildren } from "react"

const Component: FC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = ({children, ...props}) => {
    props.style = {fontSize: 22, fontWeight: '400', ...props.style};
    return <h1 {...props} >{children}</h1>
}

export default Component;